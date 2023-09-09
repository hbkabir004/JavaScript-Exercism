const WORKING_HOUR_PER_DAY = 8 ;
const BILLABLE_DAYS = 22 ;

const dayRate = (ratePerHour) =>{
    return (WORKING_HOUR_PER_DAY * ratePerHour)
}

// console.log(dayRate(89));

const daysInBudget = (budget, ratePerHour) =>{
    let dailyRate = dayRate(ratePerHour);
    return Math.floor((budget/dailyRate));
}

// console.log(daysInBudget(20000, 89));

const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
    const fullMonths = Math.floor(numDays / BILLABLE_DAYS);
    const remainingDays = numDays % BILLABLE_DAYS;
    const fullMonthPrice = fullMonths * BILLABLE_DAYS * dayRate(ratePerHour);
    const discountedPrice = discount * fullMonthPrice;

    return Math.ceil(fullMonthPrice - discountedPrice + remainingDays * dayRate(ratePerHour))
   
}

console.log(priceWithMonthlyDiscount(89, 230, .42));