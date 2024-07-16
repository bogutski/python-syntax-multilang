JavaScript предоставляет несколько способов для проверки наличия элемента в массиве. В этой лекции мы рассмотрим методы `includes()`, `indexOf()` и `lastIndexOf()`

### Метод `includes()`

Синтаксис метода `includes()` выглядит следующим образом:

```javascript
array.includes(searchElement, fromIndex)
```

* `searchElement` - обязательный параметр, представляющий элемент, наличие которого необходимо проверить в массиве.

* `fromIndex` - необязательный параметр, определяющий индекс элемента, с которого начинается поиск.

Метод `includes()` возвращает `true`, если элемент найден в массиве, и `false`, если нет.

Также следует отметить, что метод `includes()` чувствителен к типу данных и регистру. Если искомый элемент имеет другой тип данных, или регистр, чем элементы массива, метод всегда вернет `false`.

Рассмотрим пример:

```javascript
const fruits = ['banana', 'orange', 'cherry']

console.log(fruits.includes('cherry')) // true, 'cherry' есть в массиве
console.log(fruits.includes('Cherry')) // false, 'Cherry' отсутствует в массиве
```
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/boy-search.png)

Принципы `fromIndex`:

* Если `fromIndex` не передан или его значение не является числом, поиск начинается с индекса `0`.
* Если `fromIndex` - положительное число, то поиск начинается с этого индекса включительно.
* Если `fromIndex` - отрицательное число, то поиск начинается с индекса, равного `array.length + fromIndex`, включая этот индекс.
* Если передать его значение, которое превышает количество элементов в массиве, метод `includes()` всегда вернет `false`.

Рассмотрим пример с использованием `fromIndex`:

```javascript
const fruits = ['banana', 'orange', 'cherry']
const element = 'banana'

console.log(fruits.includes(element, 1)) // false, проверка начинается с 'orange', 'banana' отсутствует
console.log(fruits.includes(element, -2)); // false, 3+(-2)=1, проверка начинается с 'orange', 'banana' отсутствует
```

### Метод `indexOf()`

Синтаксис метода `indexOf()` выглядит следующим образом:

```javascript
array.indexOf(searchElement, fromIndex)
```

* `searchElement` - обязательный параметр, представляющий элемент, наличие которого необходимо проверить в массиве.

* `fromIndex` - необязательный параметр, определяющий индекс элемента, с которого начинается поиск.

Метод `indexOf()` - это метод, который возвращает индекс (позицию) **первого** вхождения элемента в массиве. Если элемент не найден в массиве, метод возвращает `-1`.

Рассмотрим пример:

```javascript
const fruits = ['banana', 'orange', 'cherry']

console.log(fruits.indexOf('orange')) // 1, 'orange' есть в массиве, индекс элемента 'orange' = 1
console.log(fruits.indexOf(' orange')) // -1, ' orange' отсутствует в массиве
console.log(fruits.indexOf('banana.')) // -1, 'banana.' отсутствует в массиве
```

Если в массиве будет несколько одинаковых элементов, `indexOf()` вернет индекс первого найденного:

```javascript
const fruits = ['orange', 'orange', 'cherry']

console.log(fruits.indexOf('orange')) // 0, 'orange' есть в массиве, индекс элемента 'orange' = 0
```

Принцип работы `fromIndex` точно такой же как и у метода `includes()`:

```javascript
const fruits = ['banana', 'orange', 'cherry']
const element = 'orange'

// ищем индекс 'orange', начиная с 1 индекса в массиве
console.log(fruits.indexOf(element, 1)) // 1, 'orange' есть в массиве, индекс элемента 'orange' = 1
console.log(fruits.indexOf(element, 2)) // -1, 'orange' отсутствует при поиске с 2 индекса в массиве
```

### Метод `lastIndexOf()`

Синтаксис метода `lastIndexOf()` выглядит следующим образом:

```javascript
array.lastIndexOf(searchElement, fromIndex)
```

* `searchElement` - обязательный параметр, представляющий элемент, наличие которого необходимо проверить в массиве.

* `fromIndex` - необязательный параметр, определяющий индекс элемента, с которого начинается поиск. Поиск начинается с конца массива.

Метод `lastIndexOf()` - это метод, который возвращает индекс (позицию) **последнего** вхождения элемента в массиве. Если элемент не найден в массиве, метод возвращает `-1`.

Рассмотрим пример:

```javascript
const fruits = ['banana', 'orange', 'cherry']

console.log(fruits.lastIndexOf('orange'))  //  1, 'orange' есть в массиве, индекс элемента 'orange' = 1
console.log(fruits.lastIndexOf(' orange')) // -1, ' orange' отсутствует в массиве
console.log(fruits.lastIndexOf('banana.')) // -1, 'banana.' отсутствует в массиве
```

Если в массиве будет несколько одинаковых элементов, `lastIndexOf()` вернет индекс первого найденного, начиная с конца:

```javascript
const fruits = ['orange', 'orange', 'cherry']

console.log(fruits.lastIndexOf('orange')) // 1, 'orange' есть в массиве, индекс элемента 'orange' = 1
```

Напишем функцию `search` которая будет принимать массив со строками, и элемент который надо проверить на вхождение в массив. Функция должна возвращать результат вне зависимости от регистра.

```javascript
function search(arr, el) {
  return arr.includes(el.trim().toLowerCase())
}

console.log(search(['a', 'd', 'lq', 'rw'], 'LQ'))   // true
console.log(search(['a', 'd', 'lq', 'rw'], 'LQ  ')) // true
console.log(search(['a', 'd', 'lq', 'rw'], ' lQ'))  // true
```

Перепишем `search`, чтобы функция принимала массив чисел, и количество сотен:

```javascript
function search(arr, el) {
  return arr.includes(el * 100)
}

// Проверяем, содержит ли массив 4 сотни
console.log(search([100, 200, 400, 500], 4)) // true
```

А теперь напишем функцию, которая будет проверять, присутствует ли искомый элемент в массиве 2 или более раз.

```javascript
function countTwo(arr, el) {
  const firstIndex = arr.indexOf(el)
  const secondIndex = arr.indexOf(el, firstIndex + 1)

  return firstIndex >= 0 && secondIndex >= 0
}

console.log(countTwo([1, 2, 5, 4, 6, 7, 4, 5], 4)) // true
console.log(countTwo([1, 2, 5, 4, 6, 7, 4, 5], 1)) // false
console.log(countTwo([1, 2, 5, 4, 6, 7, 4, 5], 5)) // true
```

Перепишем эту функцию с использованием метода `lastIndexOf()`:

```javascript
function countTwo(arr, el) {
  const firstIndex = arr.indexOf(el)
  const secondIndex = arr.lastIndexOf(el)

  return firstIndex >= 0 && secondIndex >= 0 && firstIndex !== secondIndex
}

console.log(countTwo([1, 2, 5, 4, 6, 7, 4, 5], 4)) // true
console.log(countTwo([1, 2, 5, 4, 6, 7, 4, 5], 1)) // false
console.log(countTwo([1, 2, 5, 4, 6, 7, 4, 5], 5)) // true
```
