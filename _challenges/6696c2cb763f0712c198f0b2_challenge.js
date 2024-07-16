// NAMEEN:
// NAMERU:Умножить все числа в массиве на 2

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `allNumbers` принимает массив `arr` в качестве параметра.

В массив могут быть переданы элементы: числа, строки, массивы.

Число может быть записано как в виде числа, так и в виде строки, например: 1 или "1". Но строка с содержанием цифр не будет встречаться (например `ab23cc`).

Функция должна вернуть массив, в котором все числа умножены на 2.

Если элемент массива является массивом, то все числа во вложенном массиве также должны быть умножены на 2.

Если элемент массива не является числом, то он должен остаться неизменным.

Пример запуска функции:
```javascript
allNumbers([1, [2, 3], 4]) // [2, [4, 6], 8]
allNumbers(["1", "4", "6"]) // [2, 8, 12]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function allNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' || !isNaN(arr[i])) {
      arr[i] = arr[i] * 2;
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] === 'number' ) {
        arr[i][j] = arr[i][j] * 2;
      }
    }
  }
  return arr
}
// SOLUTIONEND


// OPENTESTSSTART
  it('Created function allNumbers', () => {
    expect(allNumbers).to.be.a('function');
  });

  it('allNumbers([1, 2, 3]) should returns [2, 4, 6]', () => {
    expect(allNumbers([1, 2, 3])).to.deep.equal([2, 4, 6]);
  });

  it('allNumbers([1, [2, 3], 4]) should returns [2, [4, 6], 8]', () => {
    expect(allNumbers([1, [2, 3], 4])).to.deep.equal([2, [4, 6], 8]);
  });

  it('allNumbers([1, [2, 0, 5], 6]) should returns [2, [4, 0, 10], 12]', () => {
    expect(allNumbers([1, [2, 0, 5], 6])).to.deep.equal([2, [4, 0, 10], 12]);
  });

  it('allNumbers([]) should returns []', () => {
    expect(allNumbers([])).to.deep.equal([]);
  });

  it('allNumbers(["1", "4", "6") should returns [2, 8, 12]', () => {
    expect(allNumbers(["1", "4", "6"])).to.deep.equal([2, 8, 12]);
  });

  it('allNumbers(["1", [2, 3], "4"]) should returns [2, [4, 6], 8]', () => {
    expect(allNumbers(["1", [2, 3], "4"])).to.deep.equal([2, [4, 6], 8]);
  });

  it('allNumbers([[2, 2, 2], [2, 0, 5], [0, 0, 0]]) should returns [[4, 4, 4], [4, 0, 10], [0, 0 , 0]]', () => {
    expect(allNumbers([[2, 2, 2], [2, 0, 5], [0, 0, 0]])).to.deep.equal([[4, 4, 4], [4, 0, 10], [0, 0 , 0]]);
  });

  it('allNumbers(["hello", "js", "coding"]) should returns ["hello", "js", "coding"]', () => {
    expect(allNumbers(["hello", "js", "coding"])).to.deep.equal(["hello", "js", "coding"]);
  });
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
