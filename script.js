// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min 
// и spread оператора, найти минимальное число в массиве,
//  решение задание должно состоять из одной строки
const arr1 = [1, 5, 7, 9];
const getMinValue = (arr) => Math.min(...arr);
console.log(getMinValue(arr1));

// 2) Напишите функцию createCounter, которая создает счетчик 
// и возвращает объект с двумя методами: increment и decrement. 
// Метод increment должен увеличивать значение счетчика на 1, 
// а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter(initValue) {
    let valueCount = 0;
    return{
        increment: () => initValue + ++valueCount,
        decrement: () => initValue + --valueCount
    }
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
// 3) Напишите рекурсивную функцию findElementByClass, 
// которая принимает корневой элемент дерева DOM и название класса в качестве 
// аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример:
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootElement, className){
    const root = document.querySelector('#root');
    const currentClass = root.querySelector(className);
    if (rootElement.contains(currentClass)) {
        return currentClass;
    }
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
console.log(rootElement);