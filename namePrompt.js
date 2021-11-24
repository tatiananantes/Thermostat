const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name? ');
console.log (`Welcome ${name}!`);