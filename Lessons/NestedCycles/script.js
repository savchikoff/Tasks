for (let i = 0; i < 3; i++){
    console.log(i);
    for (let j = 0; j < 3; j++){
        console.log(j);
    }
}


//Вывод треугольника, где на каждой строке на одну звездочку больше

// let result = '';
const length = 7;

for (let i = 1; i < length; i++){
    for(let j  = 0; j < i; j++){
        result += '*';
    }
    result +='\n'; // каждую новую строку переход на новую строчку
}

console.log(result);


first: for (let i = 0; i < 3; i++){
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++){
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

for (let i = 2; i<=10; i++){
    if (i%2) continue;
    console.log(i);
}

// Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;

while (i<16){
    i++;
    if (i % 2 === 0){
        continue;
    } else {
        console.log(i)
    }
}

// Заполните массив цифрами от 5 до 10 включительно. 
// Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// const arrayOfNumbers = [];
// let number = 5;

// for (let i = 0; i < 6; i++){
//     arrayOfNumbers[i]=number++;
// }

// console.log(arrayOfNumbers);


// // Не трогаем
// return arrayOfNumbers;


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// // Пишем решение вот тут
// for (let i = 0; i < arr.length; i++){
//     result [i] = arr[i];
// }
// // Не трогаем
// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++){
//         if (typeof(data[i])==="number"){
//             data[i]*=2;
//         } else data[i]+=" - done"
//     }

//     console.log(data);

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // // Пишем решение вот тут
    // for (let i = 0; i < data.length; i++){
    //     result [i] = data[data.length-(i+1)];
    // }

    // console.log(result);


//      *
//     ***
//    *****
//   *******
//  *********
// ***********


//MySolution
let result = '';
let shifts = 5;

for(let i = 1; i < 13; i+=2){
    for (let k = 0; k<shifts; k++){
        result += " ";
    }
    shifts--;
    for (let j = 0; j < i; j++){
                result += '*';
    }
    result += '\n';
}

console.log(result);

//Correct Solution

const lines = 5;
//let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)


