"use strict"

const ps = require("prompt-sync");

const prompt = ps();

const checkNumber = parseInt(prompt("Enter a positive number: "));

let isPrime = true;


if (checkNumber == 1) {
    console.log(`${checkNumber} is neither prime nor composite number`);
}

else if (checkNumber < 1) {
    console.log(`${checkNumber} is not prime number`);
    }
else{
    for (let i = 2; i < checkNumber; i++) {
        if (checkNumber % i == 0) {
            isPrime = false;
            break;
        }
    }
if (isPrime) {
    console.log(`${checkNumber} is a prime number`);
} 
else{
    console.log(`${checkNumber} is a not prime number`);
}
}

