const sumAll = function(a, b) {

    if(a > b){
        let sum = 0;
        for(i = b; i<=a; i++){
            sum += i
        }
        return sum 
    }

    else if(a < 0 || b < 0){
        return 'ERROR'
    }



    else if ((typeof a === "number") && (typeof b === "number")) {
        let sum = 0;
        for(i = a; i<=b; i++){
            sum += i
        }
        return sum
    } else {
        return 'ERROR'
    }

};


// Do not edit below this line
module.exports = sumAll;
