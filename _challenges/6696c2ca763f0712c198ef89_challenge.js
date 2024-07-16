// NAMEEN:
// NAMERU:Соберите фразу в зависимости от типа данных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `getAPhrase` принимает массив, содержащий разные типы данных.

Необходимо пройтись по массиву с конца и собрать фразу:
* если элемент массива - строка, то добавить ее во фразу
* если элемент массива - булевое значение, то добавить во фразу слово "oops"
* если элемент массива - число, то ничего не делать

Вернуть получившуюся фразу. Слова должны быть разделены пробелами, но в конце не должно быть пробела.

Не используйте метод `reverse()` для решения этой задачи

Пример запуска функции:
```javascript
getAPhrase([15, "!", "world", true, 42, "Hello", false]) // "oops Hello oops world !"
getAPhrase([(2>1), false, 15, 0, 0)]) // "oops oops"
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getAPhrase(arr) {
  let str = '';
  for (let i = arr.length-1; i >= 0; i--) {
    if(typeof arr[i] === 'boolean') str += 'oops '
    if (typeof arr[i] === 'string') str += arr[i] + ' '
  }
  return str.trim();
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getAPhrase', () => {
  expect(getAPhrase).to.be.a('function');
});

it('function getAPhrase do not include statement "reverse"', () => {
  expect(getAPhrase.toString().includes('reverse')).to.equal(false);
});
it('getAPhrase([15, "!", "world", true, 42, "Hello", false]) returns "oops Hello oops world !"', () => {
  expect(getAPhrase([15, "!", "world", true, 42, "Hello", false])).to.equal("oops Hello oops world !");
});

it('getAPhrase([(2>1), false, 15, 0, 0)]) returns "oops oops"', () => {
  expect(getAPhrase([(2>1), false, 15, 0, 0])).to.equal("oops oops");
});

it('getAPhrase([true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]) returns "oops oops oops oops oops oops oops oops oops oops oops oops oops oops oops oops"', () => {
  expect(getAPhrase([true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false])).to.equal("oops oops oops oops oops oops oops oops oops oops oops oops oops oops oops oops");
});

it('getAPhrase([12, 45673, 0, 145, 5]) returns ""', () => {
  expect(getAPhrase([12, 45673, 0, 145, 5])).to.equal("");
});

it('getAPhrase(["ok?", "you", "are"]) return "are you ok?"', () => {
  expect(getAPhrase(["ok?", "you", "are"])).to.equal("are you ok?");
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
