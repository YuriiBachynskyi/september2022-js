// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
let x = 777
;
if (x !== 0) {
    console.log(true);
} else {
    console.log(false)
}

let x1 = 1;
if (x1 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

let x2 = 0;
if (x2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

let x3 = -3;
if (x3 !== 0) {
    console.log(true);
} else {
    console.log(false)
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 15;
console.log(time);
if (time > 0 && time <= 15) {
    console.log('first quarter');
}else if (time > 15 && time <= 30) {
    console.log('second quarter');
}else if (time > 15 && time <= 45) {
    console.log('third quarter')
}else if (time > 45 && time <= 60) {
    console.log('fourth quarter');
} else {
    console.log('what ta fack')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 7;
if (day > 0 && day <= 10) {
    console.log('the first decade of the month');
}else if (day > 10 && day <= 20) {
    console.log('the second decade of the month');
}else if (day > 20 && day <= 31) {
    console.log('the third decade of the month');
} else {
    console.log('what ta fack')
}

//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//

let weekday = 7;
switch (weekday) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('what ta fack')
}



// - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.


let a = 21;
let b = 20;

if (a > b) {
    console.log(a);
} else if (a === b) {
    console.log('the numbers are equal');
} else {
    console.log(false)
}

//
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)


let xx = ''|| ' default';
console.log(xx)
