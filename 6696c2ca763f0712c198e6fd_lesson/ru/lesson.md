Массивы в JavaScript представляют собой коллекцию элементов, к которым можно получить доступ по индексу. В этой лекции мы рассмотрим, как получить доступ к элементам массива и как работать с ними.

**Обращение к элементу массива**.

Для того чтобы получить доступ к элементу массива, нужно обратиться к массиву по его индексу:

```js
arr[index] // где arr – массив, index – индекс
```

Индексы массива начинаются с `нуля`. То есть первый элемент массива имеет индекс 0, второй – 1, и так далее.

Например, если у нас есть массив `todoList`, содержащий список задач, мы можем получить доступ к первому элементу массива `Wash Car` следующим образом:

```js
const todoList = ["Wash Car", "Store", "Call", [2, 3, 4]];
console.log(todoList[0]); // Выведет первый элемент массива (Wash Car)
```

Также можно использовать переменные для индексации элементов массива:

```js
const todoList = ["Wash Car", "Store", "Call", [2, 3, 4]];
const index = 2;
console.log(todoList[index]); // "Call"
```

Мы так же можем получить доступ к элементам вложенного массива в `todoList`:

```js
const todoList = ["Wash Car", "Store", "Call", [2, 3, 4]];
console.log(todoList[3][2]); // Выведет третий элемент вложенного массива массива (4)
console.log(todoList[3][4]); // Выведет undefined, элемента с этим индексом не существует
```

Элементом массива так же может быть и объект. И мы точно так же можем получить доступ ко всем его свойствам:

```js
const todoList = [
  "Wash Car",
  "Store",
  "Call",
  [2, 3, 4],
  {
    name: "Alice",
    age: 45,
    friends: ["Bob", "John", "Joe"],
  },
];
console.log(todoList); // Выведет массив todoList
console.log(todoList[4]); // { name: "Alice", age: 45, friends: ["Bob", "John", "Joe"]}
console.log(todoList[4].age); // 45
console.log(todoList[4].'age'); // Выведет ошибку: 'SyntaxError: Unexpected string'
console.log(todoList[4].name); // "Alice"
console.log(todoList[4].friends[1][0]); // J, первая буква из 'John' в массиве friends
```
