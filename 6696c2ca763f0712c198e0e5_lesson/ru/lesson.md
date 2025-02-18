![](https://course-qa-basics.s3.us-west-1.amazonaws.com/question-cat-girl.png)

Функции могут принимать различные значения в качестве аргументов, в том числе те, которые были получены в результате работы другой функции.

Рассмотрим функцию `sum()`, результат работы которой — сложение двух чисел.

Выведем в консоль результат для аргументов `2` и `5`:

``` javascript
function sum(n1, n2){
  return n1 + n2;
}

console.log(sum(2, 5)); // 7
``` 

Результат работы функции `sum()` мы можем сохранить в переменной `run1` и вывести ее в консоль:
``` javascript
const run1 = sum(2, 5);
console.log(run1); // 7
```

Теперь в функцию `sum()` подставим в качестве аргументов значение переменной `run1`.

Сохраним результат в новой переменной `run2` и выведем его в консоль:

```javascript
const run2 = sum(run1, run1);
console.log(run2); // 14 
```

`run2` получен в результате сложения `run1 + run1`, т.е. `sum(2, 5) + sum(2, 5)` или `7 + 7`.

Переменную `run2`, мы можем использовать в качестве одного из аргументов функции `sum()`.

Пример:
```javascript
const run3 = sum(run1, run2);
console.log(run3); // 21
```

Рассмотрим еще пример работы одной функции в другую.
```javascript
function mult(n1, n2){
  return n1 * n2;
}

const m1 = mult(3, 4);
const m2 = mult(5, 2);

const run4 = sum(m1, m2);
console.log(run4); // 22
```

Задать переменную `run4` можно и другим способом:
```javascript
const run4 = sum(mult(3, 4), mult(5, 2));
console.log(run4); //22
```

Приоритет выполнения операций для `run4` находится внутри скобок функции `sum()`. 

Внешняя функция `sum()` выполнится после выполнения функций `mult()`.

Стоит отметить, что запись кода в последнем примере плохо читаема. В подобных случаях удобнее использовать новые переменные, как в примере выше с использованием `m1` и `m2`. 

