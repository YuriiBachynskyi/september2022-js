// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log,alert,document.write
//

let hello = 'hello';
console.log(hello);
document.write(hello);
alert(hello);

let owu = 'owu';
console.log(owu);
document.write(owu);
alert(owu);

let com = 'com';
console.log(com);
document.write(com);
alert(com);

let ua = 'ua';
console.log(ua);
document.write(ua);
alert(ua);

let number1 = 1;
console.log(number1);
document.write(number1);
alert(number1);

let number2 = 10;
console.log(number2);
document.write(number2);
alert(number2);

let number3 = -999;
console.log(number3);
document.write(number3);
alert(number3);

let number4 = 123;
console.log(number4);
document.write(number4);
alert(number4);

let number5 = 3.14;
console.log(number5);
document.write(number5);
alert(number5);

let number6 = 2.7;
console.log(number6);
document.write(number6);
alert(number6);

let number7 = 16;
console.log(number7);
document.write(number7);
alert(number7);

let boolean1 = true;
console.log(boolean1);
document.write(boolean1);
alert(boolean1);

let boolean2 = false;
console.log(boolean2);
document.write(boolean2);
alert(boolean2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Yurii ';
let middleName = 'Bachynskii ';
let lastName = 'Romanovych';
let person = middleName + firstName + lastName;//-варіант 1. За допомогою КОНКАТИНАЦІЯ
//let person =`${middleName} ${firstName} ${lastName}`; - варіант 2. За допомогою темплейт стрінги (ІНТЕРПОЛЯЦІЯ)
//let person = middleName +' '+ firstName +' '+ lastName; - варіант3. В лапках пробіли
console.log(person);


//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Enter you name');
let middleName1 = prompt('Enter you middleName');
let age = +prompt('Enter you age');//+ це переведення стрінги у число. В цьому випадку якщо ми введемо в Prompt 32qwerty - то вийде NaN
//let age1 = parseInt(prompt('Enter you age'));//В цьому випадку якщо ми введемо в Prompt 32qwerty - то вийде 32. Без NaN
//console.log(age1);
console.log(name);
console.log(middleName1);
console.log(age);




//
//



