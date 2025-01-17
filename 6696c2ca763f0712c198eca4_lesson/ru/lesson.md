### Посчитать количество заглавных и строчных букв в строке

Рассмотрим пример:
```javascript
const str = 'Hello Coding JS!';
```
В строке выше мы имеем 4 буквы в верхнем регистре и 9 в нижнем.

Давайте напишем код, чтобы получить результат в виде
`U:4 L:9`
Сначала посчитаем количество букв в верхнем регистре.

У нас нет никаких встроенных функций для определения регистра, поэтому мы возьмем символ,
переведем его в нижний регистр и если переведенная буква не равна исходной, то исходная буква была в
верхнем регистре. Если они равны, то значит буква и была изначально в нижнем регистре.

Давайте проверим эту гипотезу:
```javascript
let upper = 0, lower = 0 
// введем счетчики. Переменная `upper` будет считать заглавные буквы, `lower` - строчные буквы. Первоначальное значение счетчиков равно нулю.

for (let i = 0; i < str.length; i++){              // создаем цикл по строке
  if(str[i].toUpperCase() === str[i]) upper++      // если символ переведенный в верхний регистр равен самому символу, то это заглавная буква и увеличиваем счетчик
   else lower ++                                   // иначе увеличиваем счетчик строчных букв
}

console.log(upper, lower)
// 7 9
```
Получили, что заглавных букв 7, хотя на самом деле их 4. Количество строчных букв - правильное.
Давайте подумаем почему?

Причина в том, что мы переводим не только буквы, а вообще любые символы. Пробел, переведенный в верхний регистр никак не трансформируется и равен
самому пробелу. Значит счетчик увеличился, когда цикл дошел до пробела.

Давайте попробуем сделать какую-то проверку, чтобы вообще знать у нас конвертируется куда-то символ или нет:
```
// H - h
// h - H
// @ - @
```
```javascript
const str = 'Hello !';
let upper = 0, lower = 0 

for (let i = 0; i < str.length; i++){              
  if(str[i].toUpperCase() === str[i] && str[i].toLowerCase() !== str[i]) upper++   
  // мы задали условие, если перевести символ в верхний регистр, то он равен себе до трансформации
  // и этот же символ переведенный в нижний регистр не равен себе до трансформации (предполагаем, что мы работаем с заглавной буквой)  
   else lower ++                                   
}

console.log(upper, lower)
// 1 6
```
Получили, что буквы верхнего регистра считаются правильно, а нижнего - нет.

Давайте подумаем, как это исправить.

Может быть вместо `else` написать второй `if`
```javascript
const str = 'Hello JS !';
let upper = 0, lower = 0 

for (let i = 0; i < str.length; i++){              
  if(str[i].toUpperCase() === str[i] && str[i].toLowerCase() !== str[i]) upper++   
  if(str[i].toUpperCase() !== str[i]) lower++
}

console.log(upper, lower)
// 3 4
```
Во втором условии `if` нам хватило только одной проверки, чтобы получить правильный результат.

Может быть нам тогда и первое условие стоит упростить?
```javascript
const str = 'Hello JS !';
let upper = 0, lower = 0 

for (let i = 0; i < str.length; i++){              
  if(str[i].toLowerCase() !== str[i]) upper++   
  if(str[i].toUpperCase() !== str[i]) lower++
}

console.log(upper, lower)
// 3 4
```

Всё правильно работает! То есть этот вариант покрывает все случаи: и когда в строку приходят заглавные и строчные буквы,
и пробелы, и какие-то символы.

На примере этой задачи мы попробовали выстроить логику, как можно прийти к решению той или иной задачи, даже если
мы не знаем как ее решать. И получив решение, как можно оптимизировать код.