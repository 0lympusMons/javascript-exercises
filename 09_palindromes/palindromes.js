const prompt = require('prompt-sync')({ sigint: true });

const removePunctuations = function (arr){
    arr = arr.filter(letter => {
        if (letter === "," || letter === "." || letter === "!" || letter === "?" || letter ===undefined || letter === " ") {
            return false;
        }else{
            return letter;
        }
    });

    return arr;
}

const palindromes = function (str) {
    console.log();

    let bool = false;

    let arrayOfString = str.split('');

    let arrShesh = removePunctuations(arrayOfString);
    let copyOfArray = arrShesh.slice().reverse();

    // console.log(`\nOriginal: ${arrShesh}\nReversed: ${copyOfArray}`)

    if(arrShesh.toString().toLowerCase() == copyOfArray.toString().toLowerCase()){
        bool = true;
    }
    // console.log(`${arrShesh} === ${copyOfArray}`);

    return bool;

};


// Do not edit below this line
module.exports = palindromes;
