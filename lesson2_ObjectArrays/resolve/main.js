// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//Варіант 1//
let array = [];
array[0] = 'hello';
array[1] = 'okten';
array[2] = 12
array[3] = true
array[4] = [1,2,3,4]
array[5] = {
    name: 'Yura',
    ege: 33,
}
array[6] = 'Sasha'
array[7] = 27
array[8] = ['one','two','...']
array[9] = 1990;
// let array = ['hello','okten',12,true,[1,2,3,4],{name: 'Yura',ege: 33,},'Sasha',27,['one','two','...'],1990]- Другий варіант створення масиву
console.log(array);
console.log(array[0]);
console.log(array['1']);
console.log(array[2]);
console.log(array['3']);
console.log(array[4]);
console.log(array['5']);
console.log(array[6]);
console.log(array['7']);
console.log(array[8]);
console.log(array['9']);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Book1',
    pageCount: 111,
    gender: 'qwerty'
};

let book2 = {
    title: 'Book2',
    pageCount: 222,
    gender: 'asdfgh'
};

let book3 = {
    title: 'Book3',
    pageCount: 333,
    gender: 'zxcvbn'
};

console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book4 = {
    title: 'Book4',
    pageCount: 444,
    genre: 'qqqqqq',
    authors: ["name", "age"]
};

let book5 = {
    title: 'Book5',
    pageCount: 555,
    genre: 'wwwwww',
    authors: ["name", "age"]
};

let book6 = {
    title: 'Book6',
    pageCount: 666,
    genre: 'eeeeee',
    authors: ["name", "age"]
};
console.log(book4, book5, book6);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [
    {name: 'user1', username: 'Aaa', password: 'qwerty1'},
    {name: 'user2', username: 'Bbb', password: 'qwerty2'},
    {name: 'user3', username: 'Ccc', password: 'qwerty3'},
    {name: 'user4', username: 'Ddd', password: 'qwerty4'},
    {name: 'user5', username: 'Eee', password: 'qwerty5'},
    {name: 'user6', username: 'Fff', password: 'qwerty6'},
    {name: 'user7', username: 'Ggg', password: 'qwerty7'},
    {name: 'user8', username: 'Hhh', password: 'qwerty8'},
    {name: 'user9', username: 'Iii', password: 'qwerty9'},
    {name: 'user10', username: 'Jjj', password: 'qwerty10'}
];

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)