![](https://course-qa-basics.s3.us-west-1.amazonaws.com/object-string.png)

Каждое свойство имеет `ключ` и `значение`, и можно получить доступ к этим значениям, используя ключ свойства.

Для доступа к свойствам объекта в JavaScript используется синтаксис точки или квадратных скобок. Давайте рассмотрим оба варианта более подробно.

### Синтаксис точки

Синтаксис точки используется для доступа к свойствам объекта, если имя свойства (ключ) известно заранее. Он выглядит следующим образом:

```javascript
objectName.propertyName
```

Где `objectName` - имя объекта, а `propertyName` - имя свойства (ключ).

Например, у нас есть объект `person`:

```javascript
let person = { 
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York'
};
```

Мы можем получить доступ к свойствам объекта `person`, используя синтаксис точки:

```javascript
console.log(person.age); // 30
console.log(person.city); // 'New York'
console.log(person.firstName + ' ' + person.lastName + ' from ' + person.city); // 'John Doe from New York'
```

### Синтаксис квадратных скобок

Синтаксис квадратных скобок используется для доступа к свойствам объекта, если имя свойства содержит пробелы или другие специальные символы. Он выглядит следующим образом:

```javascript
objectName['propertyName']
```

Где `objectName` - имя объекта, а `propertyName` - имя свойства (ключ).

Например, мы можем получить доступ к значению ключа `'city name'` объекта `person`, используя синтаксис квадратных скобок:

```javascript
console.log(person['city name']); // 'New York'
```

Еще один пример с квадратными скобками: ключ `'shirt-color'` объекта `store`:

```javascript
console.log(store['shirt-color']); // 'red'
```


Мы также можем использовать переменную вместо имени свойства:

```javascript
let propName = 'age';

console.log(person[propName]); // 30
```

Обратите внимание, что имя свойства в квадратных скобках должно быть заключено в кавычки (двойные или одинарные).

Напишем функцию `compareAges`, которая принимает два объекта `person1` и `person2`, которые имеют свойство `age`, и возвращает сообщение о том, кто старше.

```javascript
function compareAges(person1, person2) {
  if (person1.age > person2.age) {
    return person1.name + 'is older than' + person2.name;
  } else if (person1.age < person2.age) {
    return person2.name + 'is older than' + person1.name;
  } else {
    return 'these people are the same age';
  }
}

let person1 = { name: 'John', age: 30 };
let person2 = { name: 'Jane', age: 25 };

let result = compareAges(person1, person2);
console.log(result); // 'John older than Jane',
                     // потому что возраст John больше возраста Jane
```
