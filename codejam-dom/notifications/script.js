window.onload = function () {
    if (!localStorage.noLoading) {
        let notifications = new Notifications;
        notifications.switches[1].click();
        setTimeout(function () {
            let block = document.querySelector(".notificationBox");
            block.style.display = "block";
        }, 1000)
    }
    else {
        let notifications = document.querySelector(".notificationBox");
        notifications.style.display = "none";
    }
}

class Notifications {
    constructor() {
        this.index = null;
        this.closeButton = null;
        this.switches = null;
        this.text = null;
        this.input = null;
        this.notificationsText = ["1","2","3","4","5","6"]
        this.start();
    }
    start() {
        this.closeButton = document.getElementById("closeButton");
        let switchesBlock = document.querySelector(".switch");
        this.switches = switchesBlock.getElementsByTagName("button");
        this.text = document.querySelector(".focus");
        this.input = document.getElementById("input");
        this.addEvent();
    }

    addEvent() {
        let that = this;
        this.closeButton.addEventListener("click", function () {
            let block = document.querySelector(".notificationBox");
            block.style.display = "none";
            if (that.input.checked) {
                localStorage.setItem("noLoading", "true");
            }
        })

        for (let i = 1; i < that.switches.length - 1; i++)(function (i) {
            that.switches[i].addEventListener("click", function () {
                that.index = i;
                that.handler(that, i);
            })
        })(i);


        this.switches[0].addEventListener("click", function () {
            if (that.index == 1) that.index = 7;
            that.handler(that, that.index - 1);
            that.index = that.index - 1;
        });

        this.switches[7].addEventListener("click", function () {
            if (that.index == 6) that.index = 0;
            that.handler(that, that.index + 1);
            that.index = that.index + 1;
        })

        document.onkeyup = function (e) {
            if (e.keyCode == 37) {
                that.switches[0].click();
            }
            if (e.keyCode == 39) {
                that.switches[7].click();
            }
            if (e.keyCode == 67) {
                that.closeButton.click();
            }
        }
    }
    handler(that, i) {
        for (let y = 1; y < that.switches.length - 1; y++) {
            that.switches[y].classList.remove("clickbutton");
        }
        that.text.innerHTML = that.notificationsText[i - 1];
        that.switches[i].classList.add("clickbutton");
    }
}