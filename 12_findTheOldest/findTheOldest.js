const findTheOldest = function (people) {


    let oldestPerson = people.sort(function (a, b) {

        if ((findAge(a)) > (findAge(b))) {
            return 1;
        } else if ((findAge(a)) < (findAge(b))) {
            return -1
        }

        // return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
    }).reverse();

    let oldestPersonName = oldestPerson[0].name;


    return oldestPerson[0];


};

let findAge = function (person) {

    let year = new Date().getFullYear();
    if (person.yearOfDeath === undefined) {
        return year - person.yearOfBirth;
    }

    return person.yearOfDeath - person.yearOfBirth;
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

// console.log(findTheOldest(people));

// console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
