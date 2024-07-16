Мы можем изменять и удалять свойства объекта. Для изменения свойства объекта мы можем просто обратиться к нему по имени и присвоить новое значение.

Например:

```javascript
const car = {
  make: "Toyota",
  model: "Sienna",
  year: 2078,
  price: 789987,
};

car.year = ""; // изменяем значение свойства car на пустую строку
console.log(car); // { make: "Toyota", model: "Sienna", year: "", price: 789987 }

car.year = undefined; // изменяем значение свойства car на undefined
console.log(car); // { make: "Toyota", model: "Sienna", year: undefined, price: 789987 }
```

В JavaScript для удаления свойства объекта можно использовать оператор delete. Его синтаксис выглядит следующим образом:

```javascript
delete objectName.propertyName;
```

где `objectName` – это имя объекта, а `propertyName` – имя свойства, которое нужно удалить.

Важно заметить, что при удалении свойства объекта оно полностью удаляется из объекта и больше не доступно для использования.

Рассмотрим пример:

```javascript
let car = {
  make: "Toyota",
  model: "Sienna",
  year: 2078,
  price: 789987,
  motor: {
    v: 4,
    id: 31231
  }
};

delete car.year; // удаляем свойство year

console.log(car); // { make: "Toyota", model: "Sienna", price: 789987, 
                  //   motor: { v: 4, id: 31231} }
console.log(car.year); // undefined

delete car.motor.id; // удаляем свойство motor.id
console.log(car); // { make: "Toyota", model: "Sienna", price: 789987, motor: { v: 4 } }

delete car.motor; // удаляем свойство motor
console.log(car); // { make: "Toyota", model: "Sienna", price: 789987 }
```

Напишем функцию для удаления определенного свойства у объекта:

```js
function cleanObject(obj, targetKey) {
  delete obj[targetKey];
  return obj;
}

console.log(cleanObject({ name: "Bob", age: 546 }, "age")); // { name: 'Bob' }
```

Мы также можем присваивать свойству переменные:

```js
car = {
  id: 24234,
  year: 2017,
};

const key = 'year'

car[key] = car.id;

console.log(car); //Вернет { id: 24234, year: 24234 }
```

Чтобы поменять местами значения двух свойств, нам надо ввести дополнительное свойство, потом поменять местами значения, и удалить введенное свойство.
Напишем алгоритм действий для того что бы поменять местами значения двух разных свойств объекта:

```js
car = {
  id: 24234,
  vin: 3432314234603,
};

car.id_ = car.id;
car.id = car.vin;
car.vin = car.id_;
delete car.id_;

console.log(car); //Вернет { id: 3432314234603, vin: 24234 }
```
