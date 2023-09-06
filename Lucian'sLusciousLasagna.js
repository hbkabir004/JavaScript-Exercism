const EXPECTED_MINUTES_IN_OVEN = 40;
const EXPECTED_MINUTES_FOR_EVERY_LAYER = 2;

const remainingMinutesInOven = (actualMinutesInOven) =>{
    let result = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
    return console.log(result);
}

remainingMinutesInOven(30);

const preparationTimeInMinutes = (lasagnaLayer) =>{
    let result = EXPECTED_MINUTES_FOR_EVERY_LAYER * lasagnaLayer;

    return console.log(result);
}

preparationTimeInMinutes(5);

const totalTimeInMinutes = (lasagnaLayer, actualMinutesInOven ) =>{
    let result = (lasagnaLayer * EXPECTED_MINUTES_FOR_EVERY_LAYER) + actualMinutesInOven ;

    return console.log(result);
}

totalTimeInMinutes(3, 20);

