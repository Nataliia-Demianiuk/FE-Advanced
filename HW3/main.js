let firstValue;
let secondValue; 
let thirdValue;
let fourthValue;
while (!(firstValue % 1 === 0 && Number.isInteger(parseInt(firstValue)))){
   firstValue = prompt('Введіть перше значення ', );
 if (!(firstValue % 1 === 0 && Number.isInteger(parseInt(firstValue)))) {
   alert("Це має бути ціле число");
 } 
}

while (!(secondValue % 1 === 0 && Number.isInteger(parseInt(secondValue)))){
   secondValue = prompt('Введіть друге значення (степінь, до якого буде піднесене ваше перше значення)', );
    if (!(secondValue % 1 === 0 && Number.isInteger(parseInt(secondValue)))) {
      alert("Це має бути ціле число");
    }
   }
while (!(thirdValue % 1 === 0 && Number.isInteger(parseInt(thirdValue)))){
   thirdValue = prompt('Введіть третє значення (зарплата), з якого буде вираховуватись податок в розмірі 19.5%', );
      if (!(thirdValue % 1 === 0 && Number.isInteger(parseInt(thirdValue)))) {
      alert("Це має бути ціле число");
      
      }
   }
while (!(fourthValue % 1 === 0 && Number.isInteger(parseInt(fourthValue)))){
   fourthValue = prompt('Введіть четверте значення', );
      if (!(fourthValue % 1 === 0 && Number.isInteger(parseInt(fourthValue)))) {
      alert("Це має бути ціле число");
      
      }
   }

console.log(firstValue, secondValue, thirdValue, fourthValue);



function getMaxValue(...rest){
   let currentValue = rest[0];

   for (let i = 0; i < rest.length; i++) {
      if (currentValue < rest[i]){
         currentValue = rest[i];
      }
   }

 return currentValue; 
}
const firstResult = getMaxValue(Number(firstValue), Number(secondValue), Number(thirdValue), Number(fourthValue));
console.log(firstResult);




function pow(x,n){
   let powerValue = x;

   for (let i = 1; i < n; i++){
      powerValue *= x;
   }
   return powerValue;
}
const secondResult = pow(Number(firstValue), Number(secondValue));
console.log(secondResult);






let enterName = prompt ("Введіть будь-яке ім'я");

function formatName(name){
   const correctedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
   console.log(correctedName);
   return correctedName
}
const thirdResult = formatName(enterName);
console.log(thirdResult);







function calcSum (value){
   let n = 19.5;
   let m = value;
   return m - (m * n / 100);

}
const fourthResult = calcSum(thirdValue);
console.log(fourthResult);




function getRandomNumber (min, max){
   return Math.floor(Math.random() * (max - min) + min);
}
const fifthResult = getRandomNumber (Number(fourthValue), Number(thirdValue));
console.log(fifthResult);




let enterWord = prompt ("Введіть будь-яке слово для перевірки чи воно є паліндромом");

function isPalindrom(str){
   return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}
const sixthResult = isPalindrom (enterWord)
console.log(sixthResult);






document.writeln(`Найбільшим числом, які були введені  є число ${firstResult} <br>`); 
document.writeln(`Число ${firstValue} піднесене до ${secondValue} степеня дорівнює ${secondResult} <br>`);
document.writeln(`Вами було введено ім'я ${thirdResult} <br>`);
document.writeln(`Сума, що залишилася після оплати податку  від зарплати в ${thirdValue}грн дорівнює ${fourthResult}грн <br> `); 
document.writeln(`Випадкове число в діапазоні від ${fourthValue} до ${thirdValue} є ${fifthResult} <br>`);
document.writeln(`Чи ваше слово паліндром? Відповідь ${sixthResult} <br>`);