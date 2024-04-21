// Вводная часть в JS
// let NumPerem = 56                                     // определение числовой переменной
// let StrPerem = '56'                                   // определение текстовой переменной
// Раздел определения элементов
// const  CalBtn = document.getElementById('cal')      //Результат расчета
// const res1 = document.getElementById('input1')      //Первая переменная
// const res2 = document.getElementById('input2')      //Вторая переменная
// const result = document.getElementById('output')    //Получение информации из поля output
// console.log(result.textContent)                     // вывод в консоль textContent-  содержимое элемента имеющее id-output
// result.textContent=78*56/num                     // принудительно изменили содержимое поля
// console.log(result.textContent)                  // вывод в консоль содержимое result

// ______________Код программы
// res = res1.value + res2.value
// console.log(input1.value)
// console.log(res1.value)
// res= res1.value + res2.value
// CalBtn.onclick = function () { 
// console.log('Была нажата кнопка') 
// result.textContent = Number(input1.value) + Number(input2.value)  
// }  //Оживление кнопки // Каждый раз при нажитии на кнопку расчет будем обращаться к инпутам и выполнять расчет и расчет заносить в  элемент "результат"


// console.log(typeof res1)                          //Проверка типа данных (ответ: Объект) 
// console.log(typeof res1.value)                    //Проверка типа данных (ответ: String) 
// const res = Number(input1.value) + Number(input2.value) //Number перевод типа из строки в цифру
// console.log(res)

//Объединение кода программы:

const  CalBtn = document.getElementById('cal')      //Переменная кнопки расчета
const result = document.getElementById('output')    //Переменная поля вывода информации
const SumBtn = document.getElementById('plus')
const SubBtn = document.getElementById('minus')
const MultiBtn = document.getElementById('umnozh')
const DividBtn = document.getElementById('razd')
let BtnOper = '+'

SumBtn.onclick = function () {
    BtnOper = '+' }

SubBtn.onclick = function () {
    BtnOper = '-' }

MultiBtn.onclick = function () {
    BtnOper = '*'}

DividBtn.onclick = function () {
    BtnOper = '/' }

function ColorPrint(NumCal) {
    if (NumCal > 1) {
        result.style.color = 'green'
    } else if (NumCal < 0) {
        result.style.color = 'red'
    } else {result.style.color = 'blue'}
    result.textContent = NumCal
}

function CalculNum (int1, int2, sym) {
    num1= Number(int1.value)
    num2= Number(int2.value)
    if (sym=='+') {
        return num1 + num2
    } else if (sym=='-') {
        return num1 - num2
    } else if (sym=='*') {
        return num1 * num2
    } else {
        return num2!=0 ? num1 / num2 : 'На ноль делить нельзя'
        }
    }


CalBtn.onclick = function () {
    const resSum = CalculNum(input1, input2, BtnOper)
    ColorPrint(resSum)    
} 

