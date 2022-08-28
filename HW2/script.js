let N;
while (!(N % 1 === 0 && Number.isInteger(parseInt(N)) && N > 0 )){
   N = prompt('Введіть число N', );
   console.log(N);
}

let M;
while (!(M % 1 === 0 && Number.isInteger(parseInt(M)) && M > 0)){
  M = prompt('Введіть число M', );    
  console.log(M);

while (Number(N) >= Number(M)) {
  M = prompt(`Число М повинне бути більшим за число N. Будь ласка, введіть інше число М`);

}
}




let booleanParametr = confirm("Чи хочете ви пропускати парні числа?");
console.log(booleanParametr);

let result = 0;
for(let i = Number(N); i <= Number(M); i++){
  if (booleanParametr && i % 2 === 0){  
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














 

