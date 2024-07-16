// NAMEEN:
// NAMERU:Поменяй свойства в объекте

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `person`, которая принимает параметры:
* `obj` – объект,
* `newAge` – число,
* `newCity` – строка.

Объект должен иметь свойства:
* `name` – имя человека, строка,
* `age` – возраст, число,
* `city` – город, строка

Функция должна изменить значения свойств в объекте `obj`:
* свойству `age` присвоить значение `newAge`,
* свойству `city` присвоить значение `newCity`.

Функция должна вернуть объект с новыми значениями.

Пример запуска функции:
```javascript
person({ name: 'John', age: 20, city: 'London' }, 30,'New York') // { name: 'John', age: 30, city: 'New York' }
person({ name: 'Pavel', age: 10, city: 'Grodno' }, 13,'Boston') // { name: 'Pavel', age: 13, city: 'Boston' }
```

Похожий пример:
```javascript
function changeCarRegion(car, newLicensePlate, newRegion) {
  car.lenLicensePlate = newLicensePlate;
  car.region = newRegion;
  return car;
}
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function person(obj, newAge, newCity) {
  obj.age = newAge;
  obj.city = newCity;
  return obj;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function person', () => {
  expect(person).to.be.a('function');
});

it('person({ name: "John", age: 20, city: "London" }, 30, "New York") should return { name: "John", age: 30, city: "New York" }', () => {
  expect(person({ name: 'John', age: 20, city: 'London' }, 30, 'New York')).to.deep.equal(
    { name: 'John', age: 30, city: 'New York' },
  );
});

it('person({ name: "Pavel", age: 10, city: "Grodno" }, 13, "Boston") should not return { name: "Pavel", age: 13, city: "Boston" }', () => {
  expect(person({ name: 'Pavel', age: 10, city: 'Grodno' }, 13, 'Boston')).to.deep.equal({
    name: 'Pavel',
    age: 13,
    city: 'Boston',
  });
});

it('person({ name: "Maria", age: 56, city: "Gomel" }, 39, "Andover") should return { name: "Maria", age: 39, city: "Andover" }', () => {
  expect(person({ name: 'Maria', age: 56, city: 'Gomel' }, 39, 'Andover')).to.deep.equal({
    name: 'Maria',
    age: 39,
    city: 'Andover',
  });
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
