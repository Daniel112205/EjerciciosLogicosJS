function divisibleByLeft(n) {
    //Implementación
    let array = String(n).split("").map((n) => {
        return Number(n);
    });
    let value = false;
    let newArray = [];
    newArray.push(value);
    let aux = 1 ;
    for(let i = 0 ; i < array.length-1; i++){
        if(array[aux] % array[i]  === 0 ){
            value = true;
            newArray.push(value);
        }else{
            value = false;
            newArray.push(value);
        }
        aux++;
    }
    return newArray;
}

module.exports = divisibleByLeft;
