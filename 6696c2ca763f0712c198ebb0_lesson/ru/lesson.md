### Что такое `Анаграмма`?

`Анаграмма` - это слово или фраза, образованные путем перестановки букв другого слова или фразы. 

Например, `brush` - это анаграмма слова `shrub`, `listen` - анаграмма слова `silent`, а `laptop machines` анаграмма от `Apple Macintosh`.


### Функция на проверку анаграммы с использованием только циклов

Давайте напишем функцию, которая будет проверять, являются ли две строки анаграммой.

```javascript
function isAnagram(str1, str2){
  const s1 = str1.trim().toLowerCase();       // удаляем пробелы и приводим к нижнему регистру
  const s2 = str2.trim().toLowerCase();

  if(s1.length !== s2.length) return false;   // если длина строк не равна, то это не анаграмма

  for(let i = 0; i < s1.length; i++){         // первый цикл перебирает все буквы первой строки
    for(let j = 0; j < s2.length; j++){       // второй цикл перебирает все буквы второй строки
      if(s1[i] === s2[j]) break;              // если буква первой строки равна букве второй строки, то выходим из цикла
      if(s2.length -1 === j) return false;    // если мы дошли до конца второй строки и не нашли совпадений, то это не анаграмма
    }
  }

  return true;
}

console.log(isAnagram('elbow', 'below'));   // true
```



### Функция на проверку анаграммы с использованием объекта

Теперь мы рассмотрим, как можно оптимизировать нашу функцию с помощью объекта. 

```javascript
function isAnagram(str1, str2){
    const s1 = str1.trim().toLowerCase();
    const s2 = str2.trim().toLowerCase();

    if(s1.length !== s2.length) return false;

    const s2object = {};                        // создаем объект, в котором будем хранить буквы второй строки

    for(let i = 0; i < s2.length; i++){         // цикл перебирает все буквы второй строки
        const el = s2[i];                       // сохраняем букву в переменную, чтобы улучшить читаемость кода
        s2object[el] = true;                    // добавляем букву в объект: `ключ - это будет буква, значение - true`
    }

    for(let i = 0; i < s1.length; i++){         // цикл перебирает все буквы первой строки
        const el = s1[i];                       // сохраняем букву в переменную, чтобы улучшить читаемость кода
        if(!s2object[el]) return false;         // если буквы нет в объекте, то это не анаграмма
    }

    return true;
}

console.log(isAnagram('123', '923'));       // false
console.log(isAnagram('elbow', 'below'));   // true
console.log(isAnagram('laptop 123', 'toplap 125'));   // false
console.log(isAnagram('laptop 123', 'toplap 123'));   // true
console.log(isAnagram('laptop machines', 'Apple Macintosh'));   // true
```



### Функция на проверку анаграммы с использованием методов массива и строки

В следующей задаче мы рассмотрим, как можно укоротить нашу задачу с помощью методов массива и строки.

Давайте разберем, какие методы мы будем использовать, помимо `trim` и `toLowerCase`.

* `split` - метод строки, который разбивает строку на массив по разделителю
* `sort` - метод массива, который сортирует массив по алфавиту. По умолчанию сортирует по возрастанию. Еще в этот метод можно передать параметр, который будет определять порядок сортировки.
* `join` - метод массива, который объединяет массив в строку

```javascript
function isAnagram(str1, str2){
    const s1 = str1.trim().toLowerCase();
    const s2 = str2.trim().toLowerCase();

    if(s1.length !== s2.length) return false;

    const s1mod = s1.split('').sort().join('');   // 'below'
                                                  // для второй строки разберем по шагам
    const s2mod = s2.split('')                    // [ 'e', 'l', 'b', 'o', 'w' ] - переводим строку в массив
    const s2mod2 = s2mod.sort()                   // [ 'b', 'e', 'l', 'o', 'w' ] - сортируем массив
    const s2mod3 = s2mod2.join('');               // 'below' - переводим массив в строку

    return s1mod === s2mod3;                      // сравниваем строки
}

console.log(isAnagram('below', 'elbow'));         // true
```

Попрактикуйтесь в решении этой задачи еще раз самостоятельно, чтобы закрепить материал.