Переменная – это ячейка памяти, в которой хранятся данные.

Переменная похожа на коробку с ярлыком. В коробке хранятся данные. На ярлыке написано, что хранится в коробке.

У переменной всегда есть имя. С его помощью мы обращаемся к этой переменной.

Примеры того, что можно хранить в переменных:

- имена
- числа
- даты
- адреса
- ценники
- уникальные идентификаторы (id)
- и много чего другого, что можно представить в виде данных

## Способы создания переменной

Чтобы переменную использовать, её сначала нужно создать.

В современном JavaScript используют два способа создания переменных: `const` и `let`.

#### Ключевое слово `const`. После создания значение переменной изменить нельзя

`const` означает – `константа`.
Значение не меняется после создания и присвоения значения. Только для чтения.

Используется для хранения значений, которые не будут меняться в процессе выполнения программы.

Значение переменной нужно установить при создании.

```javascript
const name = 'Alice'; // создана переменная 'name', со значением 'Alice'
console.log(name); // в консоль выведено 'Alice'

const age = 45; // создана переменная 'возраст', присвоено значение 45
console.log(age); // в консоль выведено 45
```

При использовании `const` нельзя создать переменную без значения.

```javascript
const name; // Так делать нельзя. Ошибка: Missing initializer in const declaration
```

Если попытаться изменить значение переменной, будет ошибка.

```javascript
const name = 'Alice';
name = 'Bob'; // Так делать нельзя. Ошибка: Assignment to constant variable.
```

Если вы не планируете изменять значение переменной, используйте `const`.

#### Ключевое слово `let`. Значение переменной можно изменить

Ключевое слово `let` – для переменных, у которых может измениться значение.

```javascript
let name = 'Alice';
console.log(name); // в консоль выведено 'Alice'

name = 'Bob'; // Переменной 'name' присвоено новое значение 'Bob'
console.log(name); // в консоль выведено 'Bob'
```

Ключевое слово `let` можно использовать для создания переменной без значения.

```javascript
let name; // создана переменная 'name', без значения
console.log(name); // в консоль выведено 'undefined'

name = 'Alice'; // присвоено значение 'Alice'
console.log(name); // в консоль выведено 'Alice'
```

Если вы планируете изменять значение переменной, используйте `let`.

### Устаревший способ создания переменной – ключевое слово `var`

Есть устаревший способ создания переменных – `var`.

Он не рекомендуется к использованию, поскольку он не обладает некоторыми свойствами, которые есть у `const` и `let`.

### Переменная без ключевого слова

Если вы не используете ключевое слово `const`, `let` или `var` при создании переменной, то она будет создана как глобальная переменная.

```javascript
name = 'Alice';
console.log(name); // в консоль выведено 'Alice'
```

Это не рекомендуется к использованию, поскольку глобальные переменные могут быть доступны в любой части кода, что может привести к ошибкам.

Используйте только ключевые слова `const` или `let` для создания переменных.

## Оператор присваивания

В переменную можно поместить значение с помощью оператора присваивания `=`.

Формат команды:

```
let <имя переменной> = значение;
```

или

```
const <имя переменной> = значение;
```

![welcome](https://course-js-syntax.s3-us-west-1.amazonaws.com/sozdaem-peremennuyu.jpg)

При выполнении этой команды вычисляется значение, и затем это значение присваивается переменной.

Например:

```
let a = 1; // переменной a присвоено значение 1
let b = 3.25;  // переменной b присвоено значение 3.25
const user = 'Alice'; // переменной user присвоено значение 'Alice'
let age = 25; // переменной age присвоено значение 25
const isAdult = true; // переменной isAdult присвоено значение true
let line = ''; // переменной line присвоено значение пустой строки
let numberOfCertificates = null; // переменной numberOfCertificates присвоено значение null
let temperature = -25; // переменной temperature присвоено значение отрицательного числа -25
```

Переменную можно создать, не присваивая ей значение.

Например:

```
let telNumber;
let a;
let b;
let user;
let age;
let isAdult;
let line;
let numberOfCertificates;

```

Для вывода значения переменной в консоль используется команда `console.log();`.

Например:

```
let count = 34;     // переменной count присвоено значение 34
console.log(count); // в консоль будет выведено 34

let a = 1;          // переменной a присвоено значение 1
console.log(a);     // в консоль будет выведено 1

let b = a + 3.25;    // переменной b присвоено значение a + 3.25
console.log(b);     // в консоль будет выведено 4.25

let user = 'Alice'; // переменной user присвоено значение 'Alice'
console.log(user);  // в консоль будет выведено "Alice"

let isAdult = true;   // переменной isAdult присвоено значение true
console.log(isAdult); //в консоль будет выведено true
```

Переменные, созданные с помощью ключевого слова `let`, можно переопределить, т.е. присвоить переменной новое значение. При присваивании переменной нового значения ключевое слово `let` использовать не надо.

Например:

```
let num = 5;                   // переменной num присвоено значение 5
console.log(num);              // в консоль будет выведено 5
num = num + 4;                 // значение переменной num увеличено на 4
console.log(num);              // в консоль будет выведено 9

let str = 'Have a nice day!';  // переменной str присвоено значение 'Have a nice day!'
str = 'Have a great day!';     // значение переменной str изменено
console.log(str);              // в консоль будет выведено "Have a great day!"

let areTesters = true;         // переменной areTesters присвоено значение true
areTesters = false;            // значение переменной areTesters изменено
console.log(areTesters);       // в консоль будет выведено false

let multi = 20;                // переменной multi присвоено значение 20
multi = multi * 5;             // значение переменной multi увеличено в пять раз
console.log(multi);            // в консоль будет выведено 100
```
