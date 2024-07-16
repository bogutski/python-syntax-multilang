Свойство `length` возвращает целочисленное значение, представляющее количество символов в строке, то есть длину стоки. 

Например, длина строки `"Hello"` равна 5.

Синтаксис свойства `length` следующий: `str.length`, где `str` — строка.

Найдем количество символов в строке `'Hello'`:

```javascript
const str = 'Hello';
console.log(str.length); // 5
```

Этот же пример можно записать и так:

```javascript
console.log('Hello'.length); // 5
```

Для пустых строк свойство `length` возвращает `0`.

```javascript
const str = '';
console.log(str.length); // выведет 0, строка пустая
```

Рассмотрим пример использования свойства `length` с переменной:

```javascript
const greeting = 'Hello'
const strLength = greeting.length;
console.log(strLength - 1); // 4
```

Теперь объявим переменную с именем `length` и присвоим ей `greeting.length`:

```javascript
const greeting = 'Hello'
const length = greeting.length

console.log(length);  // в консоль выведет 5, вывели переменную в которую записали длину строки 
```

Переменная может быть названа `length`, так как она не перекрывает свойство `length` строки. Мы рекомендуем не называть переменные именами свойств, чтобы избежать путаницы. 


Также попробуем вызвать свойство `length` для переменной `greeting` в которой была выполнена конкатенация:

```javascript
const greeting = 'Hello ' + 'world'
const greetingLength = greeting.length

console.log(greetingLength); // в консоль выведет 11. В переменной greeting хранится строка 'Hello world' 
```

В этом примере мы объявили переменную `greetingLength` и присвоили ей значение свойства `length` строки `greeting`. В консоль выведется `11`, так как в переменной `greeting` хранится строка `'Hello world'`, которая состоит из 11 символов.

Название переменной `greetingLength` явно сообщает, что в ней хранится. Это хорошо.
