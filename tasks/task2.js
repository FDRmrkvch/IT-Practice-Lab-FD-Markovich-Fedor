function WordReverse(str) {

    if (str == "") {   
    return str;
    }
    else {
    return WordReverse(str.substr(1) ) + str[0];
    }
}

console.log("TASK #2");
console.log(WordReverse("I love animals"));
console.log(WordReverse("shopping"));
console.log(WordReverse("I am busy"));