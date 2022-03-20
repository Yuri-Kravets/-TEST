"use strict";
(function () {
// let out = document.getElementById('result');
//
// function task1() {
//     let i = 11;
//     while ( i <= 33) {
//         if(i === 11) {
//             out.innerHTML = i;
//         } else {
//             out.innerHTML= out.innerHTML + '<br>' + i;
//         }
//         i++;
//     }
// };
//
// function task2(i,j) {
//
//     let valueI = (i % 2 === 0)? i : i + 1;
//
//     while ( i <= j) {
//         if(i % 2 === 0 ) {
//             if (i === valueI ) {
//                 out.innerHTML = i;
//             } else {
//                 out.innerHTML = out.innerHTML + '<br>' +  i;
//             }
//         }
//         i++;
//     }
// };

function task3(n) {
    let a = 1;
    let sum = 0;

    while (a <= n) {
        sum += a;
        a++;
    }
    console.log(sum)
}

    // let lastNumber = 15;
    // let i = 1;
    // let sum = 0;
    //
    // while(i <= lastNumber) {
    //     sum += +i;
    //     i++;
    // }
    // console.log(sum);

task3(10)
function init() {
    task2(36,80);

}

init();

})();



