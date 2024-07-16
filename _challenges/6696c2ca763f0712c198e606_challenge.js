// NAMEEN:
// NAMERU:Добавьте свойство в объект

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `addProperty`, которая принимает три параметра:
* `obj` - объект
* `key` - ключ
* `value` - значение

Функция должна добавить в объект новое свойство с ключом `key` и значением `value`.

Функция должна вернуть обновленный объект.

Пример запуска функции:
```javascript
addProperty({ name: "Mike" }, "age", 45);      // { name: "Mike", age: 45 }
addProperty({ car: "BMW" }, "year", 2020);     // { car: "BMW", year: 2020 }
```

Аналогичный пример:
```javascript
function addField(car, fieldKey, fieldValue) {
  car[fieldKey] = fieldValue;
  return car;
}

console.log(addField({ car: "BMW" }, "year", 2020)); // { car: "BMW", year: 2020 }
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addProperty(obj, key, value) {
  // obj { name: 'Mike' }, key 'age', value 45
  obj[key] = value;
  return obj;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addProperty', () => {
  expect(addProperty).to.be.a('function');
});

it('Check if function addProperty returns object', () => {
  expect(addProperty({ name: 'Mike' }, 'age', 45)).to.be.a('object');
});

it('addProperty({ name: "John" }, "age", 30) return { name: "John", age: 30 }', () => {
    expect(addProperty({ name: 'John' }, 'age', 30)).to.eql({ name: 'John', age: 30 });
});

it('addProperty({ car: "Ford" }, "color", "blue") return { car: "Ford", "color": "blue" }', () => {
    expect(addProperty({ car: 'Ford' }, 'color', 'blue')).to.eql({ car: 'Ford', color: 'blue' });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
