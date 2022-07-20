const reverseString = function(string) {
    let length = string.length;
    length--; //index ends at 4 for "hello" argument
    let reversedString = "";

    //starts from last char of string
    for(let i =length; i>=0; i--){
        reversedString += string.charAt(i);
    }

    return reversedString;
};

// reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
