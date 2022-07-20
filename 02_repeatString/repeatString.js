const repeatString = function(string, n) {

    if(n<0) return "ERROR";

    let string2 = "";

    for (let index = 0; index < n; index++) {
        string2 += string;
    }

    return string2
};


// Do not edit below this line
module.exports = repeatString;
