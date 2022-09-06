// функція №1

function getRandomArray(length, min, max){
    const myArray = [];
    for(let i = 0; i < length; i++){
    myArray.push(Math.floor(Math.random() * (max + 1 - min ) + min));
    }
    return myArray;
}
console.log(getRandomArray(23,5,146));



// функція №3

function getAverage(...numbers) {
      let newArr = numbers.filter((number) => {
        return Number.isInteger(number);
      });

      let sum = 0;
      newArr.forEach(number => sum += number);
      return sum / numbers.length;

}
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



// функція №4 

function getMedian(...numbers) {
    let newArr = numbers.filter((number) => {
        return Number.isInteger(number);
      });
    let half = Math.floor(newArr.length / 2);
    newArr.sort(function(a, b) { return a - b;});
  
    if (newArr.length % 2) {
      return newArr[half];
    } else {
      return (newArr[half] + newArr[half] - 1) / 2;
    }
  }  
console.log(getMedian(1, 2, 3, 4, 5, 6));


// функція №5

function filterEvenNumbers(...numbers){
    let newArr = numbers.filter(number => number%2)
    return newArr
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



// функція №6

function countPositiveNumbers(...numbers){
 let count = 0;
 numbers.forEach((number) => {
    if (number > 0){
        count++;
    }
 });
    return count;
};

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));


// функція №7

function getDividedByFive(...numbers){
    return numbers.filter(number => number%5 == 0);
};
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 35, 87, 23, 2, 56, 3, 2, 5, 24, 15));


// функція №8

function replaceBadWords(string){
    let badWords = /shit|fuck/i;
    // const arr = string.split(' ');
    return string.replace(badWords, '***')
}
console.log(replaceBadWords("Are you fucking kidding?"));
console.log(replaceBadWords("It's bullshit!"));



// функція №9

function divideByThree(myArray, word){
    let index = 0; 
    const wordLength = myArray.length;
    const  newWord = [];

    for (index = 0; index < wordLength; index += word){
        myChunk = myArray.slice(index, index+word);
        newWord.push(myChunk);
    } 
    return newWord;
    }
 console.log(divideByThree("Commander", 3));
 console.log(divideByThree("live", 3));



