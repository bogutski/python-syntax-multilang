// NAMEEN:
// NAMERU:Проверка на анаграмму

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isAnagram`, которая принимает объект с двумя свойствами `str1` и `str2`.

`str1` и `str2` - это строки, которые нужно проверить, являются ли они анаграммой друг друга.

Функция должна вернуть объект с тремя свойствами: `str1`, `str2` и `result`.

* `str1` и `str2` - это строки, которые были переданы в функцию.
* `result` - это булевое значение, которое показывает, являются ли строки анаграммой друг друга.

Элементы строки могут содержать пробелы, как внутри строки, так и снаружи. Пробелы не должны учитываться при проверке анаграммы.

Буквы могут быть в любом регистре. Перед проверкой строки должны быть приведены к одному регистру.

Можно использовать любой метод при решении задачи.


Примеры запуска функции:
```javascript
isAnagram({str1: 'a b c', str2: ' BAC   '});   // {str1: 'a b c', str2: ' BAC   ', result: true}
isAnagram({str1: '1 a b c 2', str2: '12BAC'}); // {str1: '1 a b c 2', str2: '12BAC', result: true}
isAnagram({str1: 'abc', str2: 'BACa'});        // false
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isAnagram(obj){
  const newStr1 = obj.str1.toLowerCase().split('').sort().join('').trim();
  const newStr2 = obj.str2.toLowerCase().split('').sort().join('').trim();
  obj.result = newStr1 === newStr2;
  return obj;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function isAnagram', () => {
  expect(isAnagram).to.be.a('function');
});

it("isAnagram({str1: 'a b c', str2: ' BAC   '}) should return {str1: 'a b c', str2: ' BAC   ', result: true}", () => {
  expect(isAnagram({str1: 'a b c', str2: ' BAC   '})).to.deep.equal({str1: 'a b c', str2: ' BAC   ', result: true});
});

it("isAnagram({str1: 'a b c a', str2: ' BAC   '}) should return {str1: 'a b c a', str2: ' BAC   ', result: false}", () => {
  expect(isAnagram({str1: 'a b c a', str2: ' BAC   '})).to.deep.equal({str1: 'a b c a', str2: ' BAC   ', result: false});
});

it("isAnagram({str1: ' 1 2 3 4 5 ', str2: ' 3 5 2  1 4 '}) should return {str1: ' 1 2 3 4 5 ', str2: ' 3 5 2  1 4 ', result: true}", () => {
  expect(isAnagram({str1: ' 1 2 3 4 5 ', str2: ' 3 5 2  1 4 '})).to.deep.equal({str1: ' 1 2 3 4 5 ', str2: ' 3 5 2  1 4 ', result: true});
});

it("isAnagram({str1: 'apple', str2: 'ELPA'}) should return {str1: 'apple', str2: 'ELPA', result: false}", () => {
  expect(isAnagram({str1: 'apple', str2: 'ELPA'})).to.deep.equal({str1: 'apple', str2: 'ELPA', result: false});
});

it("isAnagram({str1: ' Apple Macintosh ', str2: 'L A P T O P m a c h i n e s'}) should return {str1: ' Apple Macintosh ', str2: 'L A P T O P m a c h i n e s', result: true}", () => {
  expect(isAnagram({str1: ' Apple Macintosh ', str2: 'L A P T O P m a c h i n e s'})).to.deep.equal({str1: ' Apple Macintosh ', str2: 'L A P T O P m a c h i n e s', result: true});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
