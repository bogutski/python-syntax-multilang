### Заменить символ в строке с помощью цикла

В этом уроке мы научимся заменять символ в строке с помощью цикла.

Для первого примера, мы заменим `восклицательный` знак на `точку`.

```javascript
const str = 'Hello! JavaScript!';
let result = '';                        // создаем пустую строку, в которую будем записывать результат

for (let i = 0; i < str.length; i++) {  // перебираем строку
  if (str[i] === '!') {                 // если текущий символ - восклицательный знак
    result += '.';                      // вместо него записываем точку
  } else {                              // иначе
    result += str[i];                   // записываем в результат текущий символ
  }
}
console.log(result);                    // 'Hello. JavaScript.'
```


### Использование объекта для замены символов строки

В этом примере, мы создадим объект с символами, которые мы хотим заменить.

```javascript
const str = '1 + 2 + 3 Hello. JavaScript...';
let result = '';

const map = {                           // создаем объект, в котором будут храниться замены
    '.': '!',
    1: 'one',
    2: 'two',
    3: 'three',
    ' ': '_',
    '+': '*'
}

for (let i = 0; i < str.length; i++) {  // перебираем строку
    if (map[str[i]]) {                  // если текущий символ есть в объекте
        result += map[str[i]];          // записываем в результат значение из объекта
    } else {                            // иначе
        result += str[i];               // записываем в результат текущий символ
    }
}
console.log(result);                    // 'one_*_two_*_three_Hello!_JavaScript!!!'
```

Сделаем еще один пример, в котором мы заменим цифры и математические знаки на слова.

```javascript
const str = '5 + 4 - 7 = 2; 2 * 3 / 6 = 1';

let result = '';

const map = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7:'seven',
    8: 'eight',
    9: 'nine',
    '-': 'minus',
    '+': 'plus',
    '*': 'multiply',
    '/': 'divide',
    '=': 'equals',
    ';': ' and',
}

for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
        result += map[str[i]];
    } else {
        result += str[i];
    }
}
console.log(result); // 'five plus four minus seven equals two and two multiply three divide six equals one'
```


### Замена символов в строке с помощью метода replace

Метод `replace` - это метод строк, который позволяет заменить символы в строке.

```javascript
const str = 'Hello, world!';

let result = str.replace('world', 'JavaScript');  // заменяем 'world' на 'JavaScript'

console.log(result);                              // 'Hello, JavaScript!'
```

Давайте попробуем заменить несколько элементов в строке.

```javascript
const str = 'Hello! World!';

let result = str.replace('!', ';'); // заменяем восклицательный знак на точку с запятой

console.log(result);                // 'Hello; World!'
```

В результате мы видим что не все восклицательные знаки были заменены. 

Это произошло потому что метод `replace` заменяет только первое вхождение.

Чтобы заменить все вхождения, нужно использовать `регулярное выражение` или метод `replaceAll`.


### Замена всех вхождений с помощью регулярного выражения или метода replaceAll

```javascript
const str = 'Hello! World!';

let result = str.replaceAll('!', ';'); // заменяем все вхождения восклицательного знака на точку с запятой

console.log(result);                   // 'Hello; World;'
```

Теперь заменим элементы в строке с помощью регулярного выражения.

```javascript
const str = 'Hello Java Script !';

let result = str.replace(/ /g, '_');  // заменяем все пробелы на нижнее подчеркивание

console.log(result);                   // 'Hello_Java_Script_!'
```
