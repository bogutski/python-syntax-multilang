// NAMEEN:
// NAMERU:Подсчет символов в массиве строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `countCharacters`, которая принимает массив строк.

Функция возвращает объект, в котором ключами являются символы, а значениями — количество их появлений во всех строках массива.

Используйте метод `forEach` для реализации этой задачи.


Пример запуска функции:
```javascript
countCharacters(['abc', 'def', 'g']);
// { a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1 }

countCharacters(['hello', 'world', 'hello', 'again']);
// { h: 2, e: 2, l: 5, o: 3, w: 1, r: 1, d: 1, a: 2, g: 1, i: 1, n: 1 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function countCharacters(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countCharacters(arr) {
  let res = {}

  arr.forEach(word => {

    for(let el of word){
      if(res.hasOwnProperty(el)) res[el]++
      else res[el] = 1
    }

  })

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function countCharacters', () => {
  expect(countCharacters).to.be.a('function');
});

it('Function countCharacters should include method forEach()', () => {
  const res = countCharacters.toString()
  expect(res).to.include('.forEach(')
});

it("countCharacters(['hello', 'world', 'hello', 'again']) should return { h: 2, e: 2, l: 5, o: 3, w: 1, r: 1, d: 1, a: 2, g: 1, i: 1, n: 1 }", () => {
  expect(countCharacters(["hello", "world", "hello", "again"])).to.deep.equal({ h: 2, e: 2, l: 5, o: 3, w: 1, r: 1, d: 1, a: 2, g: 1, i: 1, n: 1 });
});

it("countCharacters(['', ' ', '!!']) should return { ' ': 1, '!': 2 }", () => {
  expect(countCharacters(['', ' ', '!!'])).to.deep.equal({ ' ': 1, '!': 2 });
});

it("countCharacters(['abc', 'def', 'g']) should return { a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1 }", () => {
  expect(countCharacters(['abc', 'def', 'g'])).to.deep.equal({ a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1 });
});

it("countCharacters(['123', '456', '789']) should return { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1, '9': 1 }", () => {
  expect(countCharacters(['123', '456', '789'])).to.deep.equal({ '1': 1, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1, '9': 1 });
});

it("countCharacters(['AAA', 'BBB', 'A', 'B', 'AB']) should return { 'A': 5, 'B': 5 }", () => {
  expect(countCharacters(['AAA', 'BBB', 'A', 'B', 'AB'])).to.deep.equal({ 'A': 5, 'B': 5 });
});

it("countCharacters(['']) should return {}", () => {
  expect(countCharacters([''])).to.deep.equal({});
});

it("countCharacters(['one', 'two', 'three']) should return { 'o': 2, 'n': 1, 'e': 3, 't': 2, 'w': 1, 'h': 1, 'r': 1 }", () => {
  expect(countCharacters(['one', 'two', 'three'])).to.deep.equal({ 'o': 2, 'n': 1, 'e': 3, 't': 2, 'w': 1, 'h': 1, 'r': 1 });
});

it("countCharacters(['x', 'y', 'z', 'xx', 'yy', 'zz']) should return { 'x': 3, 'y': 3, 'z': 3 }", () => {
  expect(countCharacters(['x', 'y', 'z', 'xx', 'yy', 'zz'])).to.deep.equal({ 'x': 3, 'y': 3, 'z': 3 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
