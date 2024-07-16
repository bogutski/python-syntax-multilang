// NAMEEN:
// NAMERU:Разница длины строк

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Задача, похожая на предыдущую, но на этот раз ее нужно решить с помощью лишь одного цикла.

Функция `stringLengthsDif` принимает массив `arr` в качестве аргумента.

В массиве `arr` хранятся разные типы данных, включая строки.

Необходимо найти последнюю строку в массиве, длину этой строки.

Функция должна вернуть разницу между длиной последней строки и длиной предыдущих строк.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
stringLengthsDif([1, 2, 3, "abc", "def", "abcdefjk"]);  //8 - 3 -3 = 2
stringLengthsDif([1, 2, 3, "true", "false", "JavaScript Practice", true]);  //19 - 5 - 4 = 10
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function stringLengthsDif(arr) {
  let difference = 0;

  for (let i = arr.length, i >= 0, i--) {
    if (typeof arr[i] === string && difference === 0) difference = arr[i.length];
    else if (typeof arr[i] === string) difference -= arr[i.length]
  }

  return difference;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stringLengthsDif(arr) {
  let difference = 0;

  for (let i = arr.length-1; i >= 0; i--) {
    if (typeof arr[i] === 'string' && difference === 0) difference = arr[i].length;
    else if (typeof arr[i] === 'string') difference -= arr[i].length
  }

  return difference;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function stringLengthsDif', () => {
  expect(stringLengthsDif).to.be.a('function');
});

it('stringLengthsDif([1, 2, 3, "abc", "def", "abcdefjk"]) returns 2', () => {
  expect(stringLengthsDif([1, 2, 3, "abc", "def", "abcdefjk"])).to.equal(2);
});

it('stringLengthsDif([1, 2, 3, "true", "false", "JavaScript Practice", true]) returns 10', () => {
  expect(stringLengthsDif([1, 2, 3, "true", "false", "JavaScript Practice", true])).to.equal(10);
});

it('stringLengthsDif([1, 2, 3, true, ""]) returns 0', () => {
  expect(stringLengthsDif([1, 2, 3, true, ""])).to.equal(0);
});

it('stringLengthsDif([1, "you will", "expert in JavaScript", "soon", true]) returns -24', () => {
  expect(stringLengthsDif([1, "you will", "expert in JavaScript", "soon", true])).to.equal(-24);
});

it('stringLengthsDif(["cat", "dog", "cat and dog"]) returns 5', () => {
  expect(stringLengthsDif(["cat", "dog", "cat and dog"])).to.equal(5);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
