Логический тип данных `Boolean` имеет только два значения: `true` или `false`.

```javascript
const isAdult = true;       // переменной isAdult присвоено значение `true`
console.log(isAdult);       // true

const isWinter = false;     // переменной isWinter присвоено значение `false`
console.log(isWinter)       // false
```

Значение `true` и `false` пишем без кавычек.

Пример:

```javascript
const isStudent = true;             // переменной присвоено boolean значение true
console.log(typeof isStudent);      // boolean

const isSunCold = 'false';          // переменной было присвоено string значение 'false'
console.log(typeof isSunCold);      // string
```

### Преобразование в Boolean c помощью `Boolean()`

Мы можем преобразовывать любой тип данных в `Boolean`, с помощью функции: `Boolean()`

```javascript
console.log(Boolean('Hello'));  // true, строка не пустая
console.log(Boolean(''));       // false, потому что строка пустая

console.log(Boolean(1));    // true
console.log(Boolean(-1));   // true
console.log(Boolean(-10));  // true
console.log(Boolean(10));   // true

console.log(Boolean(0));    // false, только 0 преобразуется в false
```

### Преобразование в Boolean c помощью `!!` (двойное отрицание)

```javascript
const lastName = '';        // присвоено значение пустой строки
console.log(!!lastName)     // false

const sum = 5 + 5;          // присвоено числовое значение: 10
console.log(!!sum)          // true

const isStudent = true;     // присвоено "булевое" значение: true
console.log(!!isStudent)    // true
```

### Преобразование в противоположное значение. Оператор отрицания `!`

Восклицательный знак `!` перед любым значением преобразует его в `boolean` и возвращает противоположное значение.

```javascript
console.log(!true); // false
console.log(!false); // true

console.log(!''); // true
console.log(!'Hello'); // false

console.log(!0); // true
console.log(!1); // false

console.log(!NaN); // true
```
