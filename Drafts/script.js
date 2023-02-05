"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

// function showProgrammingLangs(plan) {
//     if (Object.keys(plan.skills.programmingLangs).length === 0){
//         return '';
//     } else {
//         for (let key in plan.skills.programmingLangs){
//             return (`Язык ${key} изучен на ${plan.skills.programmingLangs[key]}`);
//         }
//     }
// }

// function showAgeAndLangs (plan) {
//     let lang = ``;
//     plan.skills.languages.forEach(element => {
//         lang+=`${element} `;
//     });
//     console.log(`Мне ${plan.age} и я владею языками ${lang.toUpperCase()}`);
// }

function showAgeAndLangs(plan) {
    let str = `Мне ${plan.age} и я владею языками: `;
    plan.skills.languages.forEach(function(element){
        str+=`${element.toUpperCase()} `;
    });
    return str;
}


console.log(showAgeAndLangs(personalPlanPeter));


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = `Семья состоит из: `
    arr.forEach (i =>{
        str+=`${i} `;
    });
    return str;
}

console.log(showFamily(family));

let newArr = [1,3,5,7];

console.log(newArr.reverse());

const someString = 'This is some strange string';

function reverse(str) {
    let arr = str.split("").reverse();
    let newStr = arr.join("");
    return newStr;
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0){
        return `Нет доступных валют`;
    }
    for (let i = 0; i<arr.length; i++){
        if (arr[i] === missingCurr){
            arr.splice(i, 1);
        }
    }
    let str = `Доступные валюты:\n${arr.join("\n")}`;
    return str;
}

console.log(availableCurr([], 'RUB'));

