// NAMEEN:
// NAMERU:Удвоить цифры в массиве строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `doubleNumbers` принимает массив строк.

Верните массив, в котором все цифры в строках умножены на 2. Если элемент не число, то оставьте его как есть.

Умножать стоит цифры от 0 до 9.

Исправьте ошибки в коде, чтобы он работал правильно.

Ошибок в цикле нет. Проанализируйте код и попробуйте повторить.

Пример запуска функции:
```javascript
doubleNumbers(["hello", "hello 123", "0234"]) // ["hello", "hello 246", "0468"]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function doubleNumbers([arr]) {
  const newArr = [empty];
  const numbers = '123456789';
  for (let i = 0; i < arr.length; i++) {
    let str =''
    for(let j = 0; j < arr[i].length; j++) {
      if (numbers.includes(arr[i][j])) str += +arr[i][j] * 2;
      else str +=arr[i][j]
    }
    newArr.push(str)
  }
  return newArr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function doubleNumbers(arr) {
  const newArr = []
  const numbers = '123456789'
  for (let i = 0; i < arr.length; i++) {
    let str = ''
    for (let j = 0; j < arr[i].length; j++) {
      if (numbers.includes(arr[i][j])) str += +arr[i][j] * 2;
      else str += arr[i][j]
    }
    newArr.push(str)
  }
  return newArr;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function doubleNumbers', () => {
  expect(doubleNumbers).to.be.a('function');
});

it('doubleNumbers(["hello", "hello 123", "0234"]) should return ["hello", "hello 246", "0468"]]', () => {
  expect(doubleNumbers(["hello", "hello 123", "0234"])).to.deep.equal(["hello", "hello 246", "0468"]);
});

it('doubleNumbers(["a1b2c3", "abcde", "12345"]) should return ["a2b4c6", "abcde", "246810"]]', () => {
  expect(doubleNumbers(["a1b2c3", "abcde", "12345"])).to.deep.equal(["a2b4c6", "abcde", "246810"]);
});

it('doubleNumbers(["abcde"]) should return ["abcde"]', () => {
  expect(doubleNumbers(["abcde"])).to.deep.equal(["abcde"]);
});

it('doubleNumbers(["12345"]) should return ["246810"]', () => {
  expect(doubleNumbers(["12345"])).to.deep.equal(["246810"]);
});

it('doubleNumbers([""]) should return [""]', () => {
  expect(doubleNumbers([""])).to.deep.equal([""]);
});

it('doubleNumbers(["alice5943", "", "999"]) should return ["alice101886", "", "181818"]', () => {
  expect(doubleNumbers(["alice5943", "", "999"])).to.deep.equal(["alice101886", "", "181818"]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
