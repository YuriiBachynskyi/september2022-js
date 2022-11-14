//ЛОГІЧНІ РОЗГАЛУЖЕННЯ//

// let age = prompt('what is your age?');                  //''-сюди вводимо аргумент-Текст який висвітиться у Prompt. Prompt завжди повертає стрінгу
// console.log(age);

// let age1 = +prompt('what is your age?');                  //+ перед Prompt кастує до числового значення
// console.log(age1, typeof age1);
//
// //Перевірка If,Else//
// // if (age > 18) {
// //     document.write(`<div><h1>show adult film</h1></div>`)         //Alt+Enter- перевести щоб розуміло HTML
// // }
//
// if (age1 > 18) {                    //If оперує двома значеннями : true або false.  Якщо в If інформація відповідає true то відпрацьовує ,блок If. Якщо в If//інформація відповідає fafse, то відпрацьовує блок Else.
//     console.log('show porn');
// } else {
//     console.log('show cartoon')
// }


                                        //Множинна перевірка через If,Else//
// Цей метод використовуємо в контексті тільки If,Else. Тобто якась одна перевірка
// let color = prompt('what you see');
// if (color === 'green') {
//     console.log('yuo can go');
// }else if (color === 'yellow') {
//     console.log('wait');
// }else if (color === 'red') {
//     console.log('stop');
// } else {
//     console.log('what ta fack');
// }


                                        //Множинна перевірка через Switch//
//Цей метод використовуємо коли нам потрібно зробити множинну перевірку . Він менше грузить браузер
// let color = prompt('what you see');
// switch (color) {
//     case "green":
//         console.log('you can go');
//         break;                                                   //Break-це оператор переривання . Якщо він не відпрацює, то спрацюють всі кейси
//     case "yellow":
//         console.log('wait');
//         break;
//     case "red":
//         console.log('stop');
//         break;
//     default:
//         console.log('what ta fack');
// }


                                        //Діапазонні перевірки через If//

//Оператор логічний and && - строгий оператор. Ліва і права частини повинні бути  true
//Оператор логічний or || - відпрацьовує навіть якщо одна частина буде true

// let age = +prompt('age?');
//
// //Умова: >=18 - adult
// //       15-18 - rick and morty
// //       <15 - telepuziki
//
// if (age > 0 && age <= 15) {
//     console.log('telepuziki');
// }else if (age > 15 && age < 18) {
//     console.log('r & m');
// }else if (age >= 18) {
//     console.log('adult');
// } else {
//     console.log('what ta fack');
// }

                                                        //Ф-я Confirm//
//Вона дає нам вікно для підтвердження . Тут повертає два значення . Якщо нажимаємо Ок то це true, якщо нажимаємо Cancel то це False.

// let b = confirm('do some?');
// console.log(b);


// let b1 = confirm('do some?');
// let x;
//
// if (b1) {
//     x = 100;
// } else {
//     x = 200;
// }
// console.log(x);

                                                            //Тернарний оператор//
//Показуємо на прикладі верхнього коду. І його можна словами описати наступним чином: Чи == b значенню true. Якщо так то x = 100, якщо ні то x = 200
// let b2 = confirm('do some?');
// let x = b2 ? 100 : 200;
// console.log(x);


// if (-100) {
//     console.log('+');
// } else {
//     console.log('-');
// }
//У If не потрібно робити конвертацію до інших значень. Там це закладено під капотом//
//Це нам потрібно для перевірок ://
//Наприклад можна перевірити юзера . Допустимо чи у нього є характеристика статус . І якщо вона є його вік більше 30 то вивести що він старий .
//Якщо статуса у нього не буде , то ми нічого не отримаємо.Оскільки буде False.


// let user = {
//     name: 'vasya',
//     age: 31,
// }
// console.log(user.status);
// if (user.status) {
//     if (age > 30) {
//         console.log('old');
//     }
// }
// //Не отримаємо нічого оскільки статуса у User немає, тобто маємо False. А знизу навпаки добавимо User статус, це буде True. В такому випадку отримаємо що він старий//
//
// let user1 = {
//     name: 'Petya',
//     age: 31,
//     status: 'qwerty',
// }
// console.log(user1.status);
//
// if (user1.status) {
//     if (user1.age > 30) {
//         console.log('old');
//     }
// }


                                                        //Оператор опціональної послідовності//
//Допустимо наш користувач вирішив нас обдурити і не ввести нічого у Prompt на запит про імя. Тобто Prompt віддасть нам False.
//А ми щоб вичислити таку дію від користувача можемо зробити таким чином: Змінимо False на True за допомогою! перед name

// let name = prompt('enter you name');
// if (!name) {
//     name = 'john doe';
// }
// console.log( name)

//Або можна скоротити так:

// let name = prompt('enter you name') || 'john';
// console.log(name)

//Якщо юзер заповнить поле то ми це і отримаємо , а якщо не заповнить , то ми про це також дізнаємось, отримавши John


