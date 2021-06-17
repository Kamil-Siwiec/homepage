const firstName = "Maciek";
const age = 32;

console.log(
  `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age}lata.`
);





const heading = document.querySelector(".main__heading--js");

heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age}lata.`;



const emptyParagraph = document.querySelector(".week-summary__description--js");

emptyParagraph.innerHTML = `Nawet uzupełniłem treśc javascriptem!`;



function calculate (myNumber) {
    console.log(`Dostałam ${myNumber}`);
    return myNumber*7;
}

const myResult = calculate(1);
console.log(myResult);