const canExecuteFastAttack = (knightIsAwake) => {
    return !knightIsAwake;
}

const canSpy = (knightIsAwake, archerIsAwake, prisonerIsAwake) => {
    return (knightIsAwake === true || archerIsAwake === true || prisonerIsAwake === true);

}

const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
    return (archerIsAwake === false && prisonerIsAwake === true);

}

const canFreePrisoner = (knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) => {
    return (archerIsAwake === false && petDogIsPresent === true) || (petDogIsPresent === false && knightIsAwake === false && archerIsAwake === false && prisonerIsAwake === true);
}

console.log(canExecuteFastAttack(false));