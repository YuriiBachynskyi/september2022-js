//Цикли. Процес перебору масиву-ітерація//
                                                //Цикли ітерування МАСИВІВ://

                                                    //1. Цикл for-of//
//За допомогою циклу for of ми перебираємо кожен елемент(індекс) масиву і виводимо потрібну інформацію для//
//подальшого користування//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//debugger-За допомогою цієї операції можна детально перебрати послідовність циклу у вкладці Sources. Він покаже нам що за чим відбувається.
//Також за допомогою debugger перевіряємо свій код , коли не розуміємо на якому етапі він не працює.
// for (let user of users) {                               //Можна викликати за допомогою абревіатури ITER+tab//
//     console.log(user);
// }

// За допомогою if вивести юзерів у яких статус true://
// for (const user of users) {
//     if (user.status) {
//         console.log(user);
//     }
// }


// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
//     {
//         title: 'cola',
//         price: 12,
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZc9q7l3dQr_hNFcHdmQKvQ1U-Tqe_Duacw&usqp=CAU'
//     }
// ];
// Для того щоб проітерувати масив і вивести потрібну нам інформацію
//за допомогою розмітки , потрібну використати lifetemplate стрінгу `` і в неї помістити інформацію за допомогою ІНТЕРПОЛЯЦІї.
//В лапкаx нажати Alt+Enter та вибрати розмітку HTML.
// for (const product of products) {
//     document.write(`
//             <div class="productСard">
//                 <h2>${product.title} ${product.price}</h2>
//                 <img class="productPicture" src="${product.image}" alt="">
//             </div>
//              `);
//     }
                                                                                                        //////Ctrl+Alt+T-обгортання/////
                                    //Застосування сортування з циклами If//
// Вивести тільки ті товари ціна на які більша чим 25 грн://

// for (const product of products) {
//     if (product.price > 25) {
//         document.write(`
//             <div class="productСard">
//                 <h2>${product.title} ${product.price}</h2>
//                 <img class="productPicture" src="${product.image}" alt="">
//             </div>
//              `);
//     }
// }


                                                        //2.Цикл For//

//Цей цикл дозволяє нам робити ітерування у певних діапазонах. Якщо у циклі For-Of ми ітеруємо повністю весь масив , то тут можемо задати певні параметри ітерування .
//Почати з певного індексу, закінчити на певному індексі, Пропустити пару індексів і так далі....
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// Варіант циклу For який описаний нижче зробить те саме що і цикл For Of:
//      з якого почати       На якому закінчити     Крок(збільшення на 1).     //Можна викликати за допомогою абревіатури ITAR+tab//
// for (let i = 0;            i < users.length;                 i++)           {
//     const user = users[i];
//     console.log(user)
// }
//x++ - збільшення на 1
//х+=20 - збільшення на 20

// let x = 0;                                                  //Постфіксний інкремент-послідовність має значення//
// let y = x++;
// console.log(x);
// console.log(y);

//Проітерувати масив починаючи з 2-го індексу, закінчити ітерування на 8-му індексі, крок зі збільшенням на 1
//Та вивести всіх юзерів статус яких = True://
// for (let i = 2; i < 8; i++) {
//     const user = users[i];
//     if (user.status)
//         console.log(user);
// }

                                                    //3.Зворотній цикл For //

//Проітерувати масив юзерів , починаючи з останнього. Ітерування провести до початку масиву , крок з зменшенням на 1.
// Та вивести всіх юзерів.

// for (let i = users.length - 1; i > 0; i--) {                            //Можна викликати за допомогою абревіатури RITAR+tab//
//     let user = users[i];
//     console.log(user)
// }


                                                // Цикл while//

// У цьому циклі змінна і оголошується за межами циклу. Інкрементацію і++ виставляємо у кінці циклу.
//Цей цикл потрібний для ітерування колекцій які наповнюються з часом. Тобто , якщо після ітерування колекції з'явився
//ще один елемент , то він його також проітерує. І так далі
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// let i = 0;
// while (i < users.length) {                                          //Можна викликати за допомогою абревіатури +tab//
//     console.log(users[i])
// }
// i++;



                                                        //Цикл do while//

// Цей цикл спроможний щось виконати і тільки після цього починає перевіряти. Спочатку зробити а потім думати.
//Потрібний наприклад щоб законектитись з сервером ,отримати від нього відповідь і тільки тоді починати ітерувати

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let i = 0;
// do {
//     console.log(users[i]);                                                  //Можна викликати за допомогою абревіатури +tab//
//     i++;
// }while (i<users.length)




                                                    //Не базові цикли //
                                                //Цикли для ітерування ОБ'ЄКТІВ//
                                                        //Цикл for in//
//За допомогою цього циклу можна проітерувати об'єкт та вивести всі його ключі та його значення://

// let obj = {
//     name: 'olya',
//     age: 31,
//     status: false,
// }
//
// for (const key in obj) {                                                    //Можна викликати за допомогою абревіатури itin +tab//
//     console.log(key, obj[key]);
// }




//Використання циклу для ітерування масиву та об'єкту разом. Тобто завдання стоїть в тому щоб проітерувати масив юзерів і
//проітерувати кожного юзера окремо//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// for (const user of users) {
//
//     for (const userKey in user) {
//         console.log(userKey,user[userKey])
//     }
//     console.log('**********');
// }
