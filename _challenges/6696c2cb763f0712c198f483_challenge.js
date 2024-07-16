// NAMEEN:
// NAMERU:Нормализация имен пользователей

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `normalizeUserNames`, которая принимает массив строк, представляющих имена пользователей в различных форматах, и возвращает новый массив, содержащий нормализованные имена.

Все имена должны быть преобразованы к нижнему регистру, и каждое слово в имени должно начинаться с заглавной буквы.

Используйте метод `map()` для этого преобразования.

В каждой строке будет не больше 2 слов.


Пример запуска функции:

```javascript
normalizeUserNames(['alice cooper', 'BOB MARLEY', 'charLie CHAPLIN']); // [ 'Alice Cooper', 'Bob Marley', 'Charlie Chaplin' ]
normalizeUserNames(['two words', 'WORD HERE', 'one']); // [ 'Two Words', 'Words Here', 'One' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function normalizeUserNames(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function normalizeUserNames(arr) {
  return arr.map(str => {

    let index = str.indexOf(' ')
    let res = ''

    for(let i = 0; i < str.length; i++){
      if(i === 0 || i === index + 1) res += str[i].toUpperCase()
      else res += str[i].toLowerCase()
    }

    return res
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function normalizeUserNames', () => {
  expect(normalizeUserNames).to.be.a('function');
});

it('Function normalizeUserNames should include method map()', () => {
  const res = normalizeUserNames.toString()
  expect(res).to.include('.map(')
});

it("normalizeUserNames(['alice cooper', 'BOB MARLEY', 'charLie CHAPLIN']) should return ['Alice Cooper', 'Bob Marley', 'Charlie Chaplin']", () => {
  expect(normalizeUserNames(["alice cooper", "BOB MARLEY", "charLie CHAPLIN"])).to.deep.equal(["Alice Cooper", "Bob Marley", "Charlie Chaplin"]);
});

it("normalizeUserNames(['jAnE DOE', 'john SMITH']) should return ['Jane Doe', 'John Smith']", () => {
  expect(normalizeUserNames(["jAnE DOE", "john SMITH"])).to.deep.equal(["Jane Doe", "John Smith"]);
});

it("normalizeUserNames([]) should return []", () => {
  expect(normalizeUserNames([])).to.deep.equal([]);
});

it("normalizeUserNames(['SINGLENAME']) should return ['Singlename']", () => {
  expect(normalizeUserNames(["SINGLENAME"])).to.deep.equal(["Singlename"]);
});

it("normalizeUserNames(['two words', 'WORDS HERE', 'one']) should return ['Two Words', 'Words Here', 'One']", () => {
  expect(normalizeUserNames(['two words', 'WORDS HERE', 'one'])).to.deep.equal(['Two Words', 'Words Here', 'One']);
});

it("normalizeUserNames(['eLoN musK', 'mark ZUCKERBERG', 'jeff BEZOS']) should return ['Elon Musk', 'Mark Zuckerberg', 'Jeff Bezos']", () => {
  expect(normalizeUserNames(["eLoN musK", "mark ZUCKERBERG", "jeff BEZOS"])).to.deep.equal(["Elon Musk", "Mark Zuckerberg", "Jeff Bezos"]);
});

it("normalizeUserNames(['steveJOBS']) should return ['Stevejobs']", () => {
  expect(normalizeUserNames(["steveJOBS"])).to.deep.equal(["Stevejobs"]);
});

it("normalizeUserNames(['sATOSHI Nakamoto', 'vITALIK Buterin']) should return ['Satoshi Nakamoto', 'Vitalik Buterin']", () => {
  expect(normalizeUserNames(["sATOSHI Nakamoto", "vITALIK Buterin"])).to.deep.equal(["Satoshi Nakamoto", "Vitalik Buterin"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
