Методы `indexOf()` и `lastIndexOf()` определяют, содержит ли строка подстроку.

Синтаксис метода `indexOf()`:

```javascript
let index = str.indexOf(substr, fromIndex);
```

В первом аргументе им передается искомое значение `substr`.

Второй аргумент `fromIndex` является необязательным – он определяет индекс строки, с которого следует начинать поиск.

Принцип работы `indexOf()`:

* Ищет подстроку `substr` в строке `str`, начиная с указанного индекса `fromIndex` (включительно), и выполняет поиск слева направо.

* Возвращает индекс первого вхождения подстроки `substr` в строке `str`.

* Возвращает `-1`, если значение не найдено.

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/girl-indexof.png)

```javascript
const message = "Welcome";

console.log(message.indexOf("l")); // 2, индекс подстроки "l" в строке "Welcome"
console.log(message.indexOf("co")); // 3
console.log(message.indexOf("W")); // 0
console.log(message.indexOf("w")); // -1, подстрока "w" не найдена в строке "Welcome"

console.log(message.indexOf("e", 2)); // 6, начиная с индекса 2 в строке ищем подстроку "e"
console.log(message.indexOf("e", 1)); // 1, начиная с индекса 1 в строке ищем подстроку "e"
```

Метод `indexOf()` выполняет поиск от начала строки к концу, а метод `lastIndexOf()` – от конца к началу.

Синтаксис метода `lastIndexOf()`:

```javascript
let index = str.lastIndexOf(substr, fromIndex);
```

Принцип работы `lastIndexOf()`:

* Ищет подстроку `substr` в строке `str`, начиная с указанного индекса `fromIndex` (включительно), и выполняет поиск справа налево.

* Возвращает индекс последнего вхождения подстроки `substr` в строке `str`.

* Возвращает -1, если значение не найдено.

```javascript
const message = "Welcome";

console.log(message.lastIndexOf("e")); // 6, последнее вхождение подстроки "e" в строке "Welcome"
console.log(message.lastIndexOf("l")); // 2
console.log(message.lastIndexOf("e", 2)); // 1, начиная с индекса 2 в строке "Welcome" ищем подстроку "e" справа налево

```

Рассмотрим пару примеров в комбинации с другими методами строки:

```javascript
const message = "Welcome ";

console.log(message.trim()); // "Welcome", метод trim() удалил пробелы
console.log(message.trim().length); // 7, length возвращает длину строки
console.log(message.trim().toUpperCase()); // "WELCOME", toUpperCase() переводит строку в верхний регистр
console.log(message.trim().toUpperCase().indexOf("E")); // 1
console.log(message.trim().toUpperCase().repeat(3)); // "WELCOMEWELCOMEWELCOME"
console.log(message.trim().toUpperCase().repeat(3).toLowerCase()); // "welcomewelcomewelcome"
```

Цепочка методов — это механизм вызова метода для другого метода той же строки. Это обеспечивает более чистый и читаемый код.

```javascript
const message = "Welcome ";

const result = message
               .trim()
               .toUpperCase()
               .repeat(2)
               .toLowerCase()
               .indexOf('e', 2)

console.log(result); // 6
```

Напишем функцию `searchIndex` которая принимает 2 параметра `str` и `subStr`.

Функция должна возвращать индекс подстроки `subStr` в `str` не зависимо от регистра.

```javascript
function searchIndex(str, subStr) {
  // приводим str к нижнему регистру
  // subStr также приводим к нижнему регистру
  // ищем индекс подстроки subStr в строке str
  return str.toLowerCase().indexOf(subStr.toLowerCase()); 
}

console.log(searchIndex('HeLlo','ll')) // 2
console.log(searchIndex('HeLlo','Ll')) // 2
console.log(searchIndex('HeLlo','LL')) // 2
console.log(searchIndex('HeLlo','Ll')) // 2
```
