const reverseString = (str) => {
    let cadena = "";
    if(str.length > 15 || str.length <= 1 || typeof str != "string"){
        throw new Error("Tipo de dato o longitud no admitidos");
    }else{
        for(let i = str.length-1; i >= 0; i--){
            cadena = cadena + str.charAt(i);
        }
        return cadena;
    } 
}

module.exports = {
    reverseString
}