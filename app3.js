"use strict"

const ps = require("prompt-sync");

const prompt = ps();

const inputNumber = parseInt(prompt("Enter a positive number: "));

var checkprime = function(number)
{
 return new Promise(function(resolve, reject)
 {
   
   let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    resolve("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resolve(`${number} is a prime number`);
    } else {
        reject(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    reject("The number is not a prime number.");
}
   
 });
}

checkprime(inputNumber).then(success => console.log(success)).catch(err => console.log(err))