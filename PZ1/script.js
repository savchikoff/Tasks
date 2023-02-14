"use strict";

let result = [];


// function countY(x){
//     if (x < 1 && x >= -1.5){
//         result.push(Math.sin(x)+Math.cos(x)+x);
//     }
//     if (x < 1.5 && x >= 1){
//         result.push(Math.pow(x,2)*Math.cos(x));
//     }
//     if(x <= 2 && x >= 1.5){
//         result.push(Math.sin(x)+Math.pow(x,2));
//     }
// }


for (let i = -1.5; i <= 2; i+=0.1){
    let valueY;
    if (i < 1 && i >= -1.5){
        valueY =  Math.sin(i)+Math.cos(i)+i;
        result.push(valueY.toFixed(4));
        console.log(`Для x = ${i.toFixed(2)} значение y = ${valueY.toFixed(4)}`);
    } else if (i < 1.5 && i >= 1){
        valueY = Math.pow(i,2)*Math.cos(i);
        result.push(valueY.toFixed(4));
        console.log(`Для x = ${i.toFixed(2)} значение y = ${valueY.toFixed(4)}`);
    } else if(i <= 2 && i >= 1.5){
        valueY = Math.sin(i)+Math.pow(i,2);
        result.push(valueY.toFixed(4));
        console.log(`Для x = ${i.toFixed(2)} значение y = ${valueY.toFixed(4)}`);
    }
}

console.log(result);


// for (let i = 0; i < result.length; i++){
//     console.log(`Для x = ${valueX[i].toFixed(2)} значение y = ${result[i].toFixed(4)}`);
// }