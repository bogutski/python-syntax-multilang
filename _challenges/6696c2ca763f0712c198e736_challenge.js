// NAMEEN:
// NAMERU:В результате слияния элементов массива, получить строку.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `newString`, которая принимает один параметр - массив.

Массив состоит из 3-х или больше строк.

Функция должна вернуть сложение первых трёх элементов массива, `разделённых пробелом`.

* Второй элемент массива должен быть повторён `3` раза.
* Третий элемент массива должен быть повторён `4` раза.

Пример запуска функции:
```javascript
newString(['1', '2', '3', '4']); // '1 222 3333'
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function newString(words) {
  return words[0] + ' ' + words[1].repeat(3) + ' ' + words[2].repeat(4);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function newString', () => {
  expect(newString).to.be.a('function');
});

it('Function phrase returns string', () => {
    expect(newString(['1', '2', '3', '4'])).to.be.a('string');
} );

it('Function phrase returns correct result', () => {
    expect(newString(['1', '2', '3', '4'])).to.be.equal('1 222 3333');
} );

it('Function phrase returns correct result', () => {
    expect(newString(['a', 'b', 'c', 'd', 'f'])).to.be.equal('a bbb cccc');
} );

it('Function phrase returns correct result', () => {
    expect(newString(['ab', 'CD', 'fG', 'H'])).to.be.equal('ab CDCDCD fGfGfGfG');
} );
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
