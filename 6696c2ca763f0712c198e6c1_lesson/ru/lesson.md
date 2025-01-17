Мы уже разобрали объекты, строки, числа, логические операторы, ветвление.

Теперь давайте рассмотрим массив. Массивы - это упорядоченный тип данных.

Если объект - это куча свойств, наваленных всё вместе, то массив - это список.

Тип данных массива - это объект.

Для обращения к какому-то свойству объекта мы используем ключ, так как нельзя сказать,
что внутри объекта есть какой-то порядок: что-то первое, а что-то второе. Свойства объекта лежат как
предметы на столе.

В случае с массивом мы всегда говорим про список.
Например, список студентов, список учеников класса, порядок дней недели, список дел - это всё примеры списка.

Для того чтобы создать массив, мы используем квадратные скобки.

Давайте создадим массив списка дел:
```javascript
const todoList = []    //мы создали пустой массив
```
Внутри массива могут быть любые типы данных: строки, числа, объекты, другие массивы.

Сделаем список строк.
```javascript
const todoList = ['Wash Car', 'Store', 'Call']    
```

Элементы массива отделяются друг от друга запятой.

Чтобы вывести массив в консоль, мы используем команду `console.log` и в скобках указываем имя массива.
```javascript
const todoList = ['Wash Car', 'Store', 'Call']    

console.log(todoList)    //["Wash Car", "Store", "Call"]
```
В основе создания массива лежит объект. Если пользоваться консолью браузера, то можно увидеть, что рядом с каждым элементом стоит цифра (0, 1, 2).
Элементы массива имеют индексы.

Нумерация индексов начинается с нуля. Также как в строках.

В примере выше мы имеем индексы 0, 1, 2.
```javascript
0: "Wash Car"
1: "Store"
2: "Call"
```
Точно также как у строк, у массива тоже есть длина. Для получения длины массива мы используем свойство `length`.
```javascript
console.log(todoList.length)    //3
```
Массив имеет 3 элемента (на первом уровне!).

Внутри элементов массива могут быть другие массивы. Это называется вложенностью.
```javascript
const todoList = ['Wash Car', 'Store', 'Call', []] //последний элемент массива это пустой массив    

console.log(todoList.length)    //4
```

Для того чтобы обратиться к элементу массива, мы используем квадратные скобки и указываем индекс элемента в квадратных скобках.
```javascript
const todoList = ['Wash Car', 'Store', 'Call', []] //последний элемент массива это пустой массив    

console.log(todoList[0])    //'Wash Car'
```

Массив может состоять из разных типов данных.
```javascript
const todoList = ['Wash Car', 'Store', 'Call', [2, 3, 4]];    

console.log(todoList)         //["Wash Car", "Store", "Call", Array(3)]
console.log(todoList.length)  //4
```

Длина массива по-прежнему 4, несмотря на то, что внутри последнего элемента массива находится другой массив из трех элементов.

Рассмотрим еще один пример массива с содержанием разных типов данных.
```javascript
const todoList = ['Hello', {name: 'Alice'}, 123, true, [2, 3, 4]];
console.log(todoList)                  // [ 'Hello', { name: 'Alice' }, 123, true, [ 2, 3, 4 ] ]
console.log(todoList.length)      // 5

// Давайте обратимся к каждому элементу и проверим его тип данных

console.log(todoList[0], typeof todoList[0])        // 'Hello', `string`
console.log(todoList[1], typeof todoList[1])        // { name: 'Alice' }, `object`
console.log(todoList[2], typeof todoList[2])        // 123, `number`
console.log(todoList[3], typeof todoList[3])        // true, `boolean`
console.log(todoList[4], typeof todoList[4])        // [ 2, 3, 4 ], `object`
```
