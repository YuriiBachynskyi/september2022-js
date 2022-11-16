//>= <= === !==
// let a = 6
// if (a > 9) {
//     console.log('yes');
// } else {
//     console.log('else')
// }
//
const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num<60) {
        console.log('welcome!!!');
    } else if (num>60) {
        console.log('Ти точно сюди?')
    } else {
        console.log('Ти не пройдеш');
    }
    switch (num) {
        case 15:
            console.log('Ще рік почекай');
            break;
        case 16:
            console.log('Ураааа');
            break;
        default:
            console.log('ooook');
    }
}


let b = 3;
console.log(b>3 && b < 7);





