// NAMEEN:
// NAMERU:Перевод чисел от 20 до 99 в слова

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `numToWord`, которая принимает массив чисел от `20` до `99``.

Функция должна вернуть массив строк, где каждая строка - это перевод числа в слова.


Примеры запуска функции:
```javascript
numToWord([20, 30, 40]);             // ['twenty', 'thirty', 'forty']
numToWord([25, 97, 46, 73]);         // ['twenty-five', 'ninety-seven', 'forty-six', 'seventy-three']
numToWord([50, 47, 73, 34, 63, 88]); // ['fifty', 'forty-seven', 'seventy-three', 'thirty-four', 'sixty-three', 'eighty-eight']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function numToWord(arr){
  const objFrom1to9 = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
  const objFrom20to90 = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8:'eighty', 9: 'ninety'}

  code here...

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numToWord(arr){
  const objFrom1to9 = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
  const objFrom20to90 = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8:'eighty', 9: 'ninety'}
  const newArr = [];

  for(let i = 0; i < arr.length; i++){
    const str = arr[i].toString();
    let word = '';

    if(str[1] === '0') word = objFrom20to90[str[0]];
    else {
      const part1 = objFrom20to90[str[0]];
      const part2 = objFrom1to9[str[1]];
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

it("numToWord([20, 30, 40, 50, 60, 70, 80, 90]) should return ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']", () => {
  expect(numToWord([20, 30, 40, 50, 60, 70, 80, 90])).to.deep.equal(['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']);
});

it("numToWord([91, 34, 62, 84, 75, 29, 43, 53]) should return ['ninety-one', 'thirty-four', 'sixty-two', 'eighty-four', 'seventy-five', 'twenty-nine', 'forty-three', 'fifty-three']", () => {
  expect(numToWord([91, 34, 62, 84, 75, 29, 43, 53])).to.deep.equal(['ninety-one', 'thirty-four', 'sixty-two', 'eighty-four', 'seventy-five', 'twenty-nine', 'forty-three', 'fifty-three']);
});

it("numToWord([21, 39, 48, 57, 66, 75, 84, 93]) should return ['twenty-one', 'thirty-nine', 'forty-eight', 'fifty-seven', 'sixty-six', 'seventy-five', 'eighty-four', 'ninety-three']", () => {
  expect(numToWord([21, 39, 48, 57, 66, 75, 84, 93])).to.deep.equal(['twenty-one', 'thirty-nine', 'forty-eight', 'fifty-seven', 'sixty-six', 'seventy-five', 'eighty-four', 'ninety-three']);
});

it("numToWord([99, 57, 43, 77, 65, 36, 56, 21, 72, 34, 82]) should return ['ninety-nine', 'fifty-seven', 'forty-three', 'seventy-seven', 'sixty-five', 'thirty-six', 'fifty-six', 'twenty-one', 'seventy-two', 'thirty-four', 'eighty-two']", () => {
  expect(numToWord([99, 57, 43, 77, 65, 36, 56, 21, 72, 34, 82])).to.deep.equal(['ninety-nine', 'fifty-seven', 'forty-three', 'seventy-seven', 'sixty-five', 'thirty-six', 'fifty-six', 'twenty-one', 'seventy-two', 'thirty-four', 'eighty-two']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
