// NAMEEN:
// NAMERU:Проверка вложенных объектов на наличие ключа со значением определенного типа

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `areAllNestedObjectsContainKeyWithType`, которая принимает массив объектов, строку (ключ) и строку (тип значения).

Функция должна возвращать `true`, если все объекты содержат указанный ключ со значением указанного типа (включая вложенные объекты), и `false` в противном случае.

Объекты будут одномерные и двухмерные.


Примеры запуска функции:
```javascript
areAllNestedObjectsContainKeyWithType([{a: {b: '1'}}, {a: {b: 2}}, {a: {b: 3}}], 'b', 'number'); // false
areAllNestedObjectsContainKeyWithType([{b: 'hello', y: 'abc'}, {c: 'world', y: 85}], 'y', 'string'); // false
areAllNestedObjectsContainKeyWithType([{a: 5, c: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}, {b: 10}], 'b', 'number'); // true
areAllNestedObjectsContainKeyWithType([{a: {b: 'hello', k: '25'}}, {a: 52, m: {k: 'world'}}, {k: 'JS'}], 'k', 'string'); // true
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function areAllNestedObjectsContainKeyWithType(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function areAllNestedObjectsContainKeyWithType(arr, key, type) {
  return arr.every(obj => {
    const properties = Object.keys(obj);

    if(properties.includes(key)) return typeof obj[key] === type
    else {
      for(let el of properties){
        if(typeof obj[el] === 'object' && obj[el].hasOwnProperty(key)) return typeof obj[el][key] === type;
      }
    }

    return false
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function areAllNestedObjectsContainKeyWithType', () => {
  expect(areAllNestedObjectsContainKeyWithType).to.be.a('function');
});

it('areAllNestedObjectsContainKeyWithType([{a: 5, c: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}, {b: 10}], "b", "number") should return true', function() {
  expect(areAllNestedObjectsContainKeyWithType([{a: 5, c: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}, {b: 10}], "b", "number")).to.equal(true);
});

it('areAllNestedObjectsContainKeyWithType([{a: {b: "1"}}, {a: {b: 2}}, {a: {b: 3}}], "b", "number") should return false', function() {
  expect(areAllNestedObjectsContainKeyWithType([{a: {b: "1"}}, {a: {b: 2}}, {a: {b: 3}}], "b", "number")).to.equal(false);
});

it('areAllNestedObjectsContainKeyWithType([{a: {b: "hello", k: "25"}}, {a: 52, m: {k: "world"}}, {k: "JS"}], "k", "string") should return true', function() {
  expect(areAllNestedObjectsContainKeyWithType([{a: {b: "hello", k: "25"}}, {a: 52, m: {k: "world"}}, {k: "JS"}], "k", "string")).to.equal(true);
});

it('areAllNestedObjectsContainKeyWithType([{b: "hello", y: "abc"}, {c: "world", y: 85}], "y", "string") should return false', function() {
  expect(areAllNestedObjectsContainKeyWithType([{b: "hello", y: "abc"}, {c: "world", y: 85}], "y", "string")).to.equal(false);
});

it('areAllNestedObjectsContainKeyWithType([{a: {x: true}}, {a: {x: false}}, {a: {x: true}}], "x", "boolean") should return true', function() {
  expect(areAllNestedObjectsContainKeyWithType([{a: {x: true}}, {a: {x: false}}, {a: {x: true}}], "x", "boolean")).to.equal(true);
});

it('areAllNestedObjectsContainKeyWithType([{a: {x: true}}, {a: {x: "false"}}, {a: {x: true}}], "x", "boolean") should return false', function() {
  expect(areAllNestedObjectsContainKeyWithType([{a: {x: true}}, {a: {x: "false"}}, {a: {x: true}}], "x", "boolean")).to.equal(false);
});

it('areAllNestedObjectsContainKeyWithType([{a: {y: 10}}, {a: {y: 20}}, {a: {y: 30}}], "y", "number") should return true', function() {
  expect(areAllNestedObjectsContainKeyWithType([{a: {y: 10}}, {a: {y: 20}}, {a: {y: 30}}], "y", "number")).to.equal(true);
});

it('areAllNestedObjectsContainKeyWithType([{a: {y: 10}}, {a: {y: "20"}}, {a: {y: 30}}], "y", "number") should return false', function() {
  expect(areAllNestedObjectsContainKeyWithType([{a: {y: 10}}, {a: {y: "20"}}, {a: {y: 30}}], "y", "number")).to.equal(false);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
