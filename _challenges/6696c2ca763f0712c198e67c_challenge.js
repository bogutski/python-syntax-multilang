// NAMEEN:
// NAMERU:Одинаковые ссылки на объекты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `isSameReference`.

Параметры функции:
* `obj1` – объект
* `obj2` – объект

Если `obj1` и `obj2` ссылаются на один и тот же объект, то функция должна вернуть `true`, иначе `false`.

Пример запуска функции:
```javascript
const obj = { a: 1 };
isSameReference(obj, obj); // true

const obj1 = { a: 1 };
const obj2 = { a: 1 };
isSameReference(obj1, obj2); // false

const obj1 = { a: 1 };
const obj2 = obj1;
isSameReference(obj1, obj2); // true
```

Вам помогут эти примеры:
```javascript
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 === obj2); // false

const obj1 = { a: 1 };
const obj2 = obj1;
console.log(obj1 === obj2); // true

const obj1 = { a: 1 };
const obj2 = obj1;
console.log(obj1 === obj2); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isSameReference(a, b) {
  return a === b;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function isSameReference', () => {
  expect(isSameReference).to.be.a('function');
});

it('isSameReference({ a: 1 }, { a: 1 }) // false', () => {
  expect(isSameReference({ a: 1 }, { a: 1 })).to.be.false;
});

it('isSameReference({}, {}) // false', () => {
  expect(isSameReference({}, {})).to.be.false;
});

it('const obj = { a: 1 }; isSameReference(obj, obj) // true', () => {
  const obj = { a: 1 };
  expect(isSameReference(obj, obj)).to.be.true;
});

it('const obj1 = { a: 1 }; const obj2 = { a: 1 }; isSameReference(obj1, obj2) // false', () => {
  const obj1 = { a: 1 };
  const obj2 = { a: 1 };
  expect(isSameReference(obj1, obj2)).to.be.false;
});

it('const obj1 = { a: 1 }; const obj2 = obj1; isSameReference(obj1, obj2) // true', () => {
  const obj1 = { a: 1 };
  const obj2 = obj1;
  expect(isSameReference(obj1, obj2)).to.be.true;
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
