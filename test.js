// let string_sayi = [1,2,3,"bir"];
// let aaa = string_sayi.toString();

// let j = [1,2,3,4];

// let nnnn = j.join("-");

// console.log(nnnn);

// let arr_isim = ["Ali","Ahmet","Ayşe"];


// function blala(){

//     return 1 ;
// }

// arr_isim.forEach(item => console.log(item));

// let userss= [
//     {id:1, name:"Ali"},
//     {id:1, name:"Aliii"},
//     {id:2, name:"Ahmet"},
//     {id:3, name:"Mehmet"},
// ]

// let res_find = userss.find(e => e.id == 1)

// console.log(res_find)

// let sayii = [5,8,3,1]

// let ssss = sayii.some(x => x > 3)

// let ev = sayii.every(x => x > 3);


// let kkk = userss.filter(e => e.id == 1)
// console.log(kkk);




// const newStr = (str) => str.length < 2 ? str : str.slice(0,2) + str.slice(-2);



// const half = (str) => str.length<=0 ? "hataa" : str.slice(0,str.length/2);
// console.log(half("deneme"))

// const concat = (str1, str2) => str1.slice(1) + str2.slice(1);

// const num = (num1,num2) => (100-num1) < (100 -num2) ? num1 : num2;
// console.log(num(15,20))


const charsConut = (str,char) => str.split('').filter(x=> x == char).length;
const resChar = (str,char) => charsConut(str,char) >=2 && charsConut(str,char) <=4

const inside = (strr1,strr2) => (strr1.split(strr2).length-1)
console.log(inside('aloooo','o'))


const arr = [1,2,3,4,5,6,7,8]


let the_evens = arr.filter(number => number % 2 == 0)
document.write('even numbers : ' + the_evens)

