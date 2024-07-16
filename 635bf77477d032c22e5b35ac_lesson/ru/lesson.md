---
video: https://youtu.be/Qyfs_FlGo_4
---
**Переменная** – это «именованное хранилище» для данных. Для создания переменной в JavaScript используют ключевое слово `let` (также есть `const` и устаревшее `var`). В переменную можно поместить значение с помощью оператора присваивания `=`. 

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
let a = 1;          // переменной a присвоено значение 1 
let b = 3.25;       // переменной b присвоено значение 3.25 
const user = 'Alice'; // переменной user присвоено значение 'Alice' 
let age = 25;       // переменной age присвоено значение 25
const isAdult = true; // переменной isAdult присвоено значение true 
let line = '';      // переменной line присвоено значение пустой строки 
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
##### Задание для самопроверки
Перейдите по ссылке, выполните задание для самопроверки https://jsbin.com/pipecomuwo/edit?js,console

##### Рекомендуем ознакомиться
- https://javascript.info/variables
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations
- https://youtu.be/bQQ0WCPhkU0

##### Практические задания


