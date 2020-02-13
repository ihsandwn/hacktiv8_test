function secondGreatLow(arrayVal){
    arrayVal.sort(function(x,y){
        return x-y
    });
    var objVal = [arrayVal[0]];
    var result = [];

    for(var j=1;j<arrayVal.length;j++){
        if(arrayVal[j-1] !== arrayVal[j]){
            objVal.push(arrayVal[j]);
        }
    }
    result.push(objVal[1],objVal[objVal.length-2]);
    return result.join(',');
}
console.log(secondGreatLow([12,7,98,106,7]));