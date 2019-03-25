function LetterChanges(str) { 

    var newStr = [];
    
        for (var i = 0; i < str.length; i++) { 
            if (/[a-y]/.test(str[i])) { 
                newStr[i] = String.fromCharCode(str[i].charCodeAt(0) + 1); 
    
                    if (/[aeiou]/.test(newStr[i])) { 
                        newStr[i] = newStr[i].toUpperCase(); 
                    } 
            } 
            else if (/[z]/.test(str[i])) { 
                newStr[i] = "A"; 
            } 
            else if (/[!?,.=+-_]/.test(str[i])) { 
                newStr[i] = ""; 
            } 
            else newStr[i]= str[i]; 
            } 
        
        var reverse = newStr.join('');
        console.log(reverse); 
    } 
    
    console.log("TASK #3");
    LetterChanges("dog");
    LetterChanges("drink cola!");