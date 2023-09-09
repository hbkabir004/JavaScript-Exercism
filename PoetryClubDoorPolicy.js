const frontDoorResponse = (poemLine) =>{
    let trimmedPoemLine = poemLine.trim();
    return trimmedPoemLine[0];
}

// console.log(frontDoorResponse('Stands so high'));

const frontDoorPassword =(str)=>{
    let trimmedStr = str.trim();
    return frontDoorResponse(trimmedStr).toUpperCase() + trimmedStr.slice(1).toLowerCase();
}

// console.log(frontDoorPassword('Shine'));

const backDoorResponse = (str) =>{
    return str.trim().slice(-1)
}

// console.log(backDoorResponse('Stands so high      '));
// console.log('Stands so high'.length());

const backDoorPassword = (response) =>{
    return frontDoorResponse(response).trim().toUpperCase() + response.trim().slice(1).toLowerCase() +', please'
}

// console.log(backDoorPassword('horse'));