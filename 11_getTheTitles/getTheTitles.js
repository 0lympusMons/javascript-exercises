const getTheTitles = function(arr) {
    let titles = arr.map(function(book){
        return book.title;
    });

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
