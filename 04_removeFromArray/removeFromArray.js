const removeFromArray = function(array, ...args) {
    for(let f in args) {
        for(let i = 0; i <= array.length; i++) {
            if (array[i] === args[f]){
                array.splice(array.indexOf(array[i]), 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
