Специальное значение **undefined**  означает, что «значение не было присвоено».
Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined. ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/create-a-variable-with-the-value-undefined.png)
Например,
```
let x; 
console.log(x);        // в консоль будет выведено undefined
console.log(typeof x); // в консоль будет выведено "undefined"
 
let y;     // переменной y не присвоено значение
let z = y; // переменной z присвоено значение y
console.log(z);        // в консоль будет выведено undefined
console.log(typeof z); // в консоль будет выведено "undefined"
 
let abc = undefined; // можно явно присваивать переменной значение undefined, но встречается это редко
console.log(abc);    // в консоль будет выведено undefined
``` 
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/assign-the-value-undefined-to-the-variable.png)
Сравнение undefined с другими значениями вернет следующие результаты: ![](https://course-qa-basics.s3.us-west-1.amazonaws.com/compare-undefined-and-null.png)
```
console.log(undefined === undefined); // true
console.log(undefined === null);      // false
console.log(undefined == null);       // true
console.log(undefined > 0);           // false
console.log(undefined <= 0);          // false
```

Обычно `undefined` используется для проверок, была ли переменная назначена.
Специальное значение **null** означает «ничего», «пусто» или «значение намеренно отсутствует».
Подробно о null мы поговорим в следующем уроке. 

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/the-sum-of-undefined-and-numbers.png)