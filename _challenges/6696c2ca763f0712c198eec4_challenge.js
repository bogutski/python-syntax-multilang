// NAMEEN:
// NAMERU:Перевод чисел от 0 до 99 в слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numToWord`, которая принимает массив чисел от `0` до `99` и возвращает новый массив, в котором каждое число заменено на слово, соответствующее этому числу.

Например, строка `[0, 1, 23, 89]` превратится в массив `['zero', 'one', 'twenty-three', 'eighty-nine']`.

Если массив пустой, то функция должна вернуть строку `'Array is empty'`.


Примеры запуска функции:
```javascript
numToWord([1, 3, 7, 9]);          // ['one', 'three', 'seven', 'nine']
numToWord([11, 12, 16, 18]);      // ['eleven', 'twelve', 'sixteen', 'eighteen']
numToWord([23, 46, 72, 94]);      // ['twenty-three', 'forty-six', 'seventy-two', 'ninety-four']
numToWord([65, 0, 41, 13, 6, 7]); // ['sixty-five', 'zero', 'forty-one', 'thirteen', 'six', 'seven']
numToWord([]);                    // 'Array is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function numToWord(arr){
  const objFrom0to9 = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
  const objFrom11to19 = {11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
  const objFrom10to90 = {1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}

  <code here...>

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numToWord(arr){
  const objFrom0to9 = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', }
  const objFrom11to19 = { 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', }
  const objFrom10to90 = { 1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety', }

  if(!arr.length) return 'Array is empty';
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    const num = arr[i].toString();
    let word = '';

    if(num.length === 1) word = objFrom0to9[num];
    else if(num[1] === '0') word = objFrom10to90[num[0]];
    else if(num[0] === '1') word = objFrom11to19[num];
    else {
      const part1 = objFrom10to90[num[0]];
      const part2 = objFrom0to9[num[1]];
      word = part1 + '-' + part2;
    }

    newArr.push(word);
  }

  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numToWord', () => {
  expect(numToWord).to.be.a('function');
});

it("numToWord([0, 2, 6, 9, 11, 12, 16, 19, 21, 46, 78, 99]) should return ['zero', 'two', 'six', 'nine', 'eleven', 'twelve', 'sixteen', 'nineteen', 'twenty-one', 'forty-six', 'seventy-eight', 'ninety-nine']", () => {
  expect(numToWord([0, 2, 6, 9, 11, 12, 16, 19, 21, 46, 78, 99])).to.deep.equal(['zero', 'two', 'six', 'nine', 'eleven', 'twelve', 'sixteen', 'nineteen', 'twenty-one', 'forty-six', 'seventy-eight', 'ninety-nine']);
});

it("numToWord([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) should return ['nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one', 'zero']", () => {
  expect(numToWord([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).to.deep.equal(['nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one', 'zero']);
});

it("numToWord([19, 15, 10, 13, 14, 17, 18, 11, 12, 16]) should return ['nineteen', 'fifteen', 'ten', 'thirteen', 'fourteen', 'seventeen', 'eighteen', 'eleven', 'twelve', 'sixteen']", () => {
  expect(numToWord([19, 15, 10, 13, 14, 17, 18, 11, 12, 16])).to.deep.equal(['nineteen', 'fifteen', 'ten', 'thirteen', 'fourteen', 'seventeen', 'eighteen', 'eleven', 'twelve', 'sixteen']);
});

it("numToWord([98, 81, 76, 64, 52, 43, 29, 17]) should return ['ninety-eight', 'eighty-one', 'seventy-six', 'sixty-four', 'fifty-two', 'forty-three', 'twenty-nine', 'seventeen']", () => {
  expect(numToWord([98, 81, 76, 64, 52, 43, 29, 17])).to.deep.equal(['ninety-eight', 'eighty-one', 'seventy-six', 'sixty-four', 'fifty-two', 'forty-three', 'twenty-nine', 'seventeen']);
});

it("numToWord([10, 11, 27, 3, 44, 53, 6, 7, 89, 9]) should return ['ten', 'eleven', 'twenty-seven', 'three', 'forty-four', 'fifty-three', 'six', 'seven', 'eighty-nine', 'nine']", () => {
  expect(numToWord([10, 11, 27, 3, 44, 53, 6, 7, 89, 9])).to.deep.equal(['ten', 'eleven', 'twenty-seven', 'three', 'forty-four', 'fifty-three', 'six', 'seven', 'eighty-nine', 'nine']);
});

it("numToWord([99]) should return ['ninety-nine']", () => {
  expect(numToWord([99])).to.deep.equal(['ninety-nine']);
});

it("numToWord([]) should return 'Array is empty'", () => {
  expect(numToWord([])).to.equal('Array is empty');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
