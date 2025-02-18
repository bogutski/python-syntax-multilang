Строка (string) в JavaScript должна быть заключена в кавычки. В JavaScript существует три типа кавычек.
```
let str ='Hello world';
let str2 = "World"; 
let str3 = `Sum  ${1+2}`;
```
Двойные или одинарные кавычки являются «простыми», между ними нет разницы в JavaScript.

Обратные кавычки же имеют «расширенный функционал». Они позволяют нам встраивать выражения в строку, заключая их в `${…}`. 

Например,
```
let price = 30;
let count = 15;
console.log(`Price of ${count} toys is ${price * count} dollars`); // выведет "Price of 15 toys is 450 dollars"
```
Свойство `length` позволяет вычислить длину строки, т.е. количество символов в строке. Бывает так, что люди с практикой в других языках случайно пытаются вызвать его, добавляя круглые скобки: они пишут str.length() вместо `str.length`. Это вызовет ошибку. Так как `str.length` — это числовое свойство, а не функция, добавлять скобки не нужно.

```
let str ='Hello world';
console.log(str.length); //выведет длину строки str, т.е. 11 
```
Нумерация символов в строке начинается с нуля.

Обратиться к конкретному символу строки можно по его индексу. Например, `str[0] ` - символ строки str по индексу 0.
```
let str ='I like JavaScript';
console.log(str[0]); //выведет  "I";
console.log(str[7]); //выведет  "J";
console.log(str[str.length - 1]); //выведет  последний символ строки, т.е. "t";
```

Со строками можно выполнять операцию слияния (операцию конкатенации), которая обозначается знаком `+`.
```
let str1 ='How';
let str2 = 'do';
let str3 = 'you';
console.log(str1 + ' '  + str2 + ' ' + str3 + ' ' + str2 + '?'); //выведет  "How do you do?"
```
Иногда бывает необходимо в строку вставить специальные символы, такие как перевод строки, кавычки и т.п. Все специальные символы начинаются с обратного слеша, `\` — так называемого **«символа экранирования»**. Примеры специальных символов:
- `\n` - перевод строки
- `\"`, `\'` - кавычки
- `\t` -  знак табуляции
- `\\` - обратный слеш

**Содержимое строки в JavaScript нельзя изменить**.

 Нельзя взять символ посередине и заменить его. Как только строка создана — она такая навсегда.
Строки в JavaScript **иммутабельны**. Все методы работы со строками предоставляют возможности либо только для чтения, либо возвращают новую строку. Иммутабельность предполагает, что после создания строки она не может быть изменена. 

