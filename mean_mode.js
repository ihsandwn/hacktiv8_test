function mean(arrayVal){
    var increase = 0;
    arrayVal.forEach(number => {
        increase += number;
    });
    var mean = increase / arrayVal.length;
    return mean;
}

function mode(arrayVal){
    var modeArray = {};

    arrayVal.forEach(number => {
        if (!modeArray[number]) modeArray[number] = 0;
        modeArray[number]++;
    });

    var maxMode = 0;
    var modes = [];
    for (var number in modeArray) {
        if (modeArray[number] > maxMode) {
        modes = [number];
        maxMode = modeArray[number];
        }
        else if (modeArray[number] === maxMode) modes.push(number);
    }
    if (modes.length === Object.keys(modeArray).length) modes = [];
    return modes;
}

if(mode([3,5,3,1,3]) == mean([3,5,3,1,3])){
    console.log(1);
}else{
    console.log(0);
}