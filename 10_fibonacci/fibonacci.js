const fibonacci = function (index) {

    //If index is a string, convert it to number
    //else if, index is a negative num, return OOPS
    
    if (typeof index == "string") {
        index = Number(index);

    } else if (index < 1) {
        return "OOPS";
    }


    let fiboArray = [1, 1];

    for (let i = 0; i < index; i++) {

        let sum = fiboArray[i] + fiboArray[i + 1];
        fiboArray.push(sum);
    }

    return fiboArray[--index];
};



// Do not edit below this line
module.exports = fibonacci;
