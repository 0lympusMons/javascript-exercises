const leapYears = function (year) {

    let isLeapYear = false;

    //     >leap years:
    // >year%4===0
    // >year%100== not leapyear, unless if year %400===0

    if (year % 4 === 0) {

        if (year % 100 === 0) {
            if (year % 400 === 0) {

                isLeapYear = true;

            } else {

                isLeapYear = false;
            }
        } else if (year % 100 !== 0) {

            isLeapYear = true;

        }
    }

    return isLeapYear;
};

console.log(leapYears(1996));

// Do not edit below this line
module.exports = leapYears;
