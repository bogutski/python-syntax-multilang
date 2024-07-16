Метод repeat используется для повторения строки необходимое количество раз.

```javascript
const str = 'pasv';
console.log(str.repeat(3)); // 'pasvpasvpasv'
```

Если нужен пробел между повторениями.

```javascript
const str = 'pasv ';
console.log(str.repeat(3)); // 'pasv pasv pasv '
```

Сделаем функцию, которая повторяет строку необходимое количество раз с пробелами между повторениями. В конце строки пробел добавляться не будет.

В качестве параметров функция принимает строку и количество повторений.

```javascript
function repeatWords(str, n) {
  return (str + ' ').repeat(n - 1) + str;
}

console.log(repeatWords('js', 3)); // 'js js js'
```

`repeat(n - 1)` - уменьшаем количество повторений на 1. Если не уменьшать, то в конце строки будет пробел.

Разберитесь, как работает функция `repeatWords` с каждой частью кода.

### Обернем повторяющуюся строку в звездочки

Ожидаем получить:

```javascript
**********
*js js js*
**********
```

Напишем функцию `repeatWords`

```javascript
function repeatWords(str, n) {
  const content = (str + ' ').repeat(n - 1) + str; 
  const line = '*'.repeat(content.length + 2); 
  return line + '\n' + '*' + content + '*\n' + line; // '\n' - перенос строки. Без него `line` и `content` будут выводиться одной строкой.
}

console.log(repeatWords('js', 3));
```

`content` – то, что мы хотим обрамить звездочками. В нашем случае `js js js`;

`line` – верхний и нижний ряд звездочек. Повторяем `*` количество раз, равное длине `content` с добавлением дополнительных `*` в начале и в конце.

`\n` – символ переноса строки. Без него `line` и `content` будут выводиться одной строкой.

### Рассмотрим другой пример на базе предыдущего

Увеличение высоты обрамления и добавления пробелов до и после введенного текста.

```javascript
************
*          *
* js js js *
*          *
************
```

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/js-green.png)

Вводим дополнительную строку `subline` которая состоит из `*` в начале, далее из пробела, повторяющегося необходимое количество раз, и `*` в конце.

```javascript
function repeatWords(str, n) {
  const content = (str + ' ').repeat(n - 1) + str;
  const line = '*'.repeat(content.length + 4); 
  const subline = '*' + ' '.repeat(content.length + 2) + '*';
  return line + '\n' + subline + '\n' + '* ' + content + ' *\n' + subline + '\n' + line;
}

console.log(repeatWords('js', 3));
```

Разберите каждую строку в примере. Экспериментируйте!
