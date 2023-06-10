const fibonacci = a => {
    if (a <= 0) return 'OOPS';

    a = parseInt(a);
    oldNumber = 1;
    newNumber = 1;
    for(i=1; i <= (a - 2); i++){
        let temp = newNumber // 1 2
        newNumber+=oldNumber // 2 3
        oldNumber = temp // 1
    }
    return newNumber
};

// Do not edit below this line
module.exports = fibonacci;
