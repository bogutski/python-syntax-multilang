В предыдущем занятии мы научились удалять дубликаты символов из строки, теперь давайте научимся **удалять дубликаты слов**.

Рассмотрим пример
```javascript
const str = 'car js pasv car jsp coding    js car';
//'car js pasv jsp coding' - предполагаем получить в результате решения строку данного вида

const words = {}  //создаем объект для того чтобы собирать в нем уже добавленные слова
let res = '';     //строка результат, в которой уже не будет дубликатов
let acc = '';     //строка аккумулятор, в которую мы будем собирать слово

//Сделаем цикл по строке
for (let i = 0; i < str.length; i++) {
  if(str[i] !== ' ') acc += str[i]  //если текущий символ не пробел, то добавляем его в аккумулятор
  
  if(str[i] === ' ' || i === str.length-1){  //проверяем, что если мы дошли до пробела или до конца строки
    if(acc && !words[acc]) { //проверяем что если аккумулятор не пустой И объект words с ключом 'acc' возвращает false (то есть такого слова еще нет в объекте)
    words[acc] = 1;          // добавляем слово аккумулятор в объект и присваиваем ключу значение 1;
    res += acc + ' ';        //добавляем в строку результат наш аккумулятор и пробел
    }
    acc = '';                //аккумулятор нужно очищать, после того, как мы наткнулись на пробел
  }
}

console.log(res)
//'car js pasv jsp coding '
```
Здесь мы получили пробел еще и в конце строки.

Чтобы от этого избавиться можно сделать дополнительную проверку.

А заодно немного преобразовать код:
```javascript
const str = 'car js pasv car jsp coding    js car';

const words = {}  
let res = '';     
let acc = '';     

for (let i = 0; i < str.length; i++) {
  if(str[i] !== ' ') acc += str[i]  
  
  if(str[i] === ' ' || i === str.length-1){  
    if(acc && !words[acc]) { 
    words[acc] = 1;    
    
    if(res) res += ' ' + acc;  //если `res` не пустая строка и туда уже что-то добавили, тогда сначала ставим пробел, а потом добавляем слово аккумулятор
    else res += acc;           //иначе (то есть в самом начале строки) в результат добавляем только слово аккумулятор
    }
    acc = '';                
  }
}

console.log(res)
//'car js pasv jsp coding'
```
Мы получили правильный результат.

Код получился компактным и мы не делаем проверку последнее слово или нет, чтобы не добавлять после него пробел,
а проверяем если мы собрали первое слово.

Небольшое пояснение проверки
```javascript
if(!words[acc]);
```
Данной проверкой мы не проверяет наличие ключа в объекте, а проверяем значение ключа.
Если ключа нет, то вернется `undefined`, а `undefined` в логическом контексте будет `false`.

Если бы мы хотели проверить наличие ключа в объекте, то использовали бы команду `in` или `hasOwnProperty`

Проработайте эту задачу еще раз. Такие задания часто дают на собеседованиях.
