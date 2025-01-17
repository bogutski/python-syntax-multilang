В этой лекции мы подробно рассмотрим различные способы удаления дубликатов из массива, снабдив каждый шаг кода разъяснениями. Это поможет вам глубже понять каждую операцию.

### Использование цикла и объекта
Рассмотрим метод удаления дубликатов с помощью объекта для отслеживания уникальных элементов.

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5]; // Исходный массив с дубликатами
const uniqueNumbers = [];              // Пустой массив для уникальных чисел
const seen = {};                       // Пустой объект для отслеживания уникальных элементов

for (let i = 0; i < numbers.length; i++) {  // Цикл по каждому элементу исходного массива
    if (!seen[numbers[i]]) {                // Проверяем, встречался ли элемент ранее
        uniqueNumbers.push(numbers[i]); // Добавляем элемент в массив уникальных чисел, если он новый
        seen[numbers[i]] = true;        // Отмечаем элемент как встреченный в объекте
    }
}

console.log(uniqueNumbers); // Выводим результат: [1, 2, 3, 4, 5]
```

### Использование цикла и метода splice
Для удаления дубликатов прямо в исходном массиве можно использовать метод `splice`.

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];

for (let i = 0; i < numbers.length; i++) {          // Цикл по массиву
    while (numbers.lastIndexOf(numbers[i]) !== i) { // Пока последний индекс текущего элемента не совпадает с его позицией
        numbers.splice(numbers.lastIndexOf(numbers[i]), 1); // Удаляем дубликат
    }
}

console.log(numbers); // [ 1, 2, 3, 4, 5 ]
```

### Комбинация indexOf, lastIndexOf и splice
Этот подход использует методы `indexOf` и `lastIndexOf` для поиска дубликатов и `splice` для их удаления.

```javascript
const numbers = ['a', 'a', 'c', 'b', 'c', 'b'];

for (let i = 0; i < numbers.length; i++) {   // Цикл по массиву
    if (numbers.indexOf(numbers[i]) !== i) { // Если индекс текущего элемента не совпадает с его первым появлением
        numbers.splice(i, 1); // Удаляем элемент
        i--;                  // Корректируем индекс после удаления элемента
    }
}

console.log(numbers); // [ 'a', 'c', 'b' ]
```

### Использование метода filter
Метод `filter` позволяет создать новый массив, содержащий только уникальные элементы из исходного.

```javascript
const numbers = [5, 'hello', 10, '10', 'hello', 5, 5];

const uniqueNumbersWithFilter = numbers.filter((item, index, array) => array.indexOf(item) === index); 
// Создаем новый массив с уникальными элементами

console.log(uniqueNumbersWithFilter); // [ 5, 'hello', 10, '10' ]
```


В этой лекции мы рассмотрели разные методы удаления дубликатов из массива, детально описав каждый шаг. Вы узнали, как использовать циклы, объекты и встроенные методы JavaScript для решения этой распространенной задачи. Это знание поможет вам работать с массивами более эффективно и гибко.