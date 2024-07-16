### Обращение к элементам строки по индексу

Давайте пройдемся по элементам строки и выведем их в консоль:

```javascript
let string = 'Hello';

console.log(string[0]); // 'H'
console.log(string[1]); // 'e'
console.log(string[2]); // 'l'
console.log(string[3]); // 'l'
console.log(string[4]); // 'o'
```

Теперь найдем первый и последний элементы строки:

```javascript
let string = 'World';

console.log(string[0]);                  // 'W', первый элемент строки имеет индекс `0`
console.log(string[string.length - 1]);  // 'd', последний элемент строки имеет индекс `string.length - 1`
```

Давайте создадим переменную и присвоим ей значение последнего элемента строки:

```javascript
let string = 'World';
let i = string.length - 1;  // длина строки равна `5`, значит последний элемент имеет индекс `4`

console.log(i);             // 4
console.log(string[i]);     // 'd'
```


### Использование цикла `for` для перебора элементов строки

Давайте вспомним как работает цикл `for`.

Выведем все элементы строки в консоль:

```javascript
const string = 'abc';

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);                     // 'a'
                                              // 'b'
                                              // 'c'
}
```

Разберем что происходит в цикле:

1. `let i = 0` - создается переменная `i` и присваивается значение `0`
2. `i < string.length` - проверяется условие `0 < 3` - `true`
3. `console.log(string[i])` - выполняется тело цикла, выводится в консоль `string[0]` -> `'a'`
4. `i++` - увеличиваем значение переменной `i` на `1`

В нашем примере цикл выполняет эти действий три раза, после чего условие `i < string.length` становится `false` и цикл завершается.


### Использование цикла `for` для перебора элементов строки в обратном порядке

Давайте выведем все элементы строки в обратном порядке:

```javascript
const string = 'Hello';

for (let i = string.length - 1; i >= 0; i--) {
  console.log(string[i]);                     // 'o'
                                              // 'l'
                                              // 'l'
                                              // 'e'
                                              // 'H'
}
```

Разберем как изменилось условие цикла:

* `let i = string.length - 1` - создается переменная `i` и присваивается значение `4`.
    
    Длина строки равна `5`, значит последний элемент имеет индекс `4`.

* `i >= 0` - проверка условия изменилась, потому что теперь `i` будет уменьшаться на `1` и нам нужно проверять, когда `i` станет равным `0`.

* `i--` - изменение переменной `i` тоже поменялось, теперь `i` нужно уменьшать на `1`, пока не дойдем до первого элемента строки с индексом `0`.


### Использование цикла `for` в функции

Напишем функцию, которая считает количество букв `a` в строке:

```javascript
function countLetterA(string) {
  let count = 0;                              // создаем переменную `count` для подсчета количества букв `a`

  for (let i = 0; i < string.length; i++) {   // перебираем строку от начала до конца
    if (string[i] === 'a') {                  // выполняем проверку, если элемент равен `'a'`
      count = count + 1;                      // увеличиваем счетчик на `1`
    }
  }

  return count;
}

console.log(countLetterA('Hello'));           // 0
console.log(countLetterA('abc'));             // 1
console.log(countLetterA('an apple'));        // 2
console.log(countLetterA('JavaScript'));      // 2
```

Теперь разберем функцию, которая считает количество `гласных букв` в строке:

```javascript
function countVowels(string) {
  const vowels = 'aeiouAEIOU';                // создаем строку с гласными буквами
  let count = 0;                              // создаем переменную `count`, для подсчета количества гласных букв

  for (let i = 0; i < string.length; i++) {   // перебираем строку от начала до конца
    if (vowels.includes(string[i])) {         // выполняем проверку, если элемент присутствует в строке `vowels`
      count++;                                // увеличиваем счетчик на `1`
    }
  }

  return count;                               // возвращаем количество гласных букв
}

console.log(countVowels('Hello'));            // 2
console.log(countVowels('abuciobte'));        // 5
console.log(countVowels('Java Script'));      // 3
console.log(countVowels('programming'));      // 3
```

Давайте разберем функцию, которая считает количество `цифр` в строке:

```javascript
function countDigits(string) {
  const digits = '0123456789';                // создаем строку с цифрами
  let count = 0;                              // создаем переменную `count`, для подсчета количества цифр

  for (let i = 0; i < string.length; i++) {   // перебираем строку от начала до конца
    if (digits.includes(string[i])) count++;  // выполняем проверку, если элемент присутствует в строке `digits`, увеличиваем счетчик на `1`
  }

  return count;                               // возвращаем количество цифр
}

console.log(countDigits('123'));              // 3
console.log(countDigits('0954'));             // 4
console.log(countDigits('1234567890'));       // 10
console.log(countDigits('J1a7v00a 7Script')); // 5
```
