//      Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.


const proba = {a:1, b:2}


function value (obj){
  
  for (let key in obj) {

    if (obj.hasOwnProperty(key)) {

      console.log(key, obj[key]);
    } 
   
}

  
}
value(proba);
