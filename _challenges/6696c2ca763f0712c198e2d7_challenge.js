// NAMEEN:
// NAMERU:Размер файла в килобайтах

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Дан размер файла в байтах. Найдите количество полных килобайтов в этом размере файла.

Напишите функцию с именем `fileSizeKb`, которая принимает одно число размер файла в байтах.

Функция должна возвращать количество полных килобайтов в этом размере.

1Kb = 1024 bytes

Примеры запуска функции:
```javascript
fileSizeKb(1000) // 0
fileSizeKb(1024) // 1
fileSizeKb(1025) // 1
fileSizeKb(2048) // 2
fileSizeKb(2049) // 2
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sum(num1, num2){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fileSizeKb(bytes) {
  return Math.floor(bytes / 1024);
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function fileSizeKb', () => {
  expect(fileSizeKb).to.be.a('function');
});

it('fileSizeKb(1000) should return 0', () => {
  expect(fileSizeKb(1000)).to.equal(0);
});

it('fileSizeKb(1024) should return 1', () => {
  expect(fileSizeKb(1024)).to.equal(1);
});

it('fileSizeKb(1025) should return 1', () => {
  expect(fileSizeKb(1025)).to.equal(1);
});

it('fileSizeKb(2048) should return 2', () => {
  expect(fileSizeKb(2048)).to.equal(2);
});

it('fileSizeKb(2049) should return 2', () => {
  expect(fileSizeKb(2049)).to.equal(2);
});

it('fileSizeKb(4096) should return 4', () => {
  expect(fileSizeKb(4096)).to.equal(4);
});

it('fileSizeKb(4097) should return 4', () => {
  expect(fileSizeKb(4097)).to.equal(4);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
