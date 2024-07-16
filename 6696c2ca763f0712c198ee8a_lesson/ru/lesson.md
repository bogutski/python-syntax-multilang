В этом уроке мы разберем как заменить в строке числа на их словесное описание.

```javascript
const str = '   1 js 2 coding 10 11 3 4 0';
// result: '   one js two coding ten eleven three four zero'

const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',

    10: 'ten',
    11: 'eleven'
}

let result = '';    // переменная в которую будем записывать результат
let word = '';      // переменная для временного хранения части строки, которая находится между пробелами

for(let i = 0; i < str.length; i ++){              // цикл по строке
    if(str[i] !== ' ') word += str[i];             // если символ не пробел, то добавляем его в переменную word

    if(str[i] === ' ') result += ' ';              // если символ пробел, то добавляем его в переменную result

    if(str[i] === ' ' && word) {                   // если символ пробел и переменная word не пустая
        if(numbers[word]) result += numbers[word]; // если в объекте есть ключ с таким значением, то добавляем его в переменную result
        else result += word;                       // иначе добавляем в переменную result значение переменной word
        word = '';                                 // очищаем переменную word
    }
}
console.log(result)                                // '    one js two coding ten eleven three four'
```

Давайте сравним предполагаемый и фактический результаты:

* Expected: '   one js two coding ten eleven three four zero'
* Actual:   '   one js two coding ten eleven three four'

Как мы видим, в конце строки не хватает пробела и слова 'zero'.

Далее по уроку мы исправим эту ошибку.


### Метод `Number.isNaN()`

Разберем как работает метод `Number.isNaN()`.

```javascript
const a = 123;
const b = '456';
const c = 'javascript';
console.log(+a);   // 123
console.log(+b);   // 456
console.log(+c);   // NaN
```

Что значит `NaN`? И почему переменная `c` равна `NaN`?

`NaN` - это специальное значение, которое означает, что результат не является числом.

В нашем примере, мы пытаемся преобразовать строку в число, но в строке есть буквы, поэтому результатом будет `NaN`.

```javascript
const a = 10;
const b = '25';
const c = 'Hello123';
console.log(Number.isNaN(+a));   // false
console.log(Number.isNaN(+b));   // false
console.log(Number.isNaN(+c));   // true
```

В переменной `a` находится число, поэтому результат `false`.
В переменной `b` находится строка, но в ней только цифры, поэтому результат `false`.
В переменной `c` находится строка, в которой есть буквы и цифры, поэтому результат `true`.


### Исправление и добавление метода

Попробуйте исправить и добавить метод `Number.isNaN()` в нашу первую функцию.

* Функция должна обрабатывать всю строку, включая последние элементы.
* Если числа нет в нашем объекте, то заменять его на `unknown`.

Сделайте это самостоятельно, а затем сравните свой код с кодом ниже.

```javascript
const str = 'Hello 100 3 6 10 11 9 world';
// result: 'Hello unknown three six ten eleven unknown world'

const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    10: 'ten',
    11: 'eleven'
}

let result = '';
let word = '';

for(let i = 0; i < str.length; i ++){
    if(str[i] !== ' ') word += str[i];                     // если символ не пробел, то добавляем его в переменную word

    if(str[i] === ' ' && word) {                           // если символ пробел и переменная word не пустая
        if(numbers[word]) result += numbers[word];         // если в объекте есть ключ с таким значением, то добавляем его в переменную result
        else if(!Number.isNaN(+word)) result += 'unknown'; // если переменная word не является NaN, то добавляем в переменную result значение 'unknown'
        else result += word;                               // иначе добавляем в переменную result значение переменной word
        word = '';                                         // очищаем переменную word
    }

    if(str[i] === ' ') result += ' ';                      // если символ пробел, то добавляем его в переменную result

    if(i === str.length - 1 && word) {                     // если i равно длине строки минус 1 и переменная word не пустая
        if(numbers[word]) result += numbers[word];         // дальше повторяем все действия из второго условия if
        else if(!Number.isNaN(+word)) result += 'unknown';
        else result += word;
    }
}
console.log(result)     // 'Hello unknown three six ten eleven unknown world'
```