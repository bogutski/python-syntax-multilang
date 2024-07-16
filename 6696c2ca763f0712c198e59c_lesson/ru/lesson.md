### Обращение к свойствам объекта

Повторим, как обращаться к свойствам объекта:

```javascript
const person = {
  name: 'Jack',
  age: 25,
  isAdult: true,
  address: {
    street: '150 Main',
    city: 'New York',
    state: 'NY'
  }
};

console.log(person.name)                    // 'Jack'
console.log(person.isAdult)                 // true
console.log(person.address.city)            // 'New York'

console.log(person['age'])                  // 25
console.log(person['address']['state'])     // 'NY'
```

Обратиться к свойству объекта можно двумя способами: через `точку` или использовать `квадратные скобки`.



### Изменение свойств объекта

Давайте теперь создадим объект и изменим его свойства.

```javascript
const car = {
  brand: 'Ford',
  color: 'white',
  year: 2020
}
console.log(car);     // { brand: 'Ford', color: 'white', year: 2020 }

car.brand = 'Audi';
car.color = 'black';
car.year = 2021;
console.log(car);     // { brand: 'Audi', color: 'black', year: 2021 }
```

Теперь создадим объект посложнее и будем использовать квадратные скобки для обращения к свойствам.

```javascript
const student = {
    firstName: 'Mike',
    lastName: 'Smith',
    address: {
        street: '20 Atlantic',
        city: 'Miami',
        state: 'Florida'
    }
}
console.log(student)   // {
                       //   firstName: 'Mike',
                       //   lastName: 'Smith',
                       //   address: { street: '20 Atlantic', city: 'Miami', state: 'Florida' }
                       // }

student['firstName'] = 'Jack'                   // используем квадратные скобки для обращения по ключу
student.address['street'] = '132 South Orange'  // используем точку и квадратные скобки для обращения по ключу
student['address']['city'] = 'Orlando'          // используем только квадратные скобки для обращения по ключу

console.log(student)   // {
                       //   firstName: 'Jack',
                       //   lastName: 'Smith',
                       //   address: { street: '132 South Orange', city: 'Orlando', state: 'Florida' }
                       // }
```



### Разница между `let` и `const`

Не зависимо, какое ключевое слово было использовано при создании объекта: `let` или `const`, свойства объекта можно изменять.

Потому что `объект` - это ссылочный тип данных, и при создании объекта сохраняется ссылка на него, и при изменении свойства ссылка меняться не будет.

Разница только будет в том случае, когда мы будем присваивать созданной переменной новый объект.

Например:

```javascript
const name = {
    firstName: 'John',
    lastName: 'Black',
}
name = {
    firstName: 'Alice',
    lastName: 'Black',
}

// в таком случае будет: `TypeError`
```
Ошибка будет из-за того, что мы создаем новый объект и записываем новую ссылку в переменную, которая была создана при помощи ключевого слова `const`.



### Функция суммирования значений объекта

Давайте напишем функцию `sumObject`, которая будет суммировать значения объекта.

```javascript
function sumObject(object){
    object.sum = object.num1 + object.num2;      // в свойство `sum` записываем результат суммирования
    return object;                               // возвращаем обновленный объект
}

console.log(sumObject({num1: 5, num2: 10, sum: 0}))         // { num1: 5, num2: 10, sum: 15 }
console.log(sumObject({num1: -123, num2: 746, sum: 0}))     // { num1: -123, num2: 746, sum: 623 }
```
