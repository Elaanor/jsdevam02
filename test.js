let string_sayi = [1,2,3,"bir"];
let aaa = string_sayi.toString();

let j = [1,2,3,4];

let nnnn = j.join("-");

console.log(nnnn);

let arr_isim = ["Ali","Ahmet","Ayşe"];


function blala(){

    return 1 ;
}

arr_isim.forEach(item => console.log(item));

let userss= [
    {id:1, name:"Ali"},
    {id:1, name:"Aliii"},
    {id:2, name:"Ahmet"},
    {id:3, name:"Mehmet"},
]

let res_find = userss.find(e => e.id == 1)

console.log(res_find)

let sayii = [5,8,3,1]

let ssss = sayii.some(x => x > 3)

let ev = sayii.every(x => x > 3);


let kkk = userss.filter(e => e.id == 1)
console.log(kkk);




const newStr = (str) => str.length < 2 ? str : str.slice(0,2) + str.slice(-2);


