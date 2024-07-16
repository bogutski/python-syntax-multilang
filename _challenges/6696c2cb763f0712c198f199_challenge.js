// NAMEEN:
// NAMERU:Удаление цифр и проверка на симметричность

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isArraySymmetrical`, которая принимает массив строк.

Функция должна вернуть `true`, если массив является симметричным, и `false` в противном случае.

В строках могут цифры, от `0` до `9` и буквы.

Перед проверкой на симметричность, нужно удалить все цифры из строк.

Эта задача, повторяет алгоритм прошлой задачи, но вместо пробелов, нужно удалять цифры.


Примеры запуска функции:
```javascript
isArraySymmetrical(['A8', 'B90B, 'C2', 'b4b', 'a55']);               // 'abbcbba' => true
isArraySymmetrical(['true', 'aAa', 'EURT', '789123']);               // 'trueaaaeurt' => true
isArraySymmetrical(['123TRUE', '5O6R9', '0b0e0', '79ro', '97eurt']); // 'trueorberoeurt' => false
isArraySymmetrical([]);                                              // 'Array is empty'
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
  let newStr = '';

  for(let i = 0; i < str.length; i++) {
    if(str[i] >= '0' && str[i] <= '9') continue;
    else newStr += str[i];
  }

  for(let i = 0; i < newStr.length / 2; i++) {
    if(newStr[i] !== newStr[newStr.length - i - 1]) return false;
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

it("isArraySymmetrical(['A42', 'b44', 'c', '74b', '90a']) should return true", () => {
  expect(isArraySymmetrical(['A42', 'b44', 'c', '74b', '90a'])).to.be.true;
});

it("isArraySymmetrical(['1te75st', 'S58H9OULD', 'be', 'false']) should return false", () => {
  expect(isArraySymmetrical(['1te75st', 'S58H9OULD', 'be', 'false'])).to.be.false;
});

it("isArraySymmetrical(['111TR5UE0', 'OR5', '1b2e3E4b5', '6r7o8', '9e0ur1t2']) should return true", () => {
  expect(isArraySymmetrical(['111TR5UE0', 'OR5', '1b2e3E4b5', '6r7o8', '9e0ur1t2'])).to.be.true;
});

it("isArraySymmetrical([' 12 ad3', '5fa5 5d', 'das1 23 ']) should return false", () => {
  expect(isArraySymmetrical([' 12 ad3', '5fa5 5d', 'das1 23 '])).to.be.false;
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
