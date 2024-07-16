// NAMEEN:
// NAMERU:Подсчет количества вхождений элементов в массив

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countEachEl` принимает массив и возвращает объект, в котором ключами являются элементы массива, а значениями - количество повторений этих элементов в массиве.

Необходимо исправить код, чтобы функция работала правильно.

Примеры запуска функции:
```javascript
countEachEl([1, 2, 3, 4, 5]) // {1: 1, 2: 1, 3: 1, 4: 1, 5: 1}
countEachEl([1, 1, 1, 1, 1]) // {1: 5}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
Function counteachel(arr) {
  let result = {arr[i]: 1]};
  for (let i = 0; i < arr.length; i++) {
    if (result["arr[i]"] = undefined) {
      result["arr[i]"] = 1;
    } else {
      result["arr[i]]"++;
    }
  }
  return result;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countEachEl(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]] === undefined) {
      result[arr[i]] = 1;
    } else {
      result[arr[i]]++;
    }
  }
  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countEachEl', () => {
  expect(countEachEl).to.be.a('function');
});

it('countEachEl([1, 2, 3, 4, 5]) should return {1: 1, 2: 1, 3: 1, 4: 1, 5: 1}', () => {
  expect(countEachEl([1, 2, 3, 4, 5])).to.deep.equal({1: 1, 2: 1, 3: 1, 4: 1, 5: 1});
});

it('countEachEl([1, 1, 1, 1, 1]) should return {1: 5}', () => {
  expect(countEachEl([1, 1, 1, 1, 1])).to.deep.equal({1: 5});
});

it('countEachEl([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]) should return {1: 2, 2: 2, 3: 2, 4: 2, 5: 2}', () => {
  expect(countEachEl([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).to.deep.equal({1: 2, 2: 2, 3: 2, 4: 2, 5: 2});
});

it('countEachEl([]) should return {}', () => {
  expect(countEachEl([])).to.deep.equal({});
});

it('countEachEl(["hello", "hello", "hello"]) should return {hello: 3}', () => {
  expect(countEachEl(['hello', 'hello', 'hello'])).to.deep.equal({hello: 3});
});

it('countEachEl([""]) should return {"": 1}', () => {
  expect(countEachEl([''])).to.deep.equal({'': 1});
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
