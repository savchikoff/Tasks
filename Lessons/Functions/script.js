"use strict";

let num = 20;

function showFirstMessage(text){
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello world");
console.log(num);

// function calc(a,b){
//     return (a + b);
// }

// console.log (calc(5, 3));

function ret (){
    let num = 50;
    return num;
}

console.log (ret());


const logger = function() {
    console.log("Hello");
};


logger();


const calc = (a,b) => a+b;

const usdCurr = 28;
const euroCurr = 32;
const discount = 0.9;

function convert (amount, curr){
    return curr * amount;
}

function promotion(result){
    console.log(result * discount);
}


promotion(convert(500, usdCurr));

function test() {
    for (let i =0; i < 5; i++){
        console.log(i);
        if (i === 3) return
    }
    console.log ("Done");
}

function doNothing() {}
console.log(doNothing() === undefined);

function sayHello(name) {
    console.log(`Привет, ${name}!`);
}

sayHello("Антон");

function returnNeighboringNumbers(number) {
    let array = [number-1, number, number+1];
    return array;
}

console.log(returnNeighboringNumbers(5));

function getMathResult(base, repeat) {
    let string = "";
    if (typeof (repeat) !== "number" || repeat <=0){
        return base;
    } else {
        for (let i = 1; i < repeat+1; i++){
            if (i < repeat+1){
                string+=base*i;
                if (i<repeat){
                string+="---";
                }
            }
        }
    }
    return string;
}

console.log(getMathResult(10,0));