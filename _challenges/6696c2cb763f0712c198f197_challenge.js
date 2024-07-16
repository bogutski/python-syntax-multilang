// NAMEEN:
// NAMERU:Проверка массива на симметричность с использованием join

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isArraySymmetrical`, которая принимает массив строк.

Функция должна вернуть `true`, если массив является симметричным, и `false` в противном случае.

В этой задаче нужно следовать следующим шагам:
* Проверить, что массив не пустой, иначе вернуть строку `'Array is empty'`
* Перевести массив в строку, для этого воспользуйтесь методом `join`
* Привести строку к нижнему регистру, для этого воспользуйтесь методом `toLowerCase`
* Создайте цикл, который будет проверять, что первый символ равен последнему, второй предпоследнему и т.д.
  Цикл должен проходить до половины строки и если элементы равны, то возвращать `true`, иначе `false`


Примеры запуска функции:
```javascript
isArraySymmetrical(['A', 'BB, 'C', 'bb', 'a']);         // true
isArraySymmetrical(['true', 'aAa', 'EURT']);            // true
isArraySymmetrical(['TRUE', 'OR', 'be', 'ro', 'eurt']); // false
isArraySymmetrical(['123', '555', '123']);              // false
isArraySymmetrical([]);                                 // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isArraySymmetrical(arr) {
  if(!arr.length) return 'Array is empty';
  const str = arr.join('').toLowerCase();
  for(let i = 0; i < str.length / 2; i++) {
    if(str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isArraySymmetrical', () => {
  expect(isArraySymmetrical).to.be.a('function');
});

it("Function isArraySymmetrical does not include 'reverse' method", () => {
  expect(isArraySymmetrical.toString()).to.not.include('reverse');
});

it("Function isArraySymmetrical includes 'join' method", () => {
  expect(isArraySymmetrical.toString()).to.include('join');
});

it("isArraySymmetrical(['A', 'b', 'c', 'b', 'a']) should return true", () => {
  expect(isArraySymmetrical(['A', 'b', 'c', 'b', 'a'])).to.be.true;
});

it("isArraySymmetrical(['test', 'SHOULD', 'be', 'false']) should return false", () => {
  expect(isArraySymmetrical(['test', 'SHOULD', 'be', 'false'])).to.be.false;
});

it("isArraySymmetrical(['TRUE', 'OR', 'beEb', 'ro', 'eurt']) should return true", () => {
  expect(isArraySymmetrical(['TRUE', 'OR', 'beEb', 'ro', 'eurt'])).to.be.true;
});

it("isArraySymmetrical(['123', '555', '123']) should return false", () => {
  expect(isArraySymmetrical(['123', '555', '123'])).to.be.false;
});

it("isArraySymmetrical(['789', 'abc', 'cba', '987']) should return true", () => {
  expect(isArraySymmetrical(['789', 'abc', 'cba', '987'])).to.be.true;
});

it("isArraySymmetrical([]) should return 'Array is empty'", () => {
  expect(isArraySymmetrical([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
