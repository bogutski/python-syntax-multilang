// NAMEEN:
// NAMERU:Заменить все запятые на пробелы

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `replaceCommas`, которая принимает строку.
Функция должна возвращать новую строку, в которой все запятые заменены на пробелы.

Для решения задачи используйте цикл `for`, не используйте методы строк.

Примеры запуска функции:
```
replaceCommas('1,2,3,4,5,6,7,8,9,0') // '1 2 3 4 5 6 7 8 9 0'
replaceCommas('red,white,orange,yellow') // 'red white orange yellow'
replaceCommas('1, 2,3') // '1  2 3'
replaceCommas('') // ''
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function replaceCommas(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ',') {
      result += ' ';
    } else {
      result += str[i];
    }
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function replaceCommas', () => {
  expect(replaceCommas).to.be.a('function');
});

it('Function replaceCommas should not contain indexOf()', () => {
  expect(replaceCommas.toString()).to.not.contain('.indexOf(');
});

it('Function replaceCommas should not contain split()', () => {
  expect(replaceCommas.toString()).to.not.contain('.split(');
});

it('Function replaceCommas should not contain replace()', () => {
  expect(replaceCommas.toString()).to.not.contain('.replace(');
});

it('Function replaceCommas should not contain replaceAll()', () => {
  expect(replaceCommas.toString()).to.not.contain('.replaceAll(');
});

it('replaceCommas("1,2,3,4,5,6,7,8,9,0") should return "1 2 3 4 5 6 7 8 9 0"', () => {
  expect(replaceCommas('1,2,3,4,5,6,7,8,9,0')).to.equal('1 2 3 4 5 6 7 8 9 0');
});

it('replaceCommas("red,white,orange,yellow") should return "red white orange yellow"', () => {
  expect(replaceCommas('red,white,orange,yellow')).to.equal('red white orange yellow');
});

it('replaceCommas("") should return ""', () => {
  expect(replaceCommas('')).to.equal('');
});

it('replaceCommas("01 02, 25 - 12 = 13, 15% ,Tax is: $123.34, ") should return "01 02  25 - 12 = 13  15%  Tax is: $123.34  "', () => {
  expect(replaceCommas('01 02, 25 - 12 = 13, 15% ,Tax is: $123.34, ')).to.equal('01 02  25 - 12 = 13  15%  Tax is: $123.34  ');
});

it('replaceCommas(",3,45, -6 ,7,8,90,") should return " 3 45  -6  7 8 90 "', () => {
  expect(replaceCommas(',3,45, -6 ,7,8,90,')).to.equal(' 3 45  -6  7 8 90 ');
});

it('replaceCommas("test,test") should return "test test"', () => {
  expect(replaceCommas('test,test')).to.equal('test test');
});

it('replaceCommas("test_1.2") should return "test_1.2"', () => {
  expect(replaceCommas('test_1.2')).to.equal('test_1.2');
});

it('replaceCommas(",") should return " "', () => {
  expect(replaceCommas(',')).to.equal(' ');
});

it('replaceCommas(",,,,,") should return "     "', () => {
  expect(replaceCommas(',,,,,')).to.equal('     ');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
