const getIdButtonEl = document.querySelector("#getId-button");
const getIdResultEl = document.querySelector("#getId-result");

function* createIdGenerator() {
    let id = 1;
    while (true) {
     yield id++;
    }
}
const idGenerator = createIdGenerator();

getIdButtonEl.addEventListener("click", () => {
    getIdResultEl.textContent = idGenerator.next().value;
   });


   const FONT_SIZE = 16;
   const fontGeneratorDecrementButtonEl = document.querySelector("#fontGenerator-button-decrement");
   const fontGeneratorIncrementButtonEl = document.querySelector("#fontGenerator-button-increment");
   const fontGeneratorResultEl = document.querySelector("#fontGenerator-result");
   const bodyEl = document.querySelector("body");

function* newFontGenerator(fontSize) {
    let counter;
    while (true) {
        counter = yield fontSize;
        if (counter === "up") {
        fontSize += 2;
        }
        if (counter === "down") {
        fontSize -= 2;
        }
    }
    }
const fontGenerator = newFontGenerator(FONT_SIZE);

const fontCounter = (command) => {
    const fontSize = fontGenerator.next(command).value;
    bodyEl.style.fontSize = `${fontSize}px`;
    fontGeneratorResultEl.textContent = `${fontSize}px`;
    };  

fontGeneratorDecrementButtonEl.addEventListener("click", () => fontCounter("down"));

fontGeneratorIncrementButtonEl.addEventListener("click", () => fontCounter("up"));

  