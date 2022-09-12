const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes(salary) {
    return this.tax * salary; 
}

document.writeln(`В Україні при зарплаті 15000 грн сума податку складає: `, getMyTaxes.call(ukraine, 15000),` грн`, `<br>`);
document.writeln(`В Латвії при зарплаті 1300 євро сума податку складає: `, getMyTaxes.call(latvia, 1300),` євро`, `<br>`);
document.writeln(`В Литві при зарплаті 2550 євро сума податку складає: `, getMyTaxes.call(litva, 2550),` євро`, `<br>`);


function getMiddleTaxes() {
    return this.tax * this.middleSalary; 
}

document.writeln(`В Україні ІТ-спеціалісти в середньому платять: `, getMiddleTaxes.call(ukraine),` грн податків`, `<br>`);
document.writeln(`В Латвії ІТ-спеціалісти в середньому платять: `, getMiddleTaxes.call(latvia),` євро податків`, `<br>`);
document.writeln(`В Литві ІТ-спеціалісти в середньому платять: `, getMiddleTaxes.call(litva),` євро податків`, `<br>`);


function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies; 
}

document.writeln(`В Україні ІТ-спеціалісти всього платять: `, getTotalTaxes.call(ukraine),` грн податків`, `<br>`);
document.writeln(`В Латвії ІТ-спеціалісти всього платять: `, getTotalTaxes.call(latvia),` євро податків`, `<br>`);
document.writeln(`В Литві ІТ-спеціалісти всього платять: `, getTotalTaxes.call(litva),` євро податків`, `<br>`);


function getMySalary() {
    let salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    let taxes = (this.tax * salary).toFixed(1);
    let profit = salary - taxes;
    let obj = {
        salary,
        taxes,
        profit
    }
    return obj;
}

setInterval(() => console.log(`Заробіток в Україні складає:`, getMySalary.call(ukraine)), 10000);
setInterval(() => console.log(`Заробіток в Латвії складає:`, getMySalary.call(latvia)), 10000);
setInterval(() => console.log(`Заробіток в Литві складає:`, getMySalary.call(litva)), 10000);

