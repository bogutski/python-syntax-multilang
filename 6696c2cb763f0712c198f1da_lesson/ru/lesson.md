Разделение массива на подмассивы может значительно облегчить обработку и анализ данных. В JavaScript существует несколько методов для выполнения этой задачи, включая использование `циклов`, методов `slice`, `splice` и `filter`. Давайте рассмотрим несколько практических примеров.

### Использование `цикла for` и `метода push`

Можно использовать `цикл for` и `метод push` для создания подмассивов на основе типов данных элементов. Это полезно, когда нужно разделить исходный массив на группы по определённому критерию.

Пример:

```javascript
function splitArray(mixedArray) {
    // Инициализируем пустые массивы для строк, чисел и булевых значений.
    let strings = [], numbers = [], booleans = [];

    // Проходим циклом по всем элементам исходного массива.
    for (let i = 0; i < mixedArray.length; i++) {
        if (typeof mixedArray[i] === 'string') {  // Проверяем, является ли текущий элемент строкой
            strings.push(mixedArray[i]);          // Добавляем в массив строк
        } 
        
        else if (typeof mixedArray[i] === 'number') { // Проверяем, является ли текущий элемент числом
            numbers.push(mixedArray[i]);              // Добавляем в массив чисел
        } 
        
        else if (typeof mixedArray[i] === 'boolean') { // Проверяем, является ли текущий элемент булевым значением.
            booleans.push(mixedArray[i]);              // Добавляем в массив булевых значений
        }
    }

    // Возвращаем массив, содержащий три подмассива: с строками, числами и булевыми значениями.
    return [strings, numbers, booleans];
}

console.log(splitArray([1, 'two', true, 2, 'three', false])); // [ [ 'two', 'three' ], [ 1, 2 ], [ true, false ] ]
```


### Разделение с использованием методов `slice` и `splice`

Метод `slice`: создаёт новый массив, включая элементы от начального до конечного индекса, не изменяя исходный массив.

```javascript
const numbers = [1, 2, 3, 4, 5];
const firstPart = numbers.slice(0, 3);
const secondPart = numbers.slice(3);

console.log(firstPart); // [1, 2, 3]
console.log(secondPart); // [4, 5]
```


Метод `splice`: изменяет исходный массив, удаляя или добавляя элементы, и возвращает удалённые элементы как новый массив.

```javascript
const numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(1, 2);

console.log(numbers); // [1, 4, 5]
console.log(removed); // [2, 3]
```

### Разделение с использованием метода `filter`

Рассмотрим пример: разделение на позитивные и негативные числа используя метод `filter`.

```javascript
function splitPositiveNegative(numbersArray) {
    const positive = numbersArray.filter(number => number > 0);
    const negative = numbersArray.filter(number => number < 0);

    return [positive, negative];
}

console.log(splitPositiveNegative([1, -2, 3, -4, 5, -6])); // [ [ 1, 3, 5 ], [ -2, -4, -6 ] ]
```

В этой лекции мы рассмотрели, как использовать различные подходы в JavaScript для разделения массивов на подмассивы по определённым критериям, что может быть особенно полезно при обработке и анализе данных.