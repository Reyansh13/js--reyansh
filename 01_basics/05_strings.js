const name ="reyansh"
const repoCount = 50

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('reyanshrccom')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const newStringOne = "   reyansh   "
console.log(newStringOne.trim());


const url = "https://reyansh.com/reyansh%13chauhan"

console.log(url.replace('%13', '-'));

console.log(url.includes('sundar '));

console.log( gameName.split("-"));

 