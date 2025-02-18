### Получить слова из строки при помощи метода `split()`

Метод `split()` - это метод строк, который возвращает массив строк.

Этот метод позволяет разбить строку на части по разделителю, который передается в качестве аргумента метода.

```javascript
const str = 'JavaScript is the best programming language';

const arr = str.split(' ');

console.log(arr); // ['JavaScript', 'is', 'the', 'best', 'programming', 'language']
```


### Получить слова из строки при помощи циклов

Давайте попробуем решить эту задачу с использованием цикла `for` и условий `if`.

```javascript
const str = "   Let's   practice   JavaScript!     ";
const arr = [];     // массив для хранения слов 
let acc = '';       // аккумулятор для хранения слова

for(let i = 0; i < str.length; i++){
    if(str[i] !== ' ') acc += str[i];   // если текущий символ не пробел, то добавляем его в аккумулятор
  
    if((str[i] === ' ' || i === str.length - 1) && acc !== ''){  // если текущий символ пробел или последний символ строки и аккумулятор не пустой
        arr.push(acc);                                           // добавляем слово в массив
        acc = '';                                                // обнуляем аккумулятор
    }
}

console.log(arr); // [ "Let's", "practice", "JavaScript!" ]
```

Разберем как можно было еще написать второе условие `if`:

```javascript
if(str[i] === ' ' && acc !== '' || i === str.length - 1 && acc !== '')
```
Если элемент равен пробелу `И` аккумулятор не пустой `ИЛИ` это последний элемент `И` аккумулятор не пустой.



### Как получить слова из строки и пропустить знаки препинания?

Рассмотрим один из вариантов как можно получить слова из строки и пропустить знаки препинания.

Все что нам нужно для решения это добавить знаки которые мы хотим пропустить в переменную `symbols` и добавить проверку в условие `if`.

```javascript
const str = '   Hey, Alice! How was your vacation?     ';
const arr = [];
let acc = '';

const symbols = '.,!?;:'    // знаки которые мы хотим пропустить

for(let i = 0; i < str.length; i++){
    if(str[i] !== ' ' && !symbols.includes(str[i])) acc += str[i];  // если текущий символ не пробел и не входит в переменную `symbols`, то добавляем его в аккумулятор

    if((str[i] === ' ' || i === str.length - 1) && acc !== ''){
        arr.push(acc);
        acc = '';
    }
}

console.log(arr); // [ 'Hey', 'Alice', 'How', 'was', 'your', 'vacation' ]
```
