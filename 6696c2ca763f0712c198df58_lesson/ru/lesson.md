#### Чтобы функция вернула результат своей работы используется директива `return`

`return` прекращает работу функции и возвращает результат.

Рассмотрим пример, в котором `return` используется несколько раз в теле функции:

 ```javascript
function n1() {
  return 1; // функция выполняет 'return' и прекращает работу 
  return 10; // эта строка не выполнится никогда
}

console.log(n1()) // 1 
 ```

Продолжим знакомиться с функцией и ее структурой.

## Параметры и аргументы функции

Рассмотрим пример:

 ```javascript
function sum(n1, n2) {
  return n1 + n2;
} 

console.log(sum(1, 2)) // 3
 ```

При объявлении функции `sum()` мы использовали `параметры` `n1` и `n2`.

`n1` и `n2` — это `переменные`, которые будут доступны в функции `sum()`.

При вызове функции `sum()` мы передали значения `1` и `2` в качестве `аргументов`.

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/one1-one2.png)

### Параметр функции — это переменная, которая задается при объявлении функции

Результат работы функции `sum()` будет зависеть от тех значений, которые мы передадим при её вызове.

Чтобы получить результат сложения чисел `3` и `5`, вызовем функцию `sum(3, 5)`.

#### Пример вызова функции `sum()` и передачи ей аргументов

Результат работы функции `sum()` будет зависеть от тех значений, которые мы передадим при её вызове.

После того как функция `sum()` получила значения `3` и `5` в качестве аргументов, она сложила их и вернула
результат `8`.

Результат работы функции записали в переменную `result` и вывели в консоль.

```javascript
function sum(n1, n2) {
  return n1 + n2;
} 
 
const result = sum(3, 5);
console.log(result); // 8
```

Значения `3` и `5` являются  `аргументами` функции `sum()`.

### Аргумент функции — это значение, которое присваивается параметру при вызове функции

Аргументы присваиваются параметрам функции в том порядке, в котором они указаны при вызове функции.

Рассмотрим примеры работы функции `sum()` с различными значениями. Результаты выведем в консоль:

```javascript
console.log(sum(10, 20))// 30; результат работы функции 'sum()' для аргументов 10 и 20
console.log(sum(35, -10)) // 25; результат работы функции 'sum()' для аргументов 35 и -10
console.log(sum(-300, 120)) // -180; результат работы функции 'sum()' для аргументов -300 и 180
 ```

Мы рассмотрели пример функции `sum()` с двумя параметрами `n1` и `n2`.

Рассмотрим другие примеры:

```javascript
function mult(n1, n2, n3) {
  return n1 * n2 * n3;
}

console.log(mult(2, 3, 4)) // 24
```

Функция `mult()` принимает три параметра `n1`, `n2` и `n3` и возвращает результат умножения для аргументов `2`, `3`
и `4`.

```javascript
function avg(n1, n2, n3, n4) {
  return (n1 + n2 + n3 + n4) / 4;
}

console.log(avg(2, 3, 4, 5)) // 3.5
```

Функция `avg()` принимает четыре параметра `n1`, `n2`, `n3` и `n4` и возвращает среднее арифметическое для
аргументов `2`, `3`, `4` и `5`.

Обратите внимание, что в примерах выше названия параметров `n1` и `n2` используются в разных
функциях: `sum(n1, n2)`, `mult(n1, n2, n3)` и `avg(n1, n2, n3, n4)`.

Это допустимо, поскольку доступ к ним ограничены границей функции.

#### Пример попытки доступа к параметрам функции за её пределами

```javascript
function sum(n1, n2) {
  return n1 + n2;
}

console.log(n1) // ReferenceError: n1 is not defined
```

В примере выше мы пытаемся вывести в консоль значение переменной `n1`, которая объявлена внутри функции `sum()`.

При попытке обратиться к переменной `n1` вне функции `sum()` возникает ошибка `ReferenceError: n1 is not defined`.

#### Пример функций с одним параметром

```javascript
// нахождение площади квадрата со стороной 'side'
function square(side) {
  return side ** 2; 
}

// нахождение объема куба с ребром 'side'
function cube(side) {
  return side ** 3; 
}

console.log(square(5)) // 25; 
console.log(cube(5)) // 125
```

При создании функции параметры могут быть не заданы.

```javascript
function ten() {
  return 10;
}

console.log(ten()) // 10
console.log(ten(2, 3)) // 10
console.log(ten(2, 3, -4)) // 10
console.log(ten('hello')) // 10
```

Функция `ten()` не имеет ни одного параметра и возвращает значение `10` вне зависимости от переданных в нее аргументов.
Это выглядит странно. Но теперь вы знаете, как это работает.

Тренируйтесь создавать функции с разным количеством параметров.

Экспериментируйте с разными типами данных в качестве аргументов.