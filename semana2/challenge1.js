function twoSums(numbs, target) {
    let newArray = [];
    for(let i = 0; i < numbs.length; i++){
        for(let j = 1; j < numbs.length; j++){
            if(i != j && numbs[i] + numbs[j] === target){
                newArray.push(numbs.indexOf(numbs[i]),numbs.lastIndexOf(numbs[j]));
                return newArray;
            }   
        }
    }
}

module.exports = twoSums;
