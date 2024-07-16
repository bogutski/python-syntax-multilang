// NAMEEN:
// NAMERU:Суммирование чисел прекращается при встрече со string или boolean

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `stopAtStringOrBoolean`, которая принимает один параметр - массив произвольной длины.

Массив может содержать в себе следующие типы данных: `string`, `boolean`, `number`.

Функция должна вернуть произведение всех чисел в массиве.

Если в массиве встречается `string` или `boolean`, то функция должна вернуть произведение всех чисел до этого момента.

Пример запуска функции:
```javascript
stopAtStringOrBoolean([1, 3, 'one', 5, 17]) // 1 * 3 = 3
stopAtStringOrBoolean([15, 7, -2]) // 15 * 7 * -2 = -210
stopAtStringOrBoolean([-9, 3, false, 7, 3]) // -9 * 3 = -27
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function stopAtStringOrBoolean(arr) {
  let mult = 1
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' || typeof arr[i] === 'boolean') break;
    mult *= arr[i]
  }
  return mult
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function stopAtStringOrBoolean', () => {
  expect(stopAtStringOrBoolean).to.be.a('function');
});

it("stopAtStringOrBoolean([1, 3, 'one', 5, 17]) should return 3", () => {
  expect(stopAtStringOrBoolean([1, 3, 'one', 5, 17])).to.be.equal(3);
});

it('stopAtStringOrBoolean([15, 7, -2]) should return -210', () => {
  expect(stopAtStringOrBoolean([15, 7, -2])).to.be.equal(-210);
});

it('stopAtStringOrBoolean([-9, 3, false, 7, 3]) should return -27', () => {
  expect(stopAtStringOrBoolean([-9, 3, false, 7, 3])).to.be.equal(-27);
});

it("stopAtStringOrBoolean(['two', '4', '-11']) should return 1", () => {
  expect(stopAtStringOrBoolean(['two', '4', '-11'])).to.be.equal(1);
});

it("stopAtStringOrBoolean([true, false, '5', '7']) should return 1", () => {
  expect(stopAtStringOrBoolean([true, false, '5', '7'])).to.be.equal(1);
});

it("stopAtStringOrBoolean([]) should return 1", () => {
  expect(stopAtStringOrBoolean([])).to.be.equal(1);
});

it("stopAtStringOrBoolean([-2, -4, '-5', 99]) should return 8", () => {
  expect(stopAtStringOrBoolean([-2, -4, '-5', 99])).to.be.equal(8);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
