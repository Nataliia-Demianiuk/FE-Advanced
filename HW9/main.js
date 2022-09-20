function getRandomColor(){
    return `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;
  };

// функція 1 (хотіла спробувати з допомогою таблиці)

let table = document.querySelectorAll("td");


function generateBlocks(){
for (let i = 0; i < table.length; i++) {
    table[i].style.backgroundColor = getRandomColor();
}
};
 generateBlocks();


 // функція 2

function generateBlocksInterval(){
    for(let i = 0; i < 25; i++){
      let div = document.createElement('div');
      document.body.append(div);
      div.classList.add('block');
      setInterval(() => {    
        div.style.background = getRandomColor();
      }, 1000);
    };  
  }
  generateBlocksInterval(); 