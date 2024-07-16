### Разберем метод массивов `join()`

Метод `join()` - это метод массивов, который используется для объединения всех элементов массива в строку.

Синтаксис метода `join()` выглядит следующим образом:

```javascript
array.join(separator);
```
* где `array` - это массив, который нужно объединить в строку,
* и `separator` - это строка, которая будет использоваться в качестве разделителя между элементами массива. 

Если не указывать разделитель, то по умолчанию будет использоваться запятая:

```javascript
const array = ['Hello', 'World', '!', '!', '!'];
const string = array.join();        // не используем никакого разделителя
console.log(string);                // "Hello,World,!,!,!"
```

Теперь рассмотрим пример с разделителем:

```javascript
const array = [123, true, false, 'Hello', 'JavaScript'];
const string1 = array.join(' ');        // используем разделитель: " " - пробел
console.log(string1);                   // "123 true false Hello JavaScript"

const string2 = array.join('-*-');      // используем разделитель: "-*-" - дефис, звездочка, дефис
console.log(string2);                   // "123-*-true-*-false-*-Hello-*-JavaScript"
```


### Как преобразовать массив в строку с помощью цикла `for`

Рассмотрим самый простой способ, без разделителя:

```javascript
const array = ['Hello', 'World', '!', '!', '!'];
let string = '';

for (let i = 0; i < array.length; i++) {
  string += array[i];                     // добавляем каждый элемент массива в строку
}
console.log(string);                      // "HelloWorld!!!"
```

Теперь добавим разделитель:

```javascript
const array = ['Hello', 'World', '!', '!', '!'];
let string = '';

for (let i = 0; i < array.length; i++) {
  string += array[i] + ' -*- ';           // добавляем элемент плюс разделитель
}
console.log(string);                      // "Hello -*- World -*- ! -*- ! -*- ! -*- "
```

Давайте улучшим наш код и добавим проверку, чтобы после последнего элемента не добавлялся разделитель:

```javascript
const arr = ['How', 'are', 'you', '?', '!'];
let str = '';

for (let i = 0; i < arr.length; i++) {
  if (i !== arr.length - 1) str += arr[i] + ' - ';     // добавляем элемент плюс разделитель
  else str += arr[i];                                  // добавляем только последний элемент
}
console.log(str);                                      // "How - are - you - ? - !"
```

Теперь добавим проверку по типу данных.

Создадим три переменные: `str`, `num` и `otherTypes`.
В переменную `str` запишем все элементы с типом данных `string`, в переменную `num` запишем все элементы с типом данных `number`, а в переменную `otherTypes` запишем все остальные типы данных.

```javascript
const array = [true, 'just', 123, false, 'text', 456, 'here!', true, {name: 'Alice'}, '!', 789, '!'];

let str = '';
let num = '';
let otherTypes = '';

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === 'string') str += array[i];       // добавляем элемент, если тип данных `string`
  else if (typeof array[i] === 'number') num += array[i];  // добавляем элемент, если тип данных `number`
  else otherTypes += array[i];                             // добавляем элемент, если тип данных не `string` и не `number`
}

console.log(str);         // "justtexthere!!!"
console.log(num);         // "123456789"
console.log(otherTypes);  // "truefalsetrue[object Object]"
```

Попрактикуйтесь и подумайте как можно улучшить наш код, что бы разделитель добавлялся только между элементами, а не в начале или в конце строки.
