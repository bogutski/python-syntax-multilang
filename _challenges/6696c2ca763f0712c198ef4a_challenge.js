// NAMEEN:
// NAMERU:Исправить функцию по проверке типов элементов массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `checkTypes` принимает массив элементов трех типов: `number`, `string` и `boolean`.

* Если в массиве все элементы типа `number`, то функция должна вернуть их произведение.
* Если в массиве все элементы типа `string`, то функция должна вернуть их конкатенацию.
* Если в массиве все элементы типа `boolean`, то функция должна вернуть количество элементов типа `boolean`.
* Если в массиве встречаются разные типы, то функция должна вернуть строку `'There are different types in array'`.
* Если массив пустой, то функция должна вернуть строку `'There is nothing to do here :('`.

Постарайтесь разобрать каждую строчку функции и понять, как она работает.

Добавьте необходимый код, в местах пропуска.


Примеры запуска функции:
```javascript
checkTypes([1, 2, 3]);           // 6
checkTypes(['a', 'b', 'c']);     // 'abc'
checkTypes([true, false, true]); // 3
checkTypes([false, 100, true]);  // 'There are different types in array'
checkTypes([1, 'test', false]);  // 'There are different types in array'
checkTypes([]);                  // 'There is nothing to do here :('
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function checkTypes(arr){
  if (arr.length === 0) code here... ;

  let power = code here... ;
  let string = code here... ;
  let booleanCount = code here... ;

  for (let i = 0; i < arr.length; i++){

    if (typeof arr[i] === 'number' && string === '' && booleanCount === 0) power *= arr[i];
    else if (typeof arr[i] === 'string' && power === 1 && booleanCount === 0) string += arr[i];
    else if (typeof arr[i] === 'boolean' && power === 1 && string === '') booleanCount++;
    else return 'There are different types in array';
  }

  if (power !== 1) return power;
  else if (string !== '') return string;
  else return booleanCount;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkTypes(arr){
  if (arr.length === 0) return 'There is nothing to do here :(';

  let power = 1;
  let string = '';
  let booleanCount = 0;

  for (let i = 0; i < arr.length; i++){

    if (typeof arr[i] === 'number' && string === '' && booleanCount === 0) power *= arr[i];
    else if (typeof arr[i] === 'string' && power === 1 && booleanCount === 0) string += arr[i];
    else if (typeof arr[i] === 'boolean' && power === 1 && string === '') booleanCount++;
    else return 'There are different types in array';
  }

  if (power !== 1) return power;
  else if (string !== '') return string;
  else return booleanCount;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkTypes', () => {
  expect(checkTypes).to.be.a('function');
});

it("checkTypes([1, 2, 3]) should return 6", () => {
  expect(checkTypes([1, 2, 3])).to.equal(6);
});

it("checkTypes(['a', 'b', 'c']) should return 'abc'", () => {
  expect(checkTypes(['a', 'b', 'c'])).to.equal('abc');
});

it("checkTypes([true, false, true]) should return 3", () => {
  expect(checkTypes([true, false, true])).to.equal(3);
});

it("checkTypes([true, false, 'a']) should return 'There are different types in array'", () => {
  expect(checkTypes([true, false, 'a'])).to.equal('There are different types in array');
});

it("checkTypes([false, 55, true]) should return 'There are different types in array'", () => {
  expect(checkTypes([false, 55, true])).to.equal('There are different types in array');
});

it("checkTypes([1, 2, 3, 'test']) should return 'There are different types in array'", () => {
  expect(checkTypes([1, 2, 3, 'test'])).to.equal('There are different types in array');
});

it("checkTypes([1, 2, 3, 'a', 'b', 'c', true, false, true]) should return 'There are different types in array'", () => {
  expect(checkTypes([1, 2, 3, 'a', 'b', 'c', true, false, true])).to.equal('There are different types in array');
});

it("checkTypes([]) should return 'There is nothing to do here :('", () => {
  expect(checkTypes([])).to.equal('There is nothing to do here :(');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
