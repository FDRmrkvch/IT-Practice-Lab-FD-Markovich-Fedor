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
        this.closeButton = document.getElementById("closeNotifications");
        let switchesBlock = document.querySelector(".switches");
        this.switches = switchesBlock.getElementsByTagName("button");
        this.text = document.querySelector(".inf");
        this.input = document.getElementById("input");
        this.addEvent();
    }

}