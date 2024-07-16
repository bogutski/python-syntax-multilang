// NAMEEN:
// NAMERU:Записать значения из объекта в массив.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Не задумывались ли вы, что у массивов и объектов есть некоторые общие черты?

И массивы, и объекты - это сложные (ссылочные) типы, предназначенные для упорядоченного хранения наборов данных.

Каждый из них представляет собой коллекцию элементов и обеспечивает способ получения значений этих элементов.

Для получения значения элемента массива нужно знать его индекс - целочисленное значение.

Для получения значения элемента объекта, называемого свойством, нужно знать название этого свойства (ключ) - строковое значение.


Нужно написать функцию `objectToArray`, которая принимает один параметр - объект `obj`.

У объекта есть 4 свойства.

Названия свойств: `property1`, `property2`, `property3`, `property4`.

Все свойства присутствуют в объекте и могут принимать смешанные значения примитивных типов: `number`, `string`, `boolean`или `undefined`.

Функция должна создать массив `arr` и записать в него `значения` всех свойств объекта `obj`.

Зная названия свойств, можно получить их значения, используя синтаксис `.`

`<object_variable>.<property_name>`

Для заполнения массива используйте метод `push`

Возвращаемое значение - массив `arr`.

Пример:

```javascript
const obj = {
  property1: 111,
  property2: 'job description',
};
const arr = [];
arr.push(obj.property1);
arr.push(obj.property2);
console.log(arr);  // [111, "job description"]
```

Примеры запуска функции:

```javascript
objectToArray({property1: 1, property2: 2, property3: 3, property4: 4});                                  // [1, 2, 3, 4]
objectToArray({property1: false, property2: true, property3: true, property4: false});                    // [false, true, true, false]
objectToArray({property1: 'name', property2: 'description', property3: 'location', property4: 'salary'}); // ['name', 'description', 'location', 'salary']
objectToArray({property1: 111, property2: 'job description', property3: true, property4: undefined});     // [111, 'job description', true, undefined]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function objectToArray(obj) {
  const arr = [];
  arr.push(obj.property1);
  arr.push(obj.property2);
  arr.push(obj.property3);
  arr.push(obj.property4);
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function objectToArray', () => {
  expect(objectToArray).to.be.a('function');
});

it(`objectToArray({property1: -342, property2: 'description', property3: 20, property4: true }) should return [-342, 'description', 20, true]`, () => {
  expect(objectToArray({property1: -342, property2: 'description', property3: 20, property4: true })).to.eql([-342, 'description', 20, true]);
});
it(`objectToArray({property1: -1, property2: 0, property3: 30, property4: -14}) should return [-1, 0, 30, -14]`, () => {
  expect(objectToArray({property1: -1, property2: 0, property3: 30, property4: -14})).to.eql([-1, 0, 30, -14]);
});

it(`objectToArray({property1: 'name', property2: 'occupation', property3: 'location', property4: 'salary'}) should return ['name', 'occupation', 'location', 'salary']`, () => {
  expect(objectToArray({property1: 'name', property2: 'occupation', property3: 'location', property4: 'salary'})).to.eql(['name', 'occupation', 'location', 'salary']);
});

it(`objectToArray({property1: true, property2: 'false', property3: undefined, property4: false}) should return [true, 'false', undefined, false]`, () => {
  expect(objectToArray({property1: true, property2: 'false', property3: undefined, property4: false})).to.eql([true, 'false', undefined, false]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
