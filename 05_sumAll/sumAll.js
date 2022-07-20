const sumAll = function (begin, end) {

    // Error handlers
    for(let i = 0; i<arguments.length; i++){
        if(arguments[i] < 0 || !((typeof arguments [i]) === 'number') ){
            return 'ERROR';
        }
    }

    // parses (begin, end) to (smaller, larger)
    // handles for begin > end & begin < end
    let larger, smaller;

    larger = begin > end ? begin : end;
    smaller = begin > end? end : begin;

    // Sum calculator
    let sum = 0;
    for (let i = larger; i >= smaller; i--) {
        sum += i;
    }

    return sum;

};

console.log(sumAll(123, 1));



// Do not edit below this line
module.exports = sumAll;
