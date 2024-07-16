// NAMEEN:
// NAMERU:Разделение на гласные и согласные

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `vowelsAndConsonants`, которая принимает строку и возвращает массив состоящий из двух массивов:

* первый массив содержит все гласные буквы строки в том же порядке, в котором они встречаются в строке
* второй массив содержит все согласные буквы строки в том же порядке, в котором они встречаются в строке

Гласными буквами являются `a`, `e`, `i`, `o`, `u`.

Пример условия `if`, который проверяет, является ли буква гласной:
* `if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')`

Все буквы в строке будут строчными.


Пример запуска функции:
```javascript
vowelsAndConsonants('javascript') // [ ['a', 'a', 'i'], ['j', 'v', 's', 'c', 'r', 'p', 't'] ]
vowelsAndConsonants('pasv') // [ ['a'], ['p', 's', 'v'] ]
vowelsAndConsonants('') // [ [], [] ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function vowelsAndConsonants(str) {
  const vowels = [];
  const consonants = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      vowels.push(str[i]);
    } else {
      consonants.push(str[i]);
    }
  }
  return [vowels, consonants]
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function vowelsAndConsonants', () => {
  expect(vowelsAndConsonants).to.be.a('function');
});

it("vowelsAndConsonants('javascriptloops') should return [['a', 'a', 'i', 'o', 'o'], ['j', 'v', 's', 'c', 'r', 'p', 't', 'l', 'p', 's']]", () => {
  expect(vowelsAndConsonants('javascriptloops')).to.eql([['a', 'a', 'i', 'o', 'o'], ['j', 'v', 's', 'c', 'r', 'p', 't', 'l', 'p', 's']]);
});

it("vowelsAndConsonants('pasv') should return [['a'], ['p', 's', 'v']]", () => {
  expect(vowelsAndConsonants('pasv')).to.eql([['a'], ['p', 's', 'v']]);
});

it("vowelsAndConsonants('') should return [[], []]", () => {
  expect(vowelsAndConsonants('')).to.eql([[], []]);
});

it("vowelsAndConsonants('a') should return [['a'], []]", () => {
  expect(vowelsAndConsonants('a')).to.eql([['a'], []]);
});

it("vowelsAndConsonants('b') should return [[], ['b']]", () => {
  expect(vowelsAndConsonants('b')).to.eql([[], ['b']]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
