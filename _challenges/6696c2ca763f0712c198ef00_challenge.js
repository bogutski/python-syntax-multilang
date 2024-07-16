// NAMEEN:
// NAMERU:Найти и сложить все числа в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция findAndSum принимает строку состоящую из различных символов, букв и положительных целых чисел.

В строке нет определенного разделения между элементами, пробелы, точки, запятые и другие символы могут быть в любом месте строки.

Функция должна вернуть сумму всех чисел в строке.

В этой функции не хватает одной строчки кода, которая должна быть добавлена в тело последнего условия.

Разберитесь в каждой строчке кода и попытайтесь переписать функцию самостоятельно.


Примеры запуска функции:
```javascript
findAndSum('a2, 3, 4abc.5 8,  req0  te5st  9') // 36
findAndSum('1, 2,3  4 ') // 10
findAndSum('a1 bGH25 c5') // 31
findAndSum(' abc qr *&^%') // 0
findAndSum('') // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findAndSum(str){
  let numbers = '0123456789';
  let sum = 0;
  let chunk = '';
  for(let i = 0; i < str.length; i++) {
    if (numbers.includes(str[i])){
      chunk += str[i];
    } else {
      sum += Number(chunk);
      chunk = '';
    }
  }
  if (chunk !== '') {
    missing code...
  }
  return sum;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findAndSum(str){
  let numbers = '0123456789';
  let sum = 0;
  let chunk = '';
  for(let i = 0; i < str.length; i++) {
    if (numbers.includes(str[i])){
      chunk += str[i];
    } else {
      sum += Number(chunk);
      chunk = '';
    }
  }
  if (chunk !== '') {
    sum += Number(chunk);
  }
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findAndSum', () => {
  expect(findAndSum).to.be.a('function');
});

it("findAndSum('1 2,3, 4.5 8,  0    9') should return 32", () => {
  expect(findAndSum('1 2,3, 4.5 8,  0    9')).to.equal(32);
});

it("findAndSum('Fwr tY4 5KHL1 2,0.mn1,0.P') should return 13", () => {
  expect(findAndSum('Fwr tY4 5KHL1 2,0.mn1,0.P')).to.equal(13);
});

it("findAndSum('25 . 45 1 3, 2,7, 32  47 0 2., 9') should return 173", () => {
  expect(findAndSum('25 . 45 1 3, 2,7, 32  47 0 2., 9')).to.equal(173);
});

it("findAndSum('a2, 3, 4abc.5 8,  req0  te5st  9') should return 36", () => {
  expect(findAndSum('a2, 3, 4abc.5 8,  req0  te5st  9')).to.equal(36);
});

it("findAndSum(' a  b  c d,. !@^%$#*() :') should return 0", () => {
  expect(findAndSum(' a  b  c d,. !@^%$#*() :')).to.equal(0);
});

it("findAndSum('') should return 0", () => {
  expect(findAndSum('')).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
