"use strict";
(function () {
let out = document.getElementById('result');
//
function task1() {
    let i = 11;
    while ( i <= 33) {
        if(i === 11) {
            out.innerHTML = i;
        } else {
            out.innerHTML= out.innerHTML + '<br>' + i;
        }
        i++;
    }
};
//
function task2(i,j) {

    let valueI = (i % 2 === 0)? i : i + 1;

    while ( i <= j) {
        if(i % 2 === 0 ) {
            if (i === valueI ) {
                out.innerHTML = i;
            } else {
                out.innerHTML = out.innerHTML + '<br>' +  i;
            }
        }
        i++;
    }
};
// task 3 - С помощью цикла найдите сумму чисел от 1 до 100.
function task3(n) {
    let a = 1;
    let sum = 0;

    while (a <= n) {
        sum += a;
        a++;
    }
    console.log(sum)
};
//
function task3For (num) {
     let sum = 0;
     for (let i = 0; i <= num; i++){
         sum += i;
     }
     console.log(sum)
};
// task 4  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
function task4(){
    let arr = [1,2,3,4,5,6,7];

    for (let i = 0; i < arr.length;i++) {
        console.log(arr[i]);
    }
};

// task 5  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива.
// Запишите ее в переменную result.

function  task5() {
    let arr = [1,2,3,4,5,6,7];
    let result = 0;

    for (let i = 0;i < arr.length;i++) {
        result = result + arr[i];
    }
    console.log(result)
};
// task 6 Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
function task6(obj) {

    for(let key in obj) {
        out.innerHTML = key +' '+ obj[key];
        console.log(key +' '+ obj[key]);
    }

};
// task 7 Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
// С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
function  task7(obj) {

    for( let key in obj) {
        console.log(key + '-' + 'зарплата'+ ' ' + obj[key] +' ' + 'долларов' )
    }
};





function init() {
    //task2(36,80);
    //task3(25);
    //task4();
    //task3For(55)
    //task5();
    //task6({green: 'зеленый', red: 'красный', blue: 'голубой'});
    task7({Коля: '200', Вася :'300' , Петя:'400'});

}

init();

})();



