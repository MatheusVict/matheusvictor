export function getDifferenceDateInYearsAndMonths(endDate: Date) {
    const startDate = new Date('2022-01-01');

    if (startDate > endDate) {
        console.error('Start date must be before end date');
        return { years: 0, months: 0 };
    }

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (endDate.getDate() < startDate.getDate()) {
        months--;
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    return {
        years,
        months
    };
}