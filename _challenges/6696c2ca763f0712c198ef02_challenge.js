// NAMEEN:
// NAMERU:Сумма всех чисел в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sumAllNums`, которая принимает строку с различными элементами, включая позитивные, негативные, дробные и целые числа.

Функция должна вернуть сумму всех чисел, которые присутствуют в строке.

Эта задача похожа на прошлые две, но здесь нужно еще добавить проверку на дефис (минус).

Все числа и знаки (минус и точка) расположены в правильном порядке, рядом с друг-другом. Не нужно добавлять лишние
 проверки.


Примеры запуска функции:
```javascript
sumAllNums('1 2 3 4 5') // 15
sumAllNums('10.5, 2.2  abc -15,40   50') // 87.7
sumAllNums(' 2.5 -2 = 0.5') // 1
sumAllNums('!@#$%^&*()NOnums') // 0
sumAllNums('') // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumAllNums(str){
  const numbers = '-.0123456789';
  let sum = 0;
  let chunk = '';
  for(let i = 0; i < str.length; i++){
    if(numbers.includes(str[i])) chunk += str[i];
    else {
      sum += Number(chunk);
      chunk = '';
    }
  }
  if(chunk) sum += Number(chunk);
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumAllNums', () => {
  expect(sumAllNums).to.be.a('function');
});

it("sumAllNums('1 2 3 4 5') should return 15", () => {
  expect(sumAllNums('1 2 3 4 5')).to.equal(15);
});

it("sumAllNums('10, 20, 30,40   50') should return 150", () => {
  expect(sumAllNums('10, 20, 30,40   50')).to.equal(150);
});

it("sumAllNums('0.1, 0.2,5.5, 0.3 + 0.4 = 6.5') should return 13", () => {
  expect(sumAllNums('0.1, 0.2,5.5, 0.3 + 0.4 = 6.5')).to.equal(13);
});

it("sumAllNums(' 2.5 -2 = 0.5') should return 1", () => {
  expect(sumAllNums(' 2.5 -2 = 0.5')).to.equal(1);
});

it("sumAllNums('111, abc, -25.555 ,  a357a +25  +-10') should return 457.445", () => {
  expect(sumAllNums('111, abc, -25.555 ,  a357a +25  +-10')).to.equal(457.445);
});

it("sumAllNums('!@#$%^&*()NOnums') should return 0", () => {
  expect(sumAllNums('!@#$%^&*()NOnums')).to.equal(0);
});

it("sumAllNums('') should return 0", () => {
  expect(sumAllNums('')).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
