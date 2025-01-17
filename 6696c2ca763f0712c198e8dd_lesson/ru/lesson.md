### Сумма массива определенной длины.

Дан массив чисел, с длиной в `10` элементов. Необходимо найти сумму элементов массива.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < 10; i++) {  // итерация цикла будет с `0` элемента до `9`
    sum += numbers[i];          // суммируем элементы массива
}
console.log(sum)                // 55
```

### Сумма массива неопределенной длины.

Давайте разберем, как определить длину массива.

Для этого у нас есть свойство `length`, которое возвращает длину массива.

```javascript
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.length);      // 5
```

Теперь вспомним, что индексация массива начинается с `0`, а длина массива с `1`.

```javascript
const numbers = [1, 2, 3];

console.log(numbers[0]);          // 1
console.log(numbers[1]);          // 2
console.log(numbers[2]);          // 3
console.log(numbers[3]);          // undefined - элемента с таким индексом нет
```

Чтобы обратится к первому элементу массива, мы используем индекс `0`.

А чтобы обратится к последнему элементу массива, мы используем индекс `length - 1`.

```javascript
const numbers = ['zero', 'one', 'two'];

console.log(numbers[0]);                    // 'zero'
console.log(numbers[numbers.length - 1]);   // 'two'
console.log(numbers[numbers.length]);       // undefined - элемента с индексом `3` нет
```


Теперь, когда мы знаем, как определить последний элемент массива, мы можем найти сумму всех элементов массива.

```javascript
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {  // итерация цикла будет с `0` элемента до `4`
    sum += numbers[i];                      // суммируем элементы массива
}

console.log(sum)                            // 150
```

В данном примере мы используем свойство `length` для определения длины массива. 

Указываем в условии, чтобы цикл выполнялся до тех пор, пока `i` меньше длины массива, то есть `i < numbers.length`.

Также, мы можем использовать следующее условие: `i <= numbers.length - 1`.

В этом случае мы указываем, что цикл должен выполнятся до тех пор, пока `i` меньше или равно длине массива минус `1`.



### Среднее арифметическое элементов массива.

Для того чтобы найти среднее арифметическое элементов массива, нам необходимо найти сумму всех элементов массива и разделить ее на количество элементов или на длину массива.

```javascript
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {  // итерация цикла будет с `0` элемента до `4`
    sum += numbers[i];                      // суммируем элементы массива
}

const average = sum / numbers.length;       // `150 / 5 = 30`, находим среднее арифметическое
console.log(average)                        // 30
```

### Умножение элементов массива.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 1;                                  // начальное значение `1`

for (let i = 0; i < numbers.length; i++) {       // итерация цикла будет с `0` элемента до `9`
    result = result * numbers[i];                // умножаем элементы массива
}

console.log(result)                              // 3628800
```

Не забывайте про начальное значение переменной `result`, которое должно быть равно `1`.

Иначе, если мы умножим на `0`, то результат всегда будет равен `0`.


### Развернуть массив с использованием метода `push()`.

```javascript
const numbers = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {  // итерация цикла будет с `4` элемента до `0`
  reversed.push(numbers[i]);                     // добавляем элементы в конец нового массива
  console.log(reversed)                          // [5] -> [5, 4] -> [5, 4, 3] -> [5, 4, 3, 2] -> [5, 4, 3, 2, 1]
}

console.log(reversed)                            // [5, 4, 3, 2, 1]
```

В данном примере нужно обратить внимание на условие цикла:

* `let i = numbers.length - 1` - начальное значение `i` равно длине массива минус `1`, то есть `4`.

* `i >= 0` - цикл будет выполняться до тех пор, пока `i` больше или равно `0`.

* `i--` - после каждой итерации, значение `i` будет уменьшаться на `1`. Если мы оставим `i++`, то цикл будет выполняться бесконечно.



### Развернуть массив с использованием метода `unshift()`.

```javascript
const numbers = ['Hi', 'there', '!!!'];
const reversed = [];

for (let i = 0; i < numbers.length; i++) {     // итерация цикла будет с `0` элемента до `2`
  reversed.unshift(numbers[i]);                // добавляем элементы в начало нового массива
  console.log(reversed)                        // ['Hi'] -> ['there', 'Hi'] -> ['!!!', 'there', 'Hi']
}

console.log(reversed)                          // ['!!!', 'there', 'Hi']
```

При использовании метода `unshift()`, в каждой итерации цикла, все индексы нового массива будут пересчитываться, потому что каждый элемент будет добавляться в начало массива.

Со стороны оптимизации, данный метод не является оптимальным, так как при большом количестве элементов, он будет выполняться дольше, чем метод `push()`.
