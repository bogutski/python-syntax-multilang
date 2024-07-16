// NAMEEN:
// NAMERU:Разделение по четности и нечетности индексов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `oddAndEven`, которая принимает строку и возвращает массив из двух строк: `[odd, even]`.

Функция должна разделять по четности и нечетности индексов символов в строке.

Пример:
```javascript
let str = 'abc';
// 'a' - 0 индекс, четный
// 'b' - 1 индекс, нечетный
// 'c' - 2 индекс, четный
```

Примеры запуска функции:
```javascript
oddAndEven('0123456'); // ['135', '0246']
oddAndEven('abcdef'); // ['bdf', 'ace']
oddAndEven(''); // ['', '']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function oddAndEven(string){
  let odd = '';
  let even = '';
  for (let i = 0; i < string.length; i++){
    if (i % 2 === 0) even += string[i];
    else odd += string[i];
  }
  return [odd, even];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function oddAndEven', () => {
  expect(oddAndEven).to.be.a('function');
});

it("oddAndEven('0123456') should return ['135', '0246']", () => {
  expect(oddAndEven('0123456')).to.deep.equal(['135', '0246']);
});

it("oddAndEven('abcdef') should return ['bdf', 'ace']", () => {
  expect(oddAndEven('abcdef')).to.deep.equal(['bdf', 'ace']);
});

it("oddAndEven('') should return ['', '']", () => {
  expect(oddAndEven('')).to.deep.equal(['', '']);
});

it("oddAndEven('a') should return ['', 'a']", () => {
  expect(oddAndEven('a')).to.deep.equal(['', 'a']);
});

it("oddAndEven('ab') should return ['b', 'a']", () => {
  expect(oddAndEven('ab')).to.deep.equal(['b', 'a']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
