const palindromes = function (string) {
    string = string.toUpperCase(); 
    string = string.replace(/[^a-zA-Z0-9]/g, '');
    string = string.split('');
    let oldString = string.join('');
    //for some reason, string was also reversed in the process??
    let revString = string.reverse();
    oldString = oldString.split('')
    for(i = 0; i <= (string.length - 1); i++){
        
        if (!(oldString[i] === revString[i])){
            return false;
            
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
