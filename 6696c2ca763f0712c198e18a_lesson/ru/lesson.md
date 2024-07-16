![](https://course-qa-basics.s3.us-west-1.amazonaws.com/if-else-girl.png)

Ветвление позволяет изменять ход выполнения программы в зависимости от условий.

Есть три комбинации условных операторов:

* `if`
* `if...else`
* `if...else if...else`

### Одиночный оператор `if`

Оператор `if` позволяет запускать блок кода, когда указанное условие истинно.


```javascript
if (условие){
  // выполнить код, если условие истинно (true)
}
```

Например, нам нужно написать код, который позволит определить, можно ли выдать человеку пропуск в ночной клуб, на основе данных о возрасте.

```javascript
const age = 20;

if(age >= 21){
  console.log('Welcome') // код не сработает, если возраст меньше 21
}

// программа продолжит выполняться
console.log('The end');

```
### Комбинация операторов `if...else`
А что, если мы хотим сделать что-то еще, если условие ложно? Нам пригодится оператор `else`.

Оператор `if...else` используется когда нам нужно выполнить разные инструкции в зависимости от того или условие истинно, или ложно.

```javascript
if (условие) {
  // выполнить код, если условие истинно (true)
} else {
  // выполнить код, если условие ложно (false)
}
```

Используя оператор `else`, вы можете запустить блок кода, только если предыдущие условные операторы были ложными.

```javascript
const age = 20;

if(age >= 21){
  console.log('Welcome') // код сработает, если возраст больше 21
} else {
  console.log('Sorry, no') // код сработает, если возраст меньше 21
}
```

Преобразуем этот код в функцию, и добавим окошко `prompt` с вопросом **What is your age?** для ввода пользователем своего возраста.

Так как `prompt` возвращает строку `string`, нам надо преобразовать переменную `age` к числу.

Сделать это можно с помощью `Number()`, или просто добавить `+` перед `prompt`.

```javascript
function door(){
  const age = +prompt('What is your age?');

  if(age >= 21){
    return 'Welcome';
  } else {
    return 'Sorry, no';
  }
}

const answer = door();

console.log(answer); // допустим пользователь ввел 30 в окошко, в консоль выведет 'Welcome'
```

Представим, что в нашем ночном клубе есть несколько комнат:

1. от 21 до 55 лет (55 включительно)
2. от 55 до 80 лет (80 включительно)
3. от 80 лет

Попробуем написать эти условия с помощью оператора `if...else`

```javascript
function door(){
  const age = +prompt('What is your age?');

  if(age >= 21){
    if(age > 55){
      if(age > 80){
        return 'Room 3'; // больше 80, комната 3
      } else {
        return 'Room 2'; // от 55 до 80, комната 2
      }
    } else {
      return 'Room 1'; // от 21 до 55, комната 1
    }
  } else {
    return 'Sorry, no';
  }
}

const answer = door();

console.log(answer);
```

Появилось несколько уровней вложенности, и код стал плохо читаемым.

### Комбинация операторов `if...else if...else`

Перепишем наш код с тремя комнатами с помощью оператора `if...else if...else`

```javascript
function door(){
  const age = +prompt('What is your age?');

  if(age >= 21){ 
    return 'Room 1'; // от 21 до 55, комната 1
  } else if (age > 55){
    return 'Room 2'; // от 55 до 80, комната 2
  } else if (age > 80){
    return 'Room 1'; // больше 80, комната 3
  } else {
    return 'Sorry, no';
  }
}

const answer = door();
console.log(answer); // если пользователь ввел 56, в консоль выведет 'Room 1'
                     // а должно было 'Room 2'
```

Почему же так произошло? Потому, что `56 >= 21`, получается первое условие истинно.

Условия проверяются сверху вниз. Как только одно из условий становится истинным, выполняется код, внутри соответствующего `if`, и остальная часть оператора `if...else if...else` игнорируется. Если ни одно из условий не выполняется, будет выполнен последний оператор `else`.

Попробуем переписать код, чтобы нам возвращались правильные номера комнат

```javascript
function door(){
  const age = +prompt('What is your age?');

  if(age > 80){ 
    return 'Room 3'; // больше 80, комната 3
  } else if (age > 55){
    return 'Room 2'; // от 55 до 80, комната 2
  } else if (age >= 21){
    return 'Room 1'; // от 21 до 55, комната 1
  } else {
    return 'Sorry, no';
  }
}

const answer = door();

console.log(answer); 

// Если пользователь ввел 80, в консоль выведет 'Room 3'
// Если пользователь ввел 56, в консоль выведет 'Room 2'
// Если пользователь ввел 25, в консоль выведет 'Room 1'
// Если пользователь ввел 18, в консоль выведет 'Sorry, no'
```

Пробуйте разные варианты, чтобы понять, как работает оператор `if...else if...else`.