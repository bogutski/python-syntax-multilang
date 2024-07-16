Метод `trim()` удаляет пробелы в начале и конце строки.

Метод `trim()` не изменяет исходную строку.

Рассмотрим примеры:

```javascript
const str = '   L     '; // строка с пробелами в начале и конце
const strResult = str.trim(); // введем новую переменную и применим метод trim()
console.log(strResult); // 'L' - все пробелы удалены
console.log(strResult.length); // 1 - узнаем длину строки для проверки работы метода
```

```javascript
const str = '      Learn JS.  ';
const strResult = str.trim();
console.log(strResult); // 'Learn JS.' - в середине строки пробелы не удаляются
```

Для удаления пробелов внутри строки нужно использовать другие методы.

Метод `trimStart()` удаляет пробелы в начале строки.

Метод `trimEnd()` удаляет пробелы в конце строки.

```javascript
const str = '       Learn JS.       ';
const strResultStart = str.trimStart(); // применим метод trimStart()
console.log(strResultStart); // 'Learn JS.       ' - метод trimStart() удалил пробелы только в начале строки

const strResultEnd = str.trimEnd(); // применим метод trimEnd()
console.log(strResultEnd); // '       Learn JS.' - метод trimEnd() удалил пробелы только в конце строки
```

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/boy-trim.png)

Создадим функцию, которая будет запрашивать имя пользователя и возвращать его длину.

```javascript
function nameLetterCount() {
    const name = prompt('Name?'); // запрашиваем имя у пользователя в помощью метода prompt() и присваиваем его в переменную name
    const count = name.length; // присваиваем длину переменной name в отдельную переменную
    return 'Your name containts ' + count + ' letters'; // возвращаем результат
};
console.log(nameLetterCount()); // запуск функции
```

```javascript
prompt('Liza'); // 'Your name containts 4 letters' - это верный ответ
prompt('      A    '); // 'Your name containts 11 letters' - это неверный ответ, так как подсчитаны пробелы
```

Для корректной работы функции внесем изменения в код:

* добавим метод trim(), который удалит пробелы в начале и в конце строки
* введем проверку для последнего символа строки, на случай если пользователь в конце имени поставил точку

```javascript
function nameLetterCount() {
    const name = prompt('Name?').trim(); // запрашиваем имя, и затем убираем возможные пробелы
    let count = name.length; // присваиваем длину строки в отдельную переменную
    if(name[name.length - 1] === '.') count--; // проводим проверку последнего символа
    return 'Your name containts ' + count + ' letters'; // возвращаем результат в виде конкатенации строк
}
console.log(nameLetterCount()); // запуск функции
```

```javascript
prompt('Liza'); // 'Your name containts 4 letters'
prompt('      A    '); // 'Your name containts 1 letters'
prompt('Alice.'); // 'Your name containts 5 letters' - теперь функция работает правильно
```