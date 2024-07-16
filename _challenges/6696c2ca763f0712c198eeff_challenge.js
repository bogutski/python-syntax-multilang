// NAMEEN:
// NAMERU:Найти все числа и вернуть среднее арифметическое значение

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `average`, которая принимает строку из чисел, букв и слов.

Все элементы всегда разделены одним пробелом.

Функция должна найти все числовые значения и вернуть среднее арифметическое этих чисел.

Если строка пустая или чисел не будет найдено, то функция должна вернуть строку 'No data'.


Пример запуска функции:
```javascript
average('1a 2 3a 4 5w') // 3
average('10 20 30 40')  // 25
average('a bb ccc')     // 'No data'
average('')             // 'No data'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function average(str){
  if(!str) return 'No data';
  let arr = str.split(' ');
  let sum = 0;
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(!isNaN(Number(arr[i]))){
      sum += Number(arr[i]);
      count++;}
  }
  return count ? sum / count : 'No data';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function average', () => {
  expect(average).to.be.a('function');
});

it("average('1 2 3 4 5') should return 3", () => {
  expect(average('1 2 3 4 5')).to.equal(3);
});

it("average('0 1 2 3 4 5 6 7 8 9 10') should return 5", () => {
  expect(average('0 1 2 3 4 5 6 7 8 9 10')).to.equal(5);
});

it("average('a b c 5 55 105 a s d') should return 55", () => {
  expect(average('a b c 5 55 105 a s d')).to.equal(55);
});

it("average('text 1000 more text 2000') should return 1500", () => {
  expect(average('text 1000 more text 2000')).to.equal(1500);
});

it("average('0 0 0') should return 0", () => {
  expect(average('0 0 0')).to.equal(0);
});

it("average('a b c') should return 'No data'", () => {
  expect(average('a b c')).to.equal('No data');
});

it("average('') should return 'No data'", () => {
  expect(average('')).to.equal('No data');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
