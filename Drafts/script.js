// // "use strict";

// // const personalPlanPeter = {
// //     name: "Peter",
// //     age: "29",
// //     skills: {
// //         languages: ['ru', 'eng'],
// //         programmingLangs: {
// //             js: '20%',
// //             php: '10%'
// //         },
// //         exp: '1 month'
// //     }
// // };

// // // function showProgrammingLangs(plan) {
// // //     if (Object.keys(plan.skills.programmingLangs).length === 0){
// // //         return '';
// // //     } else {
// // //         for (let key in plan.skills.programmingLangs){
// // //             return (`Язык ${key} изучен на ${plan.skills.programmingLangs[key]}`);
// // //         }
// // //     }
// // // }

// // // function showAgeAndLangs (plan) {
// // //     let lang = ``;
// // //     plan.skills.languages.forEach(element => {
// // //         lang+=`${element} `;
// // //     });
// // //     console.log(`Мне ${plan.age} и я владею языками ${lang.toUpperCase()}`);
// // // }

// // function showAgeAndLangs(plan) {
// //     let str = `Мне ${plan.age} и я владею языками: `;
// //     plan.skills.languages.forEach(function(element){
// //         str+=`${element.toUpperCase()} `;
// //     });
// //     return str;
// // }


// // console.log(showAgeAndLangs(personalPlanPeter));


// // const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// // function showFamily(arr) {
// //     let str = `Семья состоит из: `
// //     arr.forEach (i =>{
// //         str+=`${i} `;
// //     });
// //     return str;
// // }

// // console.log(showFamily(family));

// // let newArr = [1,3,5,7];

// // console.log(newArr.reverse());

// // const someString = 'This is some strange string';

// // function reverse(str) {
// //     let arr = str.split("").reverse();
// //     let newStr = arr.join("");
// //     return newStr;
// // }

// // console.log(reverse(someString));

// // const baseCurrencies = ['USD', 'EUR'];
// // const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// // function availableCurr(arr, missingCurr) {
// //     if (arr.length === 0){
// //         return `Нет доступных валют`;
// //     }
// //     for (let i = 0; i<arr.length; i++){
// //         if (arr[i] === missingCurr){
// //             arr.splice(i, 1);
// //         }
// //     }
// //     let str = `Доступные валюты:\n${arr.join("\n")}`;
// //     return str;
// // }

// // console.log(availableCurr([], 'RUB'));

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     const {shops} = data;
//     let areas = [];
//     let i = 0;
//     newCycle: for (let key of shops){
//         while (i < shops.length){
//             areas[i] = Object.values(key);
//             i++;
//             continue newCycle;
//         }
//     }
//     areas = areas.flat();
//     for (let k = 0; k <areas.length; k++){
//         if (k%2!==0){
//             areas[k]=areas[k]*areas[k-1];
//             delete areas[k-1];
//         }
//     }
//     areas = areas.flat();

//     let totalArea = 0;

//     for (let j = 0; j < areas.length; j++){
//         totalArea+=areas[j];
//     }

//     let volume = totalArea *(+data.height);
//     let reqMoney = volume * (+data.moneyPer1m3)

//     if (reqMoney <= data.budget){
//         return `Бюджета достаточно`;
//     } else {
//         return `Бюджета недостаточно`
//     }
// }

// let result = isBudgetEnough(shoppingMallData);

// console.log(result);

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Teodor', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     let newArr = [];
//     for (let i = 0; i < arr.length; i+=3){
//             newArr[i] = [arr[i], arr[i+1], arr[i+2]];
//     }
//     newArr = newArr.filter(()=>true);
//     let emptyNames = `Оставшиеся студенты: `;

//     if (newArr[3] === undefined){
//         emptyNames+=`-`;
//     } else {
//         for (let i = 0; i < 3; i++){
//             if (newArr[3][i]!==undefined){
//                 emptyNames+=`${newArr[3][i]} `;
//             }
//         }
//     }
//     newArr[3] = emptyNames;
//     console.log(newArr);
// }
// sortStudentsByGroups(students);



// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// console.log(sortStudentsByGroups(students));

// let x = 5; 
// console.log(x++);

let y = 1;

let x = y = 2;

console.log(x);

console.log(2&&1&&null&&0&&undefined);

