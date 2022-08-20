const priceOne = 15.678;
const priceTwo = 123.965;
const priceThree = 90.2345;

let expensive = (Math.max (priceOne,priceTwo,priceThree));
// console.log (expensive);

let cheap = (Math.min (priceOne,priceTwo,priceThree));
// console.log (cheap);

let priceTogether = (priceOne + priceTwo + priceThree);
// console.log (priceTogether);

let priseWisoutCeil = (Math.floor (priceOne) +  Math.floor (priceTwo) +  Math.floor (priceThree));
// console.log (priseWisoutCeil);

let roundedToHundreds = ((Math.floor (priseWisoutCeil / 100) * 100));
// console.log (roundedToHundreds);

let x = (Math.floor(priceTogether));
if((x%2)===0){
   x = 'парне';
}
else {
   x = 'непарне';
}
// console.log (x);

let rest = (500 - (priceTogether));
// console.log (rest);

let averageValue = ((priceTogether/3).toFixed(2));
// console.log (averageValue);

const MAX_DISCOUNT = 25;
const MIN_DISCOUNT = 10;
let discount = Math.floor((MAX_DISCOUNT - MIN_DISCOUNT) * Math.random() + MIN_DISCOUNT);
// console.log (discount);

let randomDiscount = ((priceTogether - discount).toFixed(2));
// console.log (randomDiscount);

let profit = ((priceTogether / 2) - discount);
// console.log (profit);



let oll = `найдорожчий товар: ${expensive}
найдешевший товар: ${cheap}
вартість всіх товарів: ${priceTogether}
вартість всіх товарів без копійок: ${priseWisoutCeil}
сумa товарів округлена до сотень: ${roundedToHundreds}
булеве значення: ${x}
сума решти: ${rest}
середнє значення цін: ${averageValue}
випадкова знижка: ${discount}
сума до оплати зі знижкою: ${randomDiscount}
чистий прибуток: ${profit}
`;
console.log (oll);


