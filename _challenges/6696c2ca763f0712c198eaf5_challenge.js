// NAMEEN:
// NAMERU:Цифры, равные своим индексам

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `strOfNum`, которая принимает строку, состоящую только из цифр.

Функция должна вернуть массив, состоящий из цифр, которые равны своим индексам в строке.

Например, для строки '0423' функция должна вернуть ['0', '2', '3']
* +str[0] === 0 - true
* +str[1] === 1 - false
* +str[2] === 2 - true
* +str[3] === 3 - true

Пример запуска функции:
```js
strOfNum('052446'); // [ '0', '2', '4' ]
strOfNum('012345'); // ['0', '1', '2', '3', '4', '5']
strOfNum('1234567890'); // []
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function strOfNum(str) {
  const result = [];
  for(let i = 0; i < str.length; i++) {
    if(+str[i] === i) result.push(str[i])
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function strOfNum', () => {
  expect(strOfNum).to.be.a('function');
});

it('strOfNum("052446") should return ["0", "2", "4"]', () => {
  expect(strOfNum("052446")).to.eql(["0", "2", "4"]);
});

it("strOfNum('5176436109') should return ['1', '4', '6', '9']", () => {
  expect(strOfNum('5176436109')).to.eql(['1', '4', '6', '9']);
});

it("strOfNum('9803451859') should return ['3', '4', '5', '9']", () => {
  expect(strOfNum('9803451859')).to.eql(['3', '4', '5', '9']);
});

it("strOfNum('1234567890') should return []", () => {
  expect(strOfNum('1234567890')).to.eql([]);
});

it("strOfNum('012345') should return ['0', '1', '2', '3', '4', '5']", () => {
  expect(strOfNum('012345')).to.eql(['0', '1', '2', '3', '4', '5']);
});

it("strOfNum('') should return []", () => {
  expect(strOfNum('')).to.eql([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
