// NAMEEN:
// NAMERU:Преобразование и объединение вложенных массивов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `transformAndFlatten`, которая принимает массив объектов.

Каждый объект содержит ключ `data`, который ассоциируется с массивом чисел.

Функция должна умножить каждое число на `2` и затем "разгладить" результаты в один массив.

Используйте метод `flatMap()`.


Пример запуска функции
```javascript
const entries = [
  { data: [1, 2, 3] },
  { data: [4, 5, 6] },
  { data: [7, 8, 9] }
];

console.log(transformAndFlatten(entries));
// Вывод: [2, 4, 6, 8, 10, 12, 14, 16, 18]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function transformAndFlatten(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function transformAndFlatten(arr) {
  return arr.flatMap(({data}) => data.map(el => el * 2));
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function transformAndFlatten', () => {
  expect(transformAndFlatten).to.be.a('function');
});

it('Function transformAndFlatten should include method flatMap()', () => {
  const res = transformAndFlatten.toString()
  expect(res).to.include('.flatMap(')
});

it('transformAndFlatten([{ data: [1, 2, 3] }, { data: [4, 5, 6] }, { data: [7, 8, 9] }]) should return [2, 4, 6, 8, 10, 12, 14, 16, 18]', () => {
  const entries = [
    { data: [1, 2, 3] },
    { data: [4, 5, 6] },
    { data: [7, 8, 9] }
  ];
  expect(transformAndFlatten(entries)).to.deep.equal([2, 4, 6, 8, 10, 12, 14, 16, 18]);
});

it('transformAndFlatten([]) should return []', () => {
  expect(transformAndFlatten([])).to.deep.equal([]);
});

it('transformAndFlatten([{ data: [] }, { data: [1, 2, 3] }]) should return [2, 4, 6]', () => {
  const entries = [{ data: [] }, { data: [1, 2, 3] }];
  expect(transformAndFlatten(entries)).to.deep.equal([2, 4, 6]);
});

it('transformAndFlatten([{ data: [] }, { data: [] }]) should return []', () => {
  const entries = [{ data: [] }, { data: [] }];
  expect(transformAndFlatten(entries)).to.deep.equal([]);
});

it('transformAndFlatten([{ data: [1] }, { data: [2] }, { data: [3] }]) should return [2, 4, 6]', () => {
  const entries = [{ data: [1] }, { data: [2] }, { data: [3] }];
  expect(transformAndFlatten(entries)).to.deep.equal([2, 4, 6]);
});

it('transformAndFlatten(large array of 1000 entries) should process correctly', () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({ data: [i, i + 1] }));
  const expectedResult = largeArray.flatMap(entry => entry.data.map(num => num * 2));
  expect(transformAndFlatten(largeArray)).to.deep.equal(expectedResult);
});

it('transformAndFlatten([{ data: [1, 2, 3, 4] }, { data: [5, 6, 7, 8] }]) should return [2, 4, 6, 8, 10, 12, 14, 16]', () => {
  const entries = [{ data: [1, 2, 3, 4] }, { data: [5, 6, 7, 8] }];
  expect(transformAndFlatten(entries)).to.deep.equal([2, 4, 6, 8, 10, 12, 14, 16]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
