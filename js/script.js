/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {

            const movieCount = prompt('Один из последних просмотренных фильмов?', ''),
                starCount = prompt('На сколько оцените его?', '');
            if (movieCount != null && starCount != null && movieCount != '' && starCount != '' && movieCount.length < 50) {
                personalMovieDB.movies[movieCount] = starCount;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count <= 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    writeYourGenres: function () {
        for (let i = 0, j = 1; i < 3;) {
            let genre = prompt(`Ваш любимый жанр под номером ${j}`);
            personalMovieDB.genres[i] = genre;
            if (genre == null || genre == '') {
                alert("Данные введены не корректно! Попробуйте ещё раз.")
                i == 0, j == 1;
            } else {
                i++, j++;
            }  
        } 
        personalMovieDB.genres.forEach((item, i) => {
            alert(`Любимый жанр #${i + 1} - это ${item}`);
        }); 
        
        
    },
    
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
        
    },
};

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();

