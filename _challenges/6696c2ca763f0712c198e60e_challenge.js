// NAMEEN:
// NAMERU:Исправьте значения свойств объекта

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fixValues`, которая принимает объект с двумя свойствами:
* `name` - должно быть строкой (string)
* `age` - должно быть числом (number)

В объекте перепутаны значения свойств, например:
* {name: 1990, age: 'Mike'} - должно быть {name: 'Mike', age: 1990}

Функция должна возвращать новый объект с исправленными значениями свойств.


Пример запуска функции:
```javascript
fixValues({name: 1978, age: 'Tim'}) // {name: 'Tim', age: 1978}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fixValues(student) {
  let newObj = {};
  if (typeof student.name === 'string') newObj.name = student.name;
  if (typeof student.name === 'number') newObj.age = student.name;
  if (typeof student.age === 'string') newObj.name = student.age;
  if (typeof student.age === 'number') newObj.age = student.age;
  return newObj;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function fixValues', () => {
  expect(fixValues).to.be.a('function');
});

it('fixValues({ name: 1999, age: "Monica" }) should return { name: "Monica", age: 1999 }', () => {
  expect(fixValues({ name: 1999, age: "Monica" })).to.deep.equal({ name: "Monica", age: 1999 });
});

it('fixValues({ name: 2010, age: "Jack" }) should return { name: "Jack", age: 2010 }', () => {
  expect(fixValues({ name: 2010, age: "Jack" })).to.deep.equal({ name: "Jack", age: 2010 });
});

it('fixValues({ name: "John", age: 2000 }) should return { name: "John", age: 2000 }', () => {
  expect(fixValues({ name: "John", age: 2000 })).to.deep.equal({ name: "John", age: 2000 });
});

it('fixValues({ name: "Ken", age: 2011 }) should return { name: "Ken", age: 2011 }', () => {
  expect(fixValues({ name: "Ken", age: 2011 })).to.deep.equal({ name: "Ken", age: 2011 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
