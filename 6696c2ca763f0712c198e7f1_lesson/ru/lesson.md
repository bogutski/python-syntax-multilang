![](https://course-qa-basics.s3.us-west-1.amazonaws.com/girl-delete.png)

Добавлять элементы в массив мы можем с помощью двух методов : `push()` и `unshift()`.

* `push()` – добавляет элементы в конец массива
* `unshift()` – добавляет элементы в начало массива

А вот удалять элементы из массива мы можем несколькими способами.

### Метод `pop()`

Метод `pop()` используется для удаления последнего элемента из массива и возврата его значения.

Синтаксис метода `pop()`:

```javascript
arr.pop()
```

Метод `pop()` не принимает никаких аргументов. Он удаляет последний элемент из массива и возвращает его значение. Если массив пустой, метод `pop()` вернет `undefined`.

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends.pop();
console.log(friends); // ['Alice', 'Bill'], удалили 'Carson'

const el = friends.pop();
console.log(friends); // ['Alice'], удалили 'Bill'
console.log(el); // 'Bill'
```

### Метод `shift()`

Метод `shift()` используется для удаления первого элемента из массива и возврата его значения.

Синтаксис метода `shift()`:

```javascript
array.shift()
```

Метод `shift()` не принимает никаких аргументов. Он удаляет первый элемент из массива и возвращает его значение. Если массив пустой, метод `shift()` вернет `undefined`.

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

const el = friends.shift();
console.log(friends); // ['Bill', 'Carson'], удалили 'Alice'
console.log(el); // 'Alice'
```

Методы `push()` и `pop()` используются для реализации `LIFO` (Last-In-First-Out) структуры данных, такой как стек.

Метод `push()` добавляет элемент в конец массива и возвращает его длину, а метод `pop()` удаляет последний элемент из массива и возвращает его значение.

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

const el = friends.push('Alex');
console.log(el); // 4, длина массива
console.log(friends); // ['Alice', 'Bill', 'Carson', 'Alex']

const el1 = friends.pop();
console.log(el1); // 'Alex', элемент который мы удалили
console.log(friends); // ['Alice', 'Bill', 'Carson']
```

Методы `shift()` и `unshift()` используются для работы со структурой данных, называемой `FIFO` (First-In-First-Out) очередь. `FIFO` очередь (queue) - это структура данных, в которой элементы добавляются в конец и удаляются из начала, как в обычной очереди.

Метод `unshift()` добавляет элемент в начало массива и возвращает его длину, а метод `shift()` удаляет первый элемент из массива и возвращает его значение.

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

const el = friends.unshift('Alex');
console.log(el); // 4, длина массива
console.log(friends); // ['Alex', 'Alice', 'Bill', 'Carson']

const el1 = friends.shift();
console.log(el1); // 'Alex', элемент который мы удалили
console.log(friends); // ['Alice', 'Bill', 'Carson']
```

### Метод `splice()`

Метод `splice()` используется для удаления, замены или добавления элементов в массив.

Синтаксис метода `splice()`:

```javascript
array.splice(start, deleteCount, item1, item2, ..., itemN)
```

* `start` – индекс, с которого начинается изменение массива
* `deleteCount` (необязательный) – количество удаляемых элементов, начиная с индекса `start`. Если `deleteCount` параметр не указан, удаляются все элементы, начиная с индекса `start`. Если значение `deleteCount` равно 0, элементы не будут удалены.
* `item1, item2, ..., itemN` (необязательные) – элементы, которые нужно добавить в массив, начиная с индекса `start`

Метод `splice()` изменяет исходный массив и возвращает новый массив, содержащий удаленные элементы, если они были удалены.

Начиная с первого индекса `(start = 1)` в массиве `friends` удалим все элементы:

```javascript
const friends = ['Alice', 'Bill', 'Carson'];

friends.splice(1);

console.log(friends); // ['Alice']
```

Начиная со второго индекса `(start = 2)` в массиве `friends` удалим все элементы:

```javascript
const friends = ['Alice', 'Bill', 'Carson', 'KJ', 'Viktor'];

friends.splice(2);

console.log(friends); // ['Alice', 'Bill']
```

Теперь, начиная с первого индекса удалим 3 элемента `(start = 1, deleteCount = 3)`:

```javascript
const friends = ['Alice', 'Bill', 'Carson', 'KJ', 'Viktor'];

friends.splice(1, 3);

console.log(friends); // ['Alice', 'Viktor'], 'Bill', 'Carson', 'KJ' - удалились
```

Повторим все то что мы делали в прошлом примере, но теперь на место удаленных элементов подставим `'Michael'`, то есть `(start = 1, deleteCount = 3, item1 = 'Michael')`. Также посмотрим что возвращает `splice()`:

```javascript
const friends = ['Alice', 'Bill', 'Carson', 'KJ', 'Viktor'];

const delElem = friends.splice(1, 3, 'Michael');

console.log(friends); // ['Alice', 'Michael', 'Viktor']
                      // 'Bill', 'Carson', 'KJ' - удалились, 
                      // 'Michael' - поставили на их место

console.log(delElem); // ['Bill', 'Carson', 'KJ'], возвращает массив удаленных элементов
```

Посмотрим что вернет `splice()` если мы не будем ничего удалять из массива `(start = 1, deleteCount = 0, item1 = 'Michael')`:

```javascript
const friends = ['Alice', 'Bill', 'Carson', 'KJ', 'Viktor'];

const delElem = friends.splice(1, 0, 'Michael');

console.log(friends); // ['Alice', 'Michael', 'Bill', 'Carson', 'KJ', 'Viktor']
                      // 'Michael' - вставился в массив на индекс 1

console.log(delElem); // [], ничего не удалили
```
