let N;
while (!Number(N)){
   N = prompt('Введіть число N', );
   console.log(N);
}

let M;
while (!Number(M)){
   M = prompt('Введіть число M', );
   console.log(M);
}

while (Number(N) >= Number(M)) {
  N = +prompt(`Ваше початкове число N є більшим або рівним кінцевому, введіть інше початкове число`);
  M = +prompt(`Ваше кінцеве число M є меншим або рівним початковому, введіть інше кінцеве число`);

}

let booleanParametr = confirm("Чи хочете ви пропускати парні числа?");
console.log(booleanParametr);

let result = 0;
for(let i = Number(N); i <= Number(M); i++){
  if (booleanParametr && i % 2 == 0){  
    continue  
  }
  
else{
  result += i;
}
}
console.log(result);

if (booleanParametr) {
  document.writeln(`Сума непарних чисел в інтервалі від ${Number(N)} до ${Number(M)} дорівнює ${result}`)
}
else {
  document.writeln(`Сума чисел в інтервалі від ${Number(N)} до ${Number(M)} дорівнює ${result}`)

}














 

