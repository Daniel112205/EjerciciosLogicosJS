const reverseInt = (number) => {
    if(typeof number != "number"){
        throw new Error("Tipo de dato no admitido");
    }else{
        const intRev = number.toString().split('').reverse().join('');
        return parseInt(intRev) * Math.sign(number);
    } 
}

module.exports = {
    reverseInt
}