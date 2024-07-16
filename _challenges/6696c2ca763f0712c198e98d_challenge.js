// NAMEEN:
// NAMERU:Подсчёт строк, с длиной равной 3-м, прерывается при встрече с заданной строкой

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `noMoreThan3Char`, которая принимает два параметра - массив строк и строку.

Функция должна вернуть количество строк в массиве, длина которых равна 3-м.

Если в массиве встречается заданная строка, то подсчёт строк должен прерваться.

Подсказка: для подсчёта строк необходимо создать счётчик, в который будет записываться количество найденых строк.

Пример запуска функции:
```javascript
noMoreThan3Char(['dog', 'map', 'CAP', '-12'], 'CAP') // 2
noMoreThan3Char(['tag', 'CAT', 'pet', 'clouds', '-12', '120', 'go', 'K'], 'go') // 5
noMoreThan3Char(['12', '12345', 'umbrella', '12', '123888', '-123'], 'umbrella') // 0
noMoreThan3Char(['VAN', 'map', '1234', '19', 'true', 'ZIP', 'web'], 'one') // 4
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function noMoreThan3Char(arr, str) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) break
    if (arr[i].length === 3) {
      count++
    }
  }
  return count
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function noMoreThan3Char', () => {
  expect(noMoreThan3Char).to.be.a('function');
});

it("noMoreThan3Char(['dog', 'map', 'CAP', '-12'], 'CAP') should return 2", () => {
  expect(noMoreThan3Char(['dog', 'map', 'CAP', '-12'], 'CAP')).to.be.equal(2);
});

it("noMoreThan3Char(['tag', 'CAT', 'pet', 'clouds', '-12', '120', 'go', 'K'], 'go') should return 5", () => {
  expect(noMoreThan3Char(['tag', 'CAT', 'pet', 'clouds', '-12', '120', 'go', 'K'], 'go')).to.be.equal(5);
});

it("noMoreThan3Char(['12', '12345', 'umbrella', '12', '123888', '-123'], 'umbrella') should return 0", () => {
  expect(noMoreThan3Char(['12', '12345', 'umbrella', '12', '123888', '-123'], 'umbrella')).to.be.equal(0);
});

it("noMoreThan3Char(['VAN', 'map', 'CAT', '1234', '19', 'true', 'ZIP', 'football', '123', 'web'], 'football') should return 4", () => {
  expect(noMoreThan3Char(['VAN', 'map', 'CAT', '1234', '19', 'true', 'ZIP', 'football', '123', 'web'], 'football')).to.be.equal(4);
});

it("noMoreThan3Char(['dog', 'cat', 'map', 'cap', '-12', '120', 'up', 'usb', '123'], 'usb') should return 6", () => {
  expect(noMoreThan3Char(['dog', 'cat', 'map', 'cap', '-12', '120', 'up', 'usb', '123'], 'usb')).to.be.equal(6);
});

it("noMoreThan3Char(['dog', 'cat', 'map', 'cap', '-12', '120', 'up', 'usb', '123'], '1234') should return 8", () => {
  expect(noMoreThan3Char(['dog', 'cat', 'map', 'cap', '-12', '120', 'up', 'usb', '123'], '1234')).to.be.equal(8);
});

it("noMoreThan3Char(['dog', 'map', '12', 'up', '123'], 'up') should return 2", () => {
  expect(noMoreThan3Char(['dog', 'map', '12', 'up', '123'], 'up')).to.be.equal(2);
});

it("noMoreThan3Char([], '123') should return 0", () => {
  expect(noMoreThan3Char([], '123')).to.be.equal(0);
});

it("noMoreThan3Char([], '') should return 0", () => {
  expect(noMoreThan3Char([], '')).to.be.equal(0);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
