function arrayOfMultiples (num, length) {
    let newArray = [];
    let mul = 0;
    for(let i = 1;  length > newArray.length; i ++){
        mul = i * num;
        newArray.push(mul);
    }
    return newArray;
}

 module.exports = arrayOfMultiples;
