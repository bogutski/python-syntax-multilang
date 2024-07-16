// NAMEEN:
// NAMERU:Конвертация и фильтрация данных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `convertAndFilterData`, которая принимает массив объектов.

Каждый объект содержит ключи `id` (целое число) и `isActive` (булево значение).

Функция должна вернуть массив, содержащий `id` активных пользователей (тех, у кого `isActive` равно `true`), умноженные на `10`.

Если `id` не присутствует в объекте, а `isActive` - `true`, то функция должна добавить `0` в массив.


Пример запуска функции:
```javascript
const users = [
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: true },
    { id: 4, isActive: true }
];

console.log(convertAndFilterData(users));
// Вывод: [10, 30, 40]

const obj = [
  { isActive: true },
  { isActive: false },
  { isActive: true }
];

console.log(convertAndFilterData(obj));
// Вывод: [0, 0]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function convertAndFilterData(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function convertAndFilterData(users) {
  let res = []

  users.forEach(({id, isActive}) => {
    if(isActive) id === undefined ? res.push(0) : res.push(id * 10)
  })

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function convertAndFilterData', () => {
  expect(convertAndFilterData).to.be.a('function');
});

it('should return ids multiplied by 10 for active users', () => {
  const users = [
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: true },
    { id: 4, isActive: true }
  ];
  expect(convertAndFilterData(users)).to.deep.equal([10, 30, 40]);
});

it('should return an empty array if the input array is empty', () => {
  expect(convertAndFilterData([])).to.deep.equal([]);
});

it('should handle cases where all users are inactive', () => {
  const users = [{ id: 1, isActive: false }, { id: 2, isActive: false }];
  expect(convertAndFilterData(users)).to.deep.equal([]);
});

it('should handle cases where there are no ids provided', () => {
  const users = [{ isActive: true }, { isActive: true }];
  expect(convertAndFilterData(users)).to.deep.equal([0, 0]); // Assuming missing ids default to 0.
});

it('should not include inactive users even if their ids are high', () => {
  const users = [{ id: 100, isActive: false }, { id: 200, isActive: true }];
  expect(convertAndFilterData(users)).to.deep.equal([2000]);
});

it('should correctly handle mixed data types for isActive', () => {
  const users = [{ id: '1', isActive: true }, { id: 2, isActive: true }];
  expect(convertAndFilterData(users)).to.deep.equal([10, 20]);
});

it('should handle a large array of users efficiently', () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({ id: i, isActive: i % 2 === 0 }));
  const expectedResult = largeArray.filter(user => user.isActive).map(user => user.id * 10);
  expect(convertAndFilterData(largeArray)).to.deep.equal(expectedResult);
});

it('should return an array of transformed ids, even if some ids are the same', () => {
  const users = [{ id: 1, isActive: true }, { id: 1, isActive: true }];
  expect(convertAndFilterData(users)).to.deep.equal([10, 10]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
