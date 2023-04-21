const repeatString = function(string, num) {
    // let i = 0;
    // let result;
    // while(i <= num) {
    //     result += string;
    //     i++ ;
    // }
    // return result
    if (num == 1) {
        return string
    }
    else if (num == 0) {
        return '';
    }
    else if (num < 0) {
        return 'ERROR'
    }



    let repeatedString = string;
    for (let i = 1; i <= num-1; i++) {

        repeatedString = repeatedString + string;
    }
     return repeatedString;
};

repeatString('hey', 3);

repeatString('hey', 10);

// Do not edit below this line
module.exports = repeatString;
