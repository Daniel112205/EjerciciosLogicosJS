const capitalizeLetters = (str) => {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}

module.exports = {
    capitalizeLetters
}