const firstName = "Maciek";
const age = 32;


const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age}lata.`;



const emptyParagraph = document.querySelector('.week-summary__description--js');

emptyParagraph.innerHTML = `Nawet uzupełniłem treśc javascriptem!`;

 

function calculate (myNumber) {
console.log(`Dostałam ${myNumber}`);
myNumber = myNumber * 7;
return myNumber;
}

const myResult = calculate(1);
console.log(myResult);





function greetOld(age, firstName) {
console.log(`Witaj!, nazywam się ${firstName} i mam ${age} lata`);
}

greetOld(age,firstName)





function createContent(querySelectorContent, content) {
const element = document.querySelector(querySelectorContent);
element.innerHTML = content;
}

createContent('.week-summary__description--js','Siema siema');

createContent('.week-summary__title--js', 'Podmieniony tytuł');




function HelloWorld () {
console.log('witaj świecie');
}

HelloWorld();




const greet = (age, firstName) => {
console.log(`Witaj Drogi Odwiedzający, nazywam sie${firstName} i mam ${age}lata`);

}
greet(age, firstName);




function calculateOld(myNumber) {
    return myNumber*7;
}





const calculateNew = (myNumber) => myNumber*7

const myResultNew = calculateNew(7)
console.log(myResultNew)




const deathStar = {
 diameter: 120000,
 fire: (target) => {
     console.log(`${target} destroyed`)
 },
 isOperating: true,
 levels: 357,
 name: 'Death Star',
 population: 10000,
 isLightOn: true,
 commander: {
     name: 'Darth Vader',
     age: 44
 }
}

console.log(deathStar.commander.name);

console.log(console);
console.log(typeof deathStar.name)

deathStar.fire('Rebel Ship');


console.log(deathStar['name'])




const myProperty = 'name'

const showMeProperty = (myProperty) => {
    console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}`);
}
showMeProperty('levels')





const humanOne = {
    name: 'Maciek',
    age: 32,
    adress: {
    street: 'Warszawska',
    city: 'Białystok'

    }
}

const humanTwo = {
    name: 'Stefan',
    age: 35,
    adress: humanOne.adress.street,
    city: 'Białystok'
};



console.log(humanOne);
console.log(humanTwo);

humanOne.adress.street ='Lipowa'