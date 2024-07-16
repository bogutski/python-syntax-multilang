// NAMEEN:
// NAMERU:Сортировка чисел в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `sortNumbers`, которая принимает строку с различными символами, включая числа.

Функция должна отсортировать только числа и добавить их в две строки:

* `от 0 до 4` включительно, в первую строку
* `от 5 до 9` включительно, во вторую строку

Вернуть массив из двух строк, где первый элемент - строка от 0 до 4, второй элемент - строка от 5 до 9.


Пример запуска функции:
```javascript
sortNumbers(' 3 4 5 6 7 8 0 ') // ['340', '5678']
sortNumbers('1, 2, 9, 8, 3, 0, 5, 6, 7, 4') // ['12304', '98567']
sortNumbers('1abc asd29, $4ngb92 762') // ['12422', '9976']
sortNumbers('abc') // ['', '']
sortNumbers('') // ['', '']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sortNumbers(str){
  let str1 = '';
  let str2 = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ` ` && !isNaN(+str[i])){
      if (+str[i] <= 4) str1 += str[i];
      else str2 += str[i];
    }
  }
  return [str1, str2];
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sortNumbers', () => {
  expect(sortNumbers).to.be.a('function');
});

it("sortNumbers('1 2 3 4 5 6 7 8 9 0') returns ['12340', '56789']", () => {
  expect(sortNumbers('1 2 3 4 5 6 7 8 9 0')).to.eql(['12340', '56789']);
});

it("sortNumbers('1, 2, 9, 8, 3, 0, 5, 6, 7, 4') returns ['12304', '98567']", () => {
  expect(sortNumbers('1, 2, 9, 8, 3, 0, 5, 6, 7, 4')).to.eql(['12304', '98567']);
});

it("sortNumbers('1mm2092 2a @03qb 4wv6# 5 64a% 7w 8a 9^ q03') returns ['12022034403', '9656789']", () => {
  expect(sortNumbers('1mm2092 2a @03qb 4wv6# 5 64a% 7w 8a 9^ q03')).to.eql(['12022034403', '9656789']);
});

it("sortNumbers('abc') returns ['', '']", () => {
  expect(sortNumbers('abc')).to.eql(['', '']);
});

it("sortNumbers('') returns ['', '']", () => {
  expect(sortNumbers('')).to.eql(['', '']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
