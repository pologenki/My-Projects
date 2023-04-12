'use strict';

const myCity = {
    city: 'New York',
    country: 'USA'
}


console.log(myCity);

myCity.popular = true;

console.log(myCity);


const city = 'Tallinn'
const myName = 'Konstantin'
const myAge = 31

const myTest = {
    city,
    myName,
    myAge,
}

console.log(myTest);


const myTown = {
    city: 'Tartu',
    cityGreeting: function () {
        console.log('Holla!!')
    }
}

console.log(myTown);
myTown.cityGreeting();

let a = 5;
let b = 3;

function sum() {
    const c = a + b
    console.log(c)
}
sum()

a = 9
b = 10

sum(a, b)



/*/
function first(a, g) {
    let g = 'Konstantin'
    a();
    g();
}



function second(b, d) {
    let c
    b = 5 * 4
    d = 2 + 3
    c = b + d
    console.log(c)
    return c

}

function forth(name) {
    let name = 'Konstantin';
    console.log(name)


}



first(second);
//second();





/*
const myCity = {
    country: 'USA',
    city: 'New York',
    popular: true
}

/* 


let a = 5
let b = 3
const helloWorld = 25;

//?Function decloration (на русском это переводится как объявленая функция)

function sum(a, b) {
    let c = a + b
    console.log(c);
    return c

}

sum(helloWorld, 3);
//?Function decloration

//?Function Expresion(на русском это переводится как функциональное вырожение)
const myFunction = function (a, b){ //!Тут мы присваеваем функцию переменной myFunction //Тут Function будет являться анонимной
    let c   
    a = a + 1
    c = a + b 
    return c
}

myFunction(5, 3)//!Таким образом мы вызываем нашу function Expresion


function myFn(a, b) {
    let c 
    a = a + 1
    c = a + b
    console.log(c);
    return c
    
}



myFn(a, b)


function myNf() {
    
}

myNf()



const personOne = {
    name: 'Bob',
    age: 21,
}

function increasePersonAge(person){
    person.age ++ 
    console.log(person.age)
    return person


}

increasePersonAge(personOne)


function printMyName() {
    console.log('Konstantin')
}

console.log('start')









let myNameIs = "Abdula"
let serName = "Abdurahma"

function profileInfo(myNameIs, serName){

    let info 
    myNameIs + serName 
    info = myNameIs +  " "  +  serName 
    console.log(info)
    return info
}

profileInfo(myNameIs, serName);

profileInfo("Kosten", "Pologenki");
 

const myApperiance = {
    name: "Konstantin",
    sername:"Pologenki",
}
//&& - Работает до первого ложного вырожения
// || - До первого вырожения TRUE т.е если сразу первое вырожение труэ процес останавливается если фолсе процес идет дальше пока не найдет true

const myBot = "im oki"
const myHot = "dadfawf"
const myTit = "Konstantin"
const test3 = myBot && myHot && myTit
console.log(test3);

//Конкотонация строк
const hugoBoss = "Konstantin"
const armani ="Tallinn"

const test4 = `яеня зовут ${hugoBoss} я живу ${armani}`

console.log(test4);

//Конкотонация строк

//обработка ошибок


const fnWithError = () => {
    throw new Error('Some error')
    
}
try {
fnWithError()
}

catch (error) {
    console.error(error)
    console.log(error.message)
}


console.log('Continue...')

//обработка ошибок

//массивы
const myTest = [1, 2, 3]
console.log(myTest);

myTest.push(4)

myTest.push(true)
console.log(myTest);

let num = 0;
while(num < 10){
    num++;
   console.log(num); 


    
}

//Масивы

const myArray = [1, 2, 3]
console.log(myArray);

//
console.log(myArray [0])
myArray[2] = "loh"
console.log(myArray);

myArray.push("daun") //!добавляет новый элемент в конец массива (.push) top metod
console.log(myArray)

myArray.pop()//!убирает последний жлемент в массиве (.pop)
console.log(myArray)

myArray.shift()//!удаляет первый элемент масива (.shift)
console.log(myArray)


const kos = [4, 5, 6]
console.log(kos)

kos.forEach(function (el) {

    console.log(el * 3);
    

})

//?forEach ЭТО ПКРКБОР МАСИВА КАК WHILE I FOR

 //! Интструкции if else

 */