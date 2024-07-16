// NAMEEN:
// NAMERU:Расшифровать послание

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `getAPhrase` принимает массив в котором содержатся числа и строки.

В массиве зашифрована фраза, но слова написаны в обратном порядке. Необходимо расшифровать фразу.

Функция возвращает строку, состоящую из элементов массива, у которых тип данный `string`.
Элементы должны быть разделены пробелом.

Если в массиве нет строковых элементов, функция должна вернуть пустую строку.

Попробуйте использовать метод join() для решения данной задачи

Пример запуска функции:
```javascript
getAPhrase(["JavaScript", 1, "study", 2, "I", 3]) // "I study JavaScript"
getAPhrase(["cool", 1, "is", 2, "it", 3, "because", 4, "JavaScript", 5, "like", 6, "I"]) // "I like JavaScript because it is cool"
getAPhrase([ 1, 2, 3]) // ""
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function getAPhrase
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getAPhrase(array) {
  let newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (typeof array[i] === 'string') {
      newArr.push(array[i]);
    }
  }
  return newArr.join(' ');
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function getAPhrase', () => {
  expect(getAPhrase).to.be.a('function');
});
it('getAPhrase(["JavaScript", 1, "study", 2, "I", 3]) returns "I study JavaScript"', () => {
  expect(getAPhrase(["JavaScript", 1, "study", 2, "I", 3])).to.equal('I study JavaScript');
});

it('getAPhrase(["cool", 1, "is", 2, "it", 3, "because", 4, "JavaScript", 5, "like", 6, "I"]) returns "I like JavaScript because it is cool"', () => {
  expect(getAPhrase(["cool", 1, "is", 2, "it", 3, "because", 4, "JavaScript", 5, "like", 6, "I"])).to.equal('I like JavaScript because it is cool');
});

it('getAPhrase(["now", 1, 2, 3, "easy", "is", 23, 56, "JavaScript"]) returns "JavaScript is easy now"', () => {
  expect(getAPhrase(["now", 1, 2, 3, "easy", "is", 23, 56, "JavaScript"])).to.equal('JavaScript is easy now');
});

it('getAPhrase([ 1, 2, 3]) returns ""', () => {
  expect(getAPhrase([1, 2, 3])).to.equal('');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
