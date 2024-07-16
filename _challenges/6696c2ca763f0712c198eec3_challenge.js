// NAMEEN:
// NAMERU:Перевод строки чисел в строку слов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `numToWord` принимает строку чисел от `0` до `99` и возвращает строку, в которой каждое число заменено на слово, соответствующее этому числу.

Например, строка `1, 3, 15, 74` превратится в строку `one, three, fifteen, seventy-four`.

В строке числа разделены запятыми и пробелами.

Пустой строки не будет.

Разберите код ниже и добавьте что функция возвращает, можно использовать метод массива.

Постарайтесь переписать код самостоятельно.


Примеры запуска функции:
```javascript
numToWord('1, 3, 7, 9');          // 'one, three, seven, nine'
numToWord('11, 12, 16, 18');      // 'eleven, twelve, sixteen, eighteen'
numToWord('23, 46, 72, 94');      // 'twenty-three, forty-six, seventy-two, ninety-four'
numToWord('65, 0, 41, 13, 6, 7'); // 'sixty-five, zero, forty-one, thirteen, six, seven'

```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function numToWord(str){
  const objFrom0to9 = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
  const objFrom11to19 = {11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
  const objFrom10to90 = {1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}

  let newArr = [];
  const arrayOfNums = str.split(', ');                     // split string into array of numbers

  for(let i = 0; i < arrayOfNums.length; i++){             // loop through new array

    const num = arrayOfNums[i]                             // assign current number to `num`
    let word = '';                                         // word to push to new array

    if(num.length === 1) word = objFrom0to9[num];          // if number has 1 digit, take it from `objFrom0to9`

    else if(num[1] === '0') word = objFrom10to90[num[0]];  // if number has 2 digits and the second one is 0, take it from `objFrom10to90`

    else if(num[0] === '1') word = objFrom11to19[num];     // if number has 2 digits and the first one is 1, take it from `objFrom11to19`

    else {                                                 // if number has 2 digits and first one is not 1 and second one is not 0
      const part1 = objFrom10to90[num[0]];                 // take first digit from `objFrom10to90`
      const part2 = objFrom0to9[num[1]];                   // take second digit from `objFrom0to9`
      word = part1 + '-' + part2;                          // combine them with `-` in between
    }

    newArr.push(word)                                      // push `word` to `newArr`
  }

  <code here>                                              // join `newArr` into string with `, ` in between and return it
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numToWord(str){
  const objFrom0to9 = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', }
  const objFrom11to19 = { 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', }
  const objFrom10to90 = { 1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety', }

  let newArr = [];
  const arrayOfNums = str.split(', ');

  for(let i = 0; i < arrayOfNums.length; i++){

    const num = arrayOfNums[i];
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

  return newArr.join(', ');
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function numToWord', () => {
  expect(numToWord).to.be.a('function');
});

it("numToWord('0, 2, 6, 9, 11, 12, 16, 19, 21, 46, 78, 99') should return 'zero, two, six, nine, eleven, twelve, sixteen, nineteen, twenty-one, forty-six, seventy-eight, ninety-nine'", () => {
  expect(numToWord('0, 2, 6, 9, 11, 12, 16, 19, 21, 46, 78, 99')).to.deep.equal('zero, two, six, nine, eleven, twelve, sixteen, nineteen, twenty-one, forty-six, seventy-eight, ninety-nine');
});

it("numToWord('9, 8, 7, 6, 5, 4, 3, 2, 1, 0') should return 'nine, eight, seven, six, five, four, three, two, one, zero'", () => {
  expect(numToWord('9, 8, 7, 6, 5, 4, 3, 2, 1, 0')).to.deep.equal('nine, eight, seven, six, five, four, three, two, one, zero');
});

it("numToWord('19, 15, 10, 13, 14, 17, 18, 11, 12, 16') should return 'nineteen, fifteen, ten, thirteen, fourteen, seventeen, eighteen, eleven, twelve, sixteen'", () => {
  expect(numToWord('19, 15, 10, 13, 14, 17, 18, 11, 12, 16')).to.deep.equal('nineteen, fifteen, ten, thirteen, fourteen, seventeen, eighteen, eleven, twelve, sixteen');
});

it("numToWord('98, 81, 76, 64, 52, 43, 29, 17') should return 'ninety-eight, eighty-one, seventy-six, sixty-four, fifty-two, forty-three, twenty-nine, seventeen'", () => {
  expect(numToWord('98, 81, 76, 64, 52, 43, 29, 17')).to.deep.equal('ninety-eight, eighty-one, seventy-six, sixty-four, fifty-two, forty-three, twenty-nine, seventeen');
});

it("numToWord('10, 11, 27, 3, 44, 53, 6, 7, 89, 9') should return 'ten, eleven, twenty-seven, three, forty-four, fifty-three, six, seven, eighty-nine, nine'", () => {
  expect(numToWord('10, 11, 27, 3, 44, 53, 6, 7, 89, 9')).to.deep.equal('ten, eleven, twenty-seven, three, forty-four, fifty-three, six, seven, eighty-nine, nine');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
