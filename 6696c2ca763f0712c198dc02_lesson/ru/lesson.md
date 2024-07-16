Переменная в JavaScript может содержать любые данные. В один момент там может быть строка, а в другой – число:
```
let message = 'Hello';
message = 123456;
```
При создании переменной тип переменной не указывается.
Языки программирования, в которых такое возможно, называются «динамически типизированными». Это значит, что типы данных есть, но переменные не привязаны ни к одному из них.

Оператор  `typeof  a` или `typeof(a)` позволяет узнать, какой тип данных содержится в переменной `а`.

Например, 
```
let a = 78.5; 
let b = 50;
console.log(typeof a); // "number" 
a = a + '';
console.log(typeof(a)); // "string"
a = +a;
console.log(typeof(a)); // "number" 

let big = 1234567890123456789012345678901234567890n;  
console.log(typeof big); // "bigint"


let c = a + b; 
console.log(typeof c);          // "number"
c = a < b; 
console.log(typeof(c));         // "boolean"
console.log(typeof typeof(c));  // "string"
c = 'QA Basics'; 
console.log(typeof(c));         // "string"

let d; 
console.log(typeof(d)); // "undefined"
d = 'undefined'; 
console.log(typeof d);  // "string"
d = undefined; 
console.log(typeof(d)); // "undefined"
 
console.log(typeof 'Hello!');        // "string"
console.log(typeof null);            // "object", это официально признанная ошибка в JavaScript
let arr = [];
console.log(typeof arr);             // "object"
let functionForAll = ()=>{};
console.log(typeof functionForAll);  // "function"
let newObj = {};
console.log(typeof(newObj));         // "object"
```

![](https://course-js-syntax.s3-us-west-1.amazonaws.com/semicolon.PNG)
