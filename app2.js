"use strict"

const ps = require("prompt-sync");

const prompt = ps();

let isPrime = 'prime';

function checkPrime(checkNumber){
    
    if (checkNumber <= 1) {
        isPrime = 'not prime'
    }
    else if (checkNumber > 1) {
        for (let i = 2; i < checkNumber; i++) {
            if (checkNumber % i == 0) {
                isPrime = 'not prime';
                return isPrime;
            }
        }
    }
    return isPrime   
}

function callingPrimeFunction(){
    const inputNumber = parseInt(prompt("Enter a positive number: "));
    checkPrime(inputNumber);
    if (isPrime == 'prime') {
        console.log(`${inputNumber} is a prime number`);
    } else {
        console.log(`${inputNumber} is not a prime number`);
    }
}

callingPrimeFunction()

