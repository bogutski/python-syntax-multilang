
В этом уроке мы научимся проверять является ли строка палиндромом.

**Палиндром** - это строка, которая читается справа налево и слева направо одинаково.

Примеры палиндрома
```javascript
const str = '101';
const str2 = 'anna';
const str3 = 'ono';
const str4 = '0 44 0';
```
Не является палиндромом
```javascript
const str = 'o 45 0';
const str2 = 'abda';
```
Предполагается, что для определения палиндрома, регистр не имеет значения, но 
это лучше уточнять в каждой отдельной ситуации.

Какие есть способы проверки строки на палиндром?

1. Преобразовать строку в массив, перевернуть его, склеить массив и сравнить с исходной строкой.
Данный способ самый короткий с точки зрения написания, но самый затратный с точки зрения операций.

```javascript
const str = 'obbo';
const isPalindrome = str.split('').reverse().join('') === str;

console.log(isPalindrome); // true
```
```javascript
const str = 'obqo';
const isPalindrome = str.split('').reverse().join('') === str;

console.log(isPalindrome); // false
```

```javascript
const str = 'Obbo';
const isPalindrome = str.split('').reverse().join('') === str;

console.log(isPalindrome); // false
```
В примере выше мы получим результат `false`, так как регистр имеет значение.

Это можно исправить с помощью приведения к нижнему регистру.
```javascript
const str = 'Obbo';
const isPalindrome = str.toLowerCase().split('').reverse().join('') === str.toLowerCase();

console.log(isPalindrome); // true
```
Способ написания переменной `isPalindrome` называется `chaining` (цепочка вызовов).
`str.toLowerCase().split('').reverse().join('')` - сначала мы приводим к нижнему регистру, потом переводим строку в массив с помощью команды
`split('')`, затем переворачиваем массив с помощью `reverse()` и склеиваем его обратно в строку с помощью `join('')`.

У данного способа есть некоторые недостатки:
* split() - пройдется по строке и преобразует ее в массив
* reverse() - пройдется по всему массиву и перевернет массив
* join() - пройдется по массиву и склеит его в строку
* и только после этого мы сможем сравнить две строки.
  
Происходит многократное повторение прохождения по строке/массиву. С точки зрения оценки эффективности алгоритма, данный вариант
практически равен следующему методу, но на собеседовании скорее всего от вас ожидают увидеть способ ниже.

2. **Цикл по массиву**, где мы будем сравнивать первую букву с последней, вторую с предпоследней и т.д. Если хоть одна пара не совпадает, то строка не является палиндромом и работа алгоритма не продолжается.

Плюс данного способа, то что он не использует дополнительных структур
```javascript
function isPalindrome(str){
  for (let i = 0; i< str.length; i++){
  // Как обращаться к индексам с начала строки мы знаем, но как дополнительно идти с конца?
  // str.length - 1 - i  таким образом мы будем обращаться к индексам с конца строки
    if (str[i] !== str[str.length - 1 - i]) {  // здесь мы сравниваем, что элементы с начала строки не равны элементам с конца строки
      return false                             // если они не равны, то строка не является палиндромом
    }
  }
  return true;
}

console.log(isPalindrome('obqiiwbo')) // false
```
```javascript
function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true;
}

console.log(isPalindrome('obiyyibo')) // true
```
В данном примере мы получили результат `true`, но давайте проверим сколько цикл сделал операций.

Для этого выведем `console.log(i)` внутри цикла
```javascript
function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(i)
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true;
}

console.log(isPalindrome('obiyyibo')) // 0 1 2 3 4 5 6 7 - true
```
Вывод в консоль показал, что цикл сделал 8 операций, хотя достаточно было сделать 4.
Необходимо было проверить только половину строки.

Для этого сделаем небольшую оптимизацию:
```javascript
function isPalindrome(str){
  for (let i = 0; i< str.length / 2; i++){    // цикл будет идти только до половины строки
    console.log(str[i])                       // проверим, какие символы проверяет цикл
    if (str[i] !== str[str.length - 1 - i]) {
      return false  
    }
  }
  return true;   
}

console.log(isPalindrome('obiyyibo')) // 'o' 'b' 'i' 'y' - true
```
В данном случае длина строки четная, и цикл берет ровно половину длины строки.
Что необходимо делать в случае, если длина строки нечетная?

Средний символ в нечетной строке не важен, но цикл будет включать серединный символ:
```javascript
function isPalindrome(str){
  for (let i = 0; i < str.length / 2; i++){
    console.log(str[i])                     // проверяем, какие символы проверяет цикл
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true;
}

console.log(isPalindrome('obiyRyibo')) // 'o' 'b' 'i' 'y' 'R' - true
```
Возьмите этот способ себе на заметку и используйте в дальнейшем при решении задач