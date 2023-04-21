const repeatString = function(string, num) {
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

// Do not edit below this line
module.exports = repeatString;
