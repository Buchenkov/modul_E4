//      Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.


const test = {a:1, b:"abc"};
const str1 = "str";
const str2 = "b";



function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}


console.log(isProperty(test, str1));
console.log(isProperty(test, str2));
