// let v1 = 3;
// let v2 = 3.6;
// let v3 = 4.2;
//
// let enginsVolume = [3, 3.6, 4.2];
// //let enginsVolume = [v1, v2, v3];-Побудова масиву через змінні
// console.log(enginsVolume);
//
// console.log(enginsVolume.length-1);//Довжина масиву
//
// console.log(enginsVolume[2])//-Звернення до конкретного елемента масиву
//
// enginsVolume[3] = 4.5;//Додавання елемента у масив. В даному випадку третього елемента
// console.log(enginsVolume);
//
// enginsVolume[2] = 4.8;//- Перевизначення значення другого (4.2) елемента масиву на 4.8
//
// enginsVolume[100] = 'qwerty';//- Можна додати в масив елемент під любим порядковим номером .
// console.log(enginsVolume);
//
// console.log(enginsVolume.length);//- Довжина масиву
// console.log(enginsVolume.length/2);//- Довжина масиву
//                                                                                             //Сtrl+alt+V=ОБГОРНУТИ//
// let round = Math.round(enginsVolume.length/2);// Математичне заокруглення
// console.log(round);
// let floor = Math.floor(enginsVolume.length/2);//Заокруглення в меншу сторону
// console.log(floor);
// enginsVolume[floor] = 'okten is cool';
// console.log(enginsVolume);

//                                     //array in array//
// Масив описує багато сутностей (об'єктів)

// let rap = ['coolio', '2pac', 'eminem', 'snoop dog'];
// let rock = ['gueen','pink floyd','acdc']
// let music = [rap, rock];
// console.log(music);
// console.log(music[0]);
// console.log(music[0][1]);
// console.log(music[1][2]);
//                                 //Інше визначення верхнього масиву. Без змінних//
// let music1 = [
//     ['coolio', '2pac', 'eminem', 'snoop dog'],
//     ['gueen', 'pink floyd', 'acdc']
// ];
// console.log(music1);
// console.log(music1[0]);
// console.log(music1[0][1]);
// console.log(music1[1][2]);


                                    //Об'єкти-objects//
//Об"єкт описує одну сутність (один елемент, елемент масиву)

// let userName = 'vasya';
// let userAge = 31;
// let userStatus = true;
// console.log(userName, userAge, userStatus);
// //Інше визнечення об'єкта:
// let user1 = {
//     name: 'vasya',                                  //name,age,status-Це ключі,поля,властивості
//     age: 31,                                        //'vasya',31,true-Це значення ключів-Value
//     status: true,
// };
// console.log(user1)
//
// let car = {
//     producer: 'porshe',
//     model: 'cayene',
//     volume: 3.6,
//     turbo: false,
//     wheels: [
//         {radius:21,producer:'toyo',side:'front'},
//         {radius:21,producer:'toyo',side:'front'},
//         {radius:22,producer:'nokian',side:'back'},
//         {radius:22,producer:'nokian',side:'back'},
//         ],
// }
// console.log(car);
//
// console.log(car.model);                              // Звернення до характеристики . 1-й метод
// console.log(car['volume']);                          // Звернення до характеристики . 2-й метод
// console.log(car.wheels);
// console.log(car.wheels[0]);
// console.log(car['wheels'][0]);
//
// console.log(car.wheels[0].producer)                  //Звернення до конкретної характеристики

// let w = [
//     {radius:21,producer:'toyo',side:'front'},
//     {radius:21,producer:'toyo',side:'front'},
//     {radius:22,producer:'nokian',side:'back'},
//     {radius:22,producer:'nokian',side:'back'},
// ]
// console.log(w[3].producer)



//                                 //Ссилочні типи-reference vs primitive//
//
//
// let x = 100;
// let y = x;
//
// y = 200;
// console.log(y,x)
//
// //Ccилочні типи це коли два або більше масивів ссилаються на одну ячейку в пам'яті:
// let arr1 = [];
// let arr2 = arr1
// arr2[0] = 'hello';                                                  //Додавання характеристики
// console.log(arr2);
// console.log(arr1)
//
// //Ccилочні типи це коли два або більше об'єктів ссилаються на одну ячейку в пам'яті:
// let cat = {};
// let cat2 = cat;
// cat2.name = 'koko';
// cat2['age'] = 2;                                                 //Додавання ключа та характеристики в об'єкт
// console.log(cat2);
// console.log(cat);
//
// delete cat.age;                                                 //Видалення ключа в об'єкті
// console.log(cat);
//
//
//                                         //Const//
// // В константі саму нутрянку можна змінювати , або додавати , або видаляти . А от саме посилання змінити не можна .Виб'є' помилку
//
//
// const dog = {
//     aka: 'fluffi',
// }
// dog.aka = 'kokos';
// dog.age = 23;
// console.log(dog);
//
// // dog = {};//error!!!