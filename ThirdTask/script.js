"use strict";

let personalMovieDB = {
  count:0,
  movies:{},
  actors:{},
  genres:[],
  private: false,
  start: function(){
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?",'');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?",'');
    }
  
  },
  rememberMyFilms: function() {
    for (let i=0; i < 2; i++){
      const a = prompt ("Один из последних просмотренных фильмов?", '').trim(), 
            b = prompt("На сколько оцените его?",'').trim();
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
              personalMovieDB.movies[a] = b;
              console.log('done!');
            } else {
              console.log('error');
              i--;
            }
    }
  },
  detectPersonalLevel: function(){
    if (personalMovieDB.count < 10){
      console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30){
      console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30){
      console.log("Вы киноман");
  } else {
      console.log("Произошла ошибка");
  }
  },
  showMyDB: function() {
    if(personalMovieDB.private===false){
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function(){
    for (let i = 1; i < 2; i++){
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      let genres = prompt(`Введите ваши любимые жанры через запятую: `);
      if (genres === '' || genres === null){
        console.log("Вы ввели некорректные данные или не ввели их вообще");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) =>{
      console.log(`Любимый жанр ${i + 1} — это ${item}`);
    });
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.private){
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  }
};

// function calculateVolumeAndArea(a) {
//   if (typeof(a)!=="number" || !Number.isInteger(a)){
//       return `При вычислении произошла ошибка`;
//   }
//   let area = 6 * a * a;
//   let volume = a * a * a;
//   return `Объем куба:${volume}, площадь всей поверхности:${area}`;
// }

// let result = calculateVolumeAndArea(-15);

// console.log(result);

// function getTimeFromMinutes(minutes) {
//   if (typeof(minutes)!=="number" || !Number.isInteger(minutes) || minutes <0){
//     return `Ошибка, проверьте данные`;
//   }
//   let amountOfHours = Math.floor(minutes/60);
//   let amountOfRemainingMinutes = minutes%60;
//   let hour = "";
//   if (amountOfHours === 1){
//     hour = "час";
//   } else if (amountOfHours >= 2 && amountOfHours <=4){
//     hour = "часа";
//   } else {
//     hour = "часов";
//   }

//   return `${amountOfHours} ${hour} ${amountOfRemainingMinutes} минут`;
// }


// let time = getTimeFromMinutes (522);

// console.log(time);

// function findMaxNumber(a,b,c,d) {
//   if(typeof(a)!=="number" || typeof(b)!=="number" || typeof(c)!=="number" || typeof(d)!=="number"){
//       return 0;
//   }
//   let numbers = [a,b,c,d];
//   let max = 0;
//   for (let i = 0; i<numbers.length; i++){
//       if (numbers[i]>max){
//           max = numbers[i];
//       }
//   }
//   return max;
// }

// let numbers = findMaxNumber(50,0,0,20);

// console.log(numbers);

// function fib(number) {
//   if (typeof(number)!== "number" || !Number.isInteger(number) || number < 0){
//       return "";
//   }
//   let result = [];
//   for (let i = 0; i < number; i++){
//       if (i === 0){
//           result[i]=0;
//       } if (i === 1){
//           result[i]=1;
//       } else if (i>1) {
//         result [i] = result[i-2] + result[i-1];
//       }
//   }
//   let result1 = result.join(" ");
//   return (result1);
// }
// let res = fib(4);

// console.log(res);


