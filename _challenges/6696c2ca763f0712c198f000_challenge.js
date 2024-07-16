// NAMEEN:
// NAMERU:Найти среднее арифметическое чисел в массиве, записанных в виде строки

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `averageStringNum` принимает один параметр - массив строк `arr`.

Массив содержит произвольное количество строк, в которых записаны только однозначные числа.

Функция возвращает среднее арифметическое всех чисел в массиве.

Чтобы вычислить среднее арифметическое, надо числа из типа данных `string` преобразовать в тип данных `number`.

Если массив пустой или содержит только пустые строки, функция возвращает строку 'There are no numbers'.

Результат выполнения функции округляется до ближайшего `целого числа`.

Исправьте ошибки в коде, чтобы функция работала правильно.

Пример запуска функции:
```javascript
averageStringNum(['3', '2', '4']); // (3 + 2 + 4) / 3 = 3
averageStringNum(['1', '9', '5', '']); // (1 + 9 + 5) / 3 = 5
averageStringNum(['', '']); // 'There are no numbers'
averageStringNum([]); // 'There are no numbers'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function averageStringNum(arr) {
  let sum = 0;
  let count = 0;
  let symbols = 0123456789;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= symbols.length; j++) {
      if (arr[i] === symbols[j]) {
        sum -= +arr[i];
        count++;
        break;
      }
    }
  }
  if (count = 0) return 'There are no numbers';
  return Math.floor(sum / count);
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageStringNum(arr) {
  let sum = 0;
  let count = 0;
  let symbols = '0123456789';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < symbols.length; j++) {
      if (arr[i] === symbols[j]) {
        sum += +arr[i];
        count++;
        break;
      }
    }
  }
  if (count === 0) return 'There are no numbers';
  return Math.round(sum / count);
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function averageStringNum', () => {
  expect(averageStringNum).to.be.a('function');
});

it("averageStringNum(['3', '2', '4']) should return 3", () => {
  expect(averageStringNum(['3', '2', '4'])).to.equal(3);
});

it("averageStringNum(['1', '7']) should return 4", () => {
  expect(averageStringNum(['1', '7'])).to.equal(4);
});

it("averageStringNum(['9', '8', '7', '6' ]) should return 8", () => {
  expect(averageStringNum(['9', '8', '7', '6'])).to.equal(8);
});

it("averageStringNum(['1', '9', '5', '']) should return 5", () => {
  expect(averageStringNum(['1', '9', '5', ''])).to.equal(5);
});

it("averageStringNum(['', '7', '']) should return 7", () => {
  expect(averageStringNum(['', '7', ''])).to.equal(7);
});

it("averageStringNum(['', '']) should return 'There are no numbers'", () => {
  expect(averageStringNum(['', ''])).to.equal('There are no numbers');
});

it("averageStringNum([]) should return 'There are no numbers'", () => {
  expect(averageStringNum([])).to.equal('There are no numbers');
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
