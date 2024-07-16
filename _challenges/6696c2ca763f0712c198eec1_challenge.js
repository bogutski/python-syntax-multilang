// NAMEEN:
// NAMERU:Перевод чисел в слова с помощью объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `numToWord` принимает массив чисел от `0` до `10` включительно и от `20` до `99`` включительно и возвращает массив строковых значений, соответствующих этим числам.

Разберите код функции и перепишите его самостоятельно несколько раз.

Добавьте условие в цикл, чтобы функция работала правильно.


Примеры запуска функции:
```javascript
numToWord([10, 20, 30]); // ['ten', 'twenty', 'thirty']
numToWord([25, 97, 46, 73]); // ['twenty-five', 'ninety-seven', 'forty-six', 'seventy-three']
numToWord([0, 47, 3, 8, 63, 8]); // ['zero', 'forty-seven', 'three', 'eight', 'sixty-three', 'eight']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function numToWord(arr){
  const objFrom0to9 = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
  const objFrom10to90 = {1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8:'eighty', 9: 'ninety'}
  const newArr = [];

  for(<code here...>){
    const str = arr[i].toString();
    let word = '';

    if(str.length === 1) word = objFrom0to9[str];         // if length of string is 1, it's a number from 0 to 9
    else {                                                // else it's a number 10 or from 20 to 99
      if(str[1] === '0') word = objFrom10to90[str[0]];    // if second digit is 0, then using `objFrom10to90` object only
      else {                                              // else using both objects
        const part1 = objFrom10to90[str[0]];              // first digit
        const part2 = objFrom0to9[str[1]];                // second digit
        word = part1 + '-' + part2;                       // combine them with '-'
      }
    }

    newArr.push(word);
  }
  return newArr;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numToWord(arr){
  const objFrom0to9 = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
  const objFrom10to90 = {1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8:'eighty', 9: 'ninety'}
  const newArr = [];

  for(let i = 0; i < arr.length; i++){
    const str = arr[i].toString();
    let word = '';

    if(str.length === 1) word = objFrom0to9[str];
    else {
      if(str[1] === '0') word = objFrom10to90[str[0]];
      else {
        const part1 = objFrom10to90[str[0]];
        const part2 = objFrom0to9[str[1]];
        word = part1 + '-' + part2;
      }
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

it("numToWord([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) should return ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']", () => {
  expect(numToWord([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.deep.equal(['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']);
});

it("numToWord([10, 20, 30, 40, 50, 60, 70, 80, 90]) should return ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']", () => {
  expect(numToWord([10, 20, 30, 40, 50, 60, 70, 80, 90])).to.deep.equal(['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']);
});

it("numToWord([21, 39, 48, 57, 66, 75, 84, 93]) should return ['twenty-one', 'thirty-nine', 'forty-eight', 'fifty-seven', 'sixty-six', 'seventy-five', 'eighty-four', 'ninety-three']", () => {
  expect(numToWord([21, 39, 48, 57, 66, 75, 84, 93])).to.deep.equal(['twenty-one', 'thirty-nine', 'forty-eight', 'fifty-seven', 'sixty-six', 'seventy-five', 'eighty-four', 'ninety-three']);
});

it("numToWord([99, 5, 43, 77, 1, 36, 56, 21, 7, 3, 82]) should return ['ninety-nine', 'five', 'forty-three', 'seventy-seven', 'one', 'thirty-six', 'fifty-six', 'twenty-one', 'seven', 'three', 'eighty-two']", () => {
  expect(numToWord([99, 5, 43, 77, 1, 36, 56, 21, 7, 3, 82])).to.deep.equal(['ninety-nine', 'five', 'forty-three', 'seventy-seven', 'one', 'thirty-six', 'fifty-six', 'twenty-one', 'seven', 'three', 'eighty-two']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
