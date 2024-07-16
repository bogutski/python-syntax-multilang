![](https://course-qa-basics.s3.us-west-1.amazonaws.com/boy-and-cubes.png)

Массивы в JavaScript представляют собой коллекцию элементов с индексами, начиная с нуля. Чтобы добавить новый элемент в массив, можно использовать несколько методов. Рассмотрим некоторые из них.

### Метод `push()`

Метод `push()` добавляет один или несколько элементов в конец массива. Этот метод изменяет исходный массив и возвращает новую длину массива.

Синтаксис метода `push()`:

```javascript
arr.push(element1, ..., elementN)
```

где `arr` - это массив, в который нужно добавить элементы, `element1, ..., elementN` - элементы, которые необходимо добавить в конец массива.

Добавим элемент `'Alex'` в конец массива `friends` с помощью метода `push()`. Затем выведем содержимое массива и его длину с помощью свойства `length`:

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends.push('Alex')
console.log(friends); // ['Alice', 'Bill', 'Carson', 'Alex']
console.log(friends.length); // 4
```

Метод `push()` может принимать несколько аргументов. В следующем примере мы передадим два аргумента:

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends.push('Alex', 'Viktor')

console.log(friends); // ['Alice', 'Bill', 'Carson', 'Alex', 'Viktor']
console.log(friends.length); // 5
```

### Метод `unshift()`

Метод `unshift()` принимает один или несколько аргументов, которые станут новыми элементами массива, а затем сдвигает все существующие элементы вправо на одну позицию, чтобы освободить место для новых элементов. Этот метод также изменяет исходный массив и возвращает новую длину массива.

Синтаксис метода `unshift()`:

```javascript
arr.unshift(element1, ..., elementN)
```

где `arr` - это массив, в который нужно добавить элементы, `element1, ..., elementN` - элементы, которые необходимо добавить в начало массива.

Добавим элементы `'Alex'` и `'Viktor'` в начало массива `friends`:

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends.unshift('Alex', 'Viktor')

console.log(friends); // ['Alex', 'Viktor', 'Alice', 'Bill', 'Carson']
```

### Изменение элементов массива

Также, элементы массива можно добавлять, присваивая им значение по индексу.

Добавим в массив `friends` элемент `'Alex'`:

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends[3] = 'Alex'

console.log(friends); // ['Alice', 'Bill', 'Carson', 'Alex']
```

### Добавление элементов за пределами массива

Можно добавлять элементы в массив, указывая индекс, который находится за пределами текущей длины массива. В этом случае все индексы между последним элементом и добавляемым элементом будут заполнены значением `empty` (пустым значением).

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends[4] = 'Alex'

console.log(friends); // ['Alice', 'Bill', 'Carson', empty, 'Alex']
```

При выводе массива с помощью `console.log()`, мы видим, что получился массив с пятью элементами, элемент `'Alex'` был успешно добавлен на место 4, а ячейка с индексом 3 осталась пустой (значение `empty`).

Мы можем добавлять элементы в массив в любой последовательности. Добавим элементы `'Alex'` и `'Viktor'` в ячейки с индексами 5 и 4 соответственно, используя прямое обращение к ячейке массива:

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends[5] = 'Alex'
friends[4] = 'Viktor'


console.log(friends); // ['Alice', 'Bill', 'Carson', empty, 'Viktor', 'Alex']
```

Если индекс находится за границами существующих элементов массива, то элементы будут добавлены с соответствующими индексами и значениями `undefined`.

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends[5] = 'Alex'

console.log(friends); // ['Alice', 'Bill', 'Carson', empty, empty, 'Alex']
console.log(friends[4]); // undefined
```

Заметьте, что если значение элемента массива не было явно задано, как в случае с элементом `undefined`, то в массиве отображается ключевое слово `undefined`.

```javascript
const friends = ['Alice', 'Bill', undefined, 'Carson'];

console.log(friends); // ['Alice', 'Bill', undefined, 'Carson']
```

В данных примерах мы можем увидеть, что добавление элементов за пределы массива возможно, но это не рекомендуется. Вместо этого, для добавления элемента в конец массива используйте метод `push()`, а для добавления элемента в начало массива используйте метод `unshift()`.
