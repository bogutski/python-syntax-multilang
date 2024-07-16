// NAMEEN:
// NAMERU:Сколько раз строка встречается в массиве?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `countEachEl` принимает массив строк.

Функция должна вернуть количество вхождений каждого элемента в массив в виде объекта.

Если массив пустой, то функция должна вернуть строку `Array is empty`.

Примеры запуска функции:
```javascript
countEachEl(["hello", "js"]); // {hello: 1, js: 1}
countEachEl(["hello", "js", "hello"]); // {hello: 2, js: 1}
countEachEl([]); // 'Array is empty'
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function countEachEl(arr) {
  if (!arr.length) return "Array is empty";
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) result[arr[i]]++;
    else result[arr[i]] = 1;
  }
  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function countEachEl', () => {
  expect(countEachEl).to.be.a('function');
});

it('countEachEl(["hello", "js"]) returns {hello: 1, js: 1}', () => {
  expect(countEachEl(["hello", "js"])).to.deep.equal({hello: 1, js: 1});
});

it('countEachEl(["hello", "js", "hello"]) returns {hello: 2, js: 1}', () => {
  expect(countEachEl(["hello", "js", "hello"])).to.deep.equal({hello: 2, js: 1});
});

it('countEachEl(["hello", "js", "hello", "js", "code"]) returns {hello: 2, js: 2, code: 1}', () => {
  expect(countEachEl(["hello", "js", "hello", "js", "code"])).to.deep.equal({hello: 2, js: 2, code: 1});
});

it('countEachEl([]) returns "Array is empty"', () => {
  expect(countEachEl([])).to.equal("Array is empty");
});

it('countEachEl([""]) returns {"": 1}', () => {
  expect(countEachEl([""])).to.deep.equal({"": 1});
})

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
