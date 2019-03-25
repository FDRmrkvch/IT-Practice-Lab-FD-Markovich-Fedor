function FindLongestString(sen) {

    var sent = sen.split(" ");
    var longest = 0;
    var word = null;
        
    sent.map(function(sent) {
        if (longest < sent.length) {
            longest = sent.length;
            word = sent;
            }
        });
console.log(word);
}

console.log("TASK #1");
FindLongestString("My favorite juice is grapefruit");
FindLongestString("They often help us");