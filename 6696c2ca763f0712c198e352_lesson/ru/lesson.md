Конкатенация (объединение) строк означает добавление одной или нескольких строк в конец другой строки.

### Объединение строк с помощью оператора `+`

Тот же оператор `+`, который используется для добавления двух чисел, можно использовать для объединения двух строк `"строка1" + "строка2"`.

Оператор `+` создает новую строку путем объединения строк слева и справа от него.

Например, объединение строк `Hello` и `world!`, создаёт строку `Helloworld!`.

```javascript
console.log('Hello') // в консоль выведет 'Hello'
console.log('world!') // в консоль выведет 'world!'
console.log('Hello' + 'world!') // в консоль выведет 'Helloworld!'
```

Строки не разделяются автоматически пробелом. Если нам нужен пробел между нашими строками, нужно указать его в одной из строк, или добавить строку с пробелом между ними:

```javascript
console.log('Hello ' + 'world!') // добавим пробел в 'Hello ', в консоль выведет 'Hello world!'
console.log('Hello' + ' world!') // добавим пробел в ' world!', в консоль выведет 'Hello world!'
console.log('Hello' + ' ' + 'world!') // добавим строку с пробелом ' ' между словами,
                                      // в консоль также выведет 'Hello world!'
```

Оператор работает также с переменными:

```javascript
const str1 = 'Hello '
const str2 = 'world!'

console.log(str1 + str2) // в консоль выведет 'Hello world!'

const str3 = str1 + str2 // также можно присвоить результат конкатенации в переменную
console.log(str3) // в консоль выведет строку 'Hello world!'
```

Если левая часть оператора `+` является строкой, JavaScript преобразует правую часть также в строку.

Рассмотрим пример объединения числа со строкой, в результате чего, число становится строкой:

```javascript
const str1 = 100
const str2 = 'world!'

console.log(str1 + str2) // в консоль выведет строку '100world!'
console.log(typeof (str1 + str2)) // в консоль выведет тип данных string
```

В случае если обе переменные являются числом, при использовании оператора `+` мы получим число:

```javascript
const str1 = 100
const str2 = 50

console.log(str1 + str2) // в консоль выведет число 150
console.log(typeof (str1 + str2)) // в консоль выведет тип данных number
```

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/girls-str.png)

Рассмотрим еще пару примеров:

```javascript
console.log(50 + '100') // в консоль выведет строку '50100'
console.log('50' + 100) // в консоль выведет строку '50100'
console.log('50' + '100') // в консоль выведет строку '50100'
```

Добавим окошко `prompt` с вопросом **What is your name?** для ввода пользователем своего имени, и поприветствуем пользователя:

```javascript
const name = prompt('What is your name?')
const greeting = 'Hello, '

console.log(name) // допустим пользователь ввел в окошко 'Viktor', в консоль выведет 'Viktor'
console.log(greeting + name) // в консоль выведет 'Hello, Viktor'
console.log(greeting + name + '!') // в консоль выведет 'Hello, Viktor!'
```

Обернем все это в функцию `hello`:

```javascript
function hello(){
  const name = prompt('What is your name?')
  const greeting = 'Hello, '
  return greeting + name + '!'
}

console.log(hello()) // в консоль выведет 'Hello, Viktor!'
```

Окошко `prompt` выполняется только при работе с браузером и используется в обучающих целях. Рассмотрим более используемый код и перепишем функцию так, чтобы она принимала имя:

```javascript
function hello(name){
  const greeting = 'Hello, '
  return greeting + name + '!'
}

console.log(hello('Viktor')) // в консоль выведет 'Hello, Viktor!'
console.log(hello('Alice')) // в консоль выведет 'Hello, Alice!'
console.log(hello('Bob')) // в консоль выведет 'Hello, Bob!'
```

Перепишем функцию `hello` так, чтобы возвращалось приветствие в соответствии с временем суток.

Для задания времени суток будем использовать 24 часовой формат, где, к примеру, полночь – это `0000`, 8 утра – это `800`, 12 дня – это `1200`

```javascript
function hello(name, time){
  let greeting;

  if (time > 0 && time < 1100) greeting = 'Good Morning, ';
  else if (time >= 1100 && time < 1700)  greeting = 'Good Day, ';
  else if (time >= 1700 && time < 2359)  greeting = 'Good Night, ';

  return greeting + name + '!' 
}

console.log(hello('Viktor', 850)) // в консоль выведет 'Good Morning, Viktor!'
console.log(hello('Alice', 1005)) // в консоль выведет 'Good Morning, Alice!'
console.log(hello('Alex', 1100)) // в консоль выведет 'Good Day, Alex!'
console.log(hello('Nick', 1700)) // в консоль выведет 'Good Night, Nick!'
console.log(hello('Bob', 2240)) // в консоль выведет 'Good Night, Bob!'
```

Подведем итог:

* Для объединения двух и более строк, используется оператор `+`.
* Синтаксис оператора: `"строка1" + "строка2"`.
* Результатом конкатенации строки и числа будет строка.
