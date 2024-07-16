Булевый тип (**boolean**) может принимать только два значения: **true (истина)** и **false (ложь)**.
Например:
```javascript
let fieldIsDisplayed = true; // переменной fieldIsDisplayed присвоено значение true
let jsIsFun = true;          // переменной jsIsFun присвоено значение true
let sunIsHot = true;         // переменной sunIsHot присвоено значение true
let carOn = true;            // переменной carOn присвоено значение true
let carOff = false;          // переменной carOff присвоено значение false
let turtleIsFast = false;    // переменной turtleIsFast присвоено значение false
let isAdult = false;         // переменной isAdult присвоено значение false
let oldAddress = false;      // переменной oldAddress присвоено значение false

```
Булевые значения также могут быть результатом **сравнений**.

Разберемся с операторами `сравнения`:

* `>` - больше
* `<` - меньше
* `==` - не строгое равенство
* `===` - строгое равенство 

С операторами `больше` или `меньше` достаточно просто разобраться.
Например: `5 > 3` - это `true`, а `5 < 3` - это `false`.![](https://course-qa-basics.s3.us-west-1.amazonaws.com/the-first-number-is-less-than-the-second.png) ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/the-first-number-is-greater-than-the-second.png)


В чем разница между `==` и `===`?

Оператор `не строгого равенства` (`==`) проверяет только значения, не учитывая тип данных. При сравнении разных типов данных, они приводятся к числу. ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/non---strict-equality-of-two-numbers.png)
Например: `5 == '5'` - это `true`, а `5 == '6'` - это `false`.

Оператор `строгого равенства` (`===`) проверяет значения и тип данных.
Например: `5 === '5'` - это `false`, а `5 === 5` - это `true`. ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/a-variable-with-the-value-true.png) ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/a-variable-with-the-value-false.png)

Разберем больше примеров с операторами сравнения:

```javascript
let a = 56;                 // переменной a присвоено значение 56
let b = 23;                 // переменной b присвоено значение 23
let comparison = a > b;     // переменной comparison присвоено значение a > b
console.log( comparison );  // в консоль будет выведено true
console.log ( a === b );    // в консоль будет выведено false

let x = 10;           // переменной x присвоено значение 10
let y = x * 8;        // переменной y присвоено значение x * 8
console.log( x < y ); // в консоль будет выведено true

let giraffeHeight = 5.5;                         // переменной giraffeHeight присвоено значение 5.5
let elephantHeight = 3.5;                        // переменной elephantHeight присвоено значение 3.5
console.log( giraffeHeight > elephantHeight );   // в консоль будет выведено true
console.log( giraffeHeight === elephantHeight ); // в консоль будет выведено false


const bulbOn = 1;                   // переменной bulbOn присвоено значение 1
const switchOn = true;              // переменной switchOn присвоено значение true
console.log( bulbOn === switchOn ); // в консоль будет выведено false
console.log( bulbOn == switchOn );  // в консоль будет выведено true

const num = 55;            // переменной num присвоено значение 55
const str = '5' + 5;       // переменной str присвоено значение '55'
console.log(str === num);  // false, так как сравниваются разные типы данных
console.log(str == num);   // true, так как сравниваются только значения
```
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/which-word-is-bigger.png)
В дальнейших уроках мы рассмотрим подробней операторы сравнения, познакомимся и разберем примеры с другими операторами.![](https://course-qa-basics.s3.us-west-1.amazonaws.com/which-of-the-friends-collected-more-mushrooms.png) ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/the-string-starts-with-'a'.png) ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/the-first-character-of-the-string-is-equal-to-the-last-character.png)
