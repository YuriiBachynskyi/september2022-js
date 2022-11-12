// let a = 100;
// console.log(a);
// a = 100500;
// console.log(a);
// let str = 'fsefssfhtss';
// console.log(str);
// let bool1 = true;
// let bool2 = false;
//
// console.log(typeof a);
// console.log(typeof str)
// console.log(typeof bool1)


// let n1 = 13;
// let n2 = 2;
// // Ділення по модулю або вичавлення остачі ( наприклад перевіряють значення чисел на парність. Якщо остача 0 - то число парене ) :
// let res = n1 % n2;
// console.log(res);

//strings

// let str1 = 'hello';
// let str2 = "okten";
//
//
// let words1 = str1 + ' ' + str2;// Конкатинація - з"єднання:
// console.log(words1);
//
// let words2 = `${str1} ${str2}`; //template string-шаблонна стрінга.Більше навантажує браузер
// console.log(words2);


//Взаємодія стрінгових та числових значень://

// let s = '!!!';
// let n1 = 10;
// let n2 = 20;
// console.log(n1 + n2 + s);
// console.log(s + n1 + n2);//стрінга + число = !!!1020-стрінга
// console.log(s + (n1 + n2));// = !!!30- послідовність має значення

//Булеві значення:// > < >= <= == === != !== //true- правда;false-брехня

// console.log(5 > 6);
// console.log(100 !== 200);
// console.log('asd' === 'asd');
// console.log(0 == '0');// З операторм == число перетворюється в стрінгу . Це в нього вшито під капотом. Через порівняння аскікодів .
// console.log(0 === '0');// Оператор === не порівнює аскікоди. А порівнює все як є. Тобто число не=стрінзі

//Перетворення типів значень ://

// console.log(100 + true);//=101, бо true=1
// console.log('!' + true);//=стрінга. перетворення булевого в стрінгу
// console.log(+true);//=1-переведення булевого значення в числове
// console.log(+'123');//=число. перетворення стрінгового числа в число
// console.log(132 + '');//=стрінга. Перетворення числа в стрінгу

//Переведення до булевого значення(До true або false)://
//!!-унарний оператор. Оператор заперечення (true,false)
//Кастування до True
console.log(!!'qwerty');
console.log(!!' ');
console.log(!!-100);

//Кастування до false:
console.log(!!'');
console.log(!!0);
console.log(!!undefined);// змінна невизначена
console.log(!!null);// змінна відсутня
console.log(!!NaN);//NotAnumber


//Дивна поведінка з булевими значеннями://

console.log('10' + 1);
console.log('10' - 1);// Якщо від стрінги віднімати число, то перед нею умовно ставиться + який переводить їїв число . І вийде 10-1=9
console.log(+'10' + 1);































