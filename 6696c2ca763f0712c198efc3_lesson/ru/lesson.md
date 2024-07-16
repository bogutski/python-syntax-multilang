В этом примере мы разберем как найти среднее арифметическое всех чисел в массиве.

Среднее арифметическое это сумма чисел, разделенная на количество чисел.

В данном примере мы работаем с массивом, в котором есть смешанные типы данных:
```javascript
const arr = ['4', 0, NaN, 'a', 2, 6];

let acc = 0;

for (let i = 0; i < arr.length; i++) {
  if (!Number.isNaN(+arr[i])) acc += +arr[i]
}

console.log(acc);

// 12
```
Данный код приводит все элементы массива к числу, включая `'4'` и `NaN`.
Давайте рассмотрим, как отсеять все нечисловые элементы из массива

```javascript
const arr = ['4', 0, NaN, 1, 'a', 2, 6];

let acc = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
      acc += +arr[i]
  }
}

console.log(acc);

// 9
```
В условии `if` мы добавили, что работаем только с числами `typeof arr[i] === "number"`
и исключаем NaN с помощью `!Number.isNaN(arr[i])`

Как узнать, на сколько надо поделить аккумулятор `acc`?

Для этого добавим еще одну переменную `count`, которая будет считать только числа, которые вошли в аккумулятор:

```javascript
const arr = ['4', 0, NaN, 1, 'a', 2, 6];

let acc = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
      acc += arr[i]
      count++
  }
}

console.log(acc / count);

// 2.25
```