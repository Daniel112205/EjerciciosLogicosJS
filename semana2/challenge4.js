function landMass() {
    //Implementación
    let result = (arguments[1] * 100) / 148940000;
    result = result.toFixed(2);
    let pais = arguments[0];
    let masa = {
        percent : Number(result),
        message : pais + " representa el "+ result +" de la masa de la tierra"
    }
    return masa;
}
module.exports = landMass;
