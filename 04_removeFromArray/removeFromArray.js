const removeFromArray = function (arr, toRemove) {
    // filter

    let newArr = arr.filter(x => {

        let bool = false;

        for(let i = 1; i<arguments.length; i++){
            if(x !== arguments[i]){
                bool=true;
            }else{
                bool=false;
                break;
            }
        }

        if(bool===true) return x;
    }
    );

    return newArr;
}

removeFromArray([1, 2, 3, 4], 3, 2);

    // Do not edit below this line
    module.exports = removeFromArray;
