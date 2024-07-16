// NAMEEN:
// NAMERU:Изменение или повторение элемента массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `repeatOrChange`, которая принимает два параметра - массив и элемент.

Массив произвольной длины и состоит из строк.

Элемент - это строка.

Если элемент есть в массиве, то он должен повториться внутри строки 5 раз.

Например, если искомый элемент `Ma`, и он есть в массиве, то он должен поменяться на `MaMaMaMaMa`.

Если элемента нет в массиве, то присвойте первому элементу значение искомого элемента.

Функция должна вернуть измененный массив.

Пример запуска функции:

```javascript
repeatOrChange(['a', 'ho', 'c'], 'ho') // ['a', 'hohohohoho', 'c']
repeatOrChange(['a', 'b', 'c'], 'car') // ['car', 'b', 'c']
repeatOrChange(['2', '08', '35', '173'], '2') // ['22222', '08', '35', '173']
repeatOrChange(['2', '9', '35', '173'], '08') // ['08', '9', '35', '173']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function repeatOrChange(arr, el) {
  if (arr.indexOf(el) >= 0) {
    arr[arr.indexOf(el)] = arr[arr.indexOf(el)].repeat(5)
  } else {
    arr[0] = el
  }
  return arr
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function repeatOrChange', () => {
  expect(repeatOrChange).to.be.a('function');
});

it('repeatOrChange(["a", "ho", "c"], "ho") should return ["a", "hohohohoho", "c"]', () => {
  expect(repeatOrChange(["a", "ho", "c"], "ho")).to.be.eql(["a", "hohohohoho", "c"]);
});

it('repeatOrChange(["a", "b", "c"], "car") should return ["car", "b", "c"]', () => {
  expect(repeatOrChange(["a", "b", "c"], "car")).to.be.eql(["car", "b", "c"]);
});

it('repeatOrChange(["2", "08", "35", "173"], "2") should return ["22222", "08", "35", "173"]', () => {
  expect(repeatOrChange(["2", "08", "35", "173"], "2")).to.be.eql(["22222", "08", "35", "173"]);
});

it('repeatOrChange(["2", "08", "35", "173"], "08") should return ["2", "0808080808", "35", "173"]', () => {
  expect(repeatOrChange(["2", "08", "35", "173"], "08")).to.be.eql(["2", "0808080808", "35", "173"]);
});

it('repeatOrChange(["0", "set", "go", "!"], "ready") should return ["ready", "set", "go", "!"]', () => {
  expect(repeatOrChange(["0", "set", "go", "!"], "ready")).to.be.eql(["ready", "set", "go", "!"]);
});

it('repeatOrChange(["butter", "balls", "cactus", "ship", "hand", "wood", "spoon"], "umbrella") should return ["umbrella", "balls", "cactus", "ship", "hand", "wood", "spoon"]', () => {
  expect(repeatOrChange(["butter", "balls", "cactus", "ship", "hand", "wood", "spoon"], "umbrella")).to.be.eql(["umbrella", "balls", "cactus", "ship", "hand", "wood", "spoon"]);
});

it('repeatOrChange(["butter", "balls", "cactus", "ship", "hand", "wood", "spoon"], "butter") should return ["butterbutterbutterbutterbutter", "balls", "cactus", "ship", "hand", "wood", "spoon"]', () => {
  expect(repeatOrChange(["butter", "balls", "cactus", "ship", "hand", "wood", "spoon"], "butter")).to.be.eql(["butterbutterbutterbutterbutter", "balls", "cactus", "ship", "hand", "wood", "spoon"]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
