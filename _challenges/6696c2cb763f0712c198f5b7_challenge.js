// NAMEEN:
// NAMERU:Группировка по статусу

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `groupByStatus, которая принимает массив объектов.

Каждый объект содержит ключи: `name` и `status`.

Функция должна возвращать объект, в котором ключи — это статусы, а значения — массивы имен, соответствующих каждому статусу.


Пример запуска функции
```javascript
const users = [
  { name: 'Alice', status: 'active' },
  { name: 'Bob', status: 'inactive' },
  { name: 'Carol', status: 'active' },
  { name: 'Dave', status: 'inactive' }
];

console.log(groupByStatus(users));
// Вывод: { active: ['Alice', 'Carol'], inactive: ['Bob', 'Dave'] }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function groupByStatus(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function groupByStatus(arr) {
  let res = {}

  arr.forEach(({name, status}) => {
    if(!res.hasOwnProperty(status)) res[status] = []
    res[status].push(name)
  })

  return res;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function groupByStatus', () => {
  expect(groupByStatus).to.be.a('function');
});

it('should group names by status', () => {
  const users = [
    { name: 'Alice', status: 'active' },
    { name: 'Bob', status: 'inactive' },
    { name: 'Carol', status: 'active' },
    { name: 'Dave', status: 'inactive' }
  ];
  expect(groupByStatus(users)).to.deep.equal({ active: ['Alice', 'Carol'], inactive: ['Bob', 'Dave'] });
});

it('should return an empty object if the input array is empty', () => {
  expect(groupByStatus([])).to.deep.equal({});
});

it('should handle cases where all users have the same status', () => {
  const users = [{ name: 'Alice', status: 'active' }, { name: 'Bob', status: 'active' }];
  expect(groupByStatus(users)).to.deep.equal({ active: ['Alice', 'Bob'] });
});

it('should return an object with empty arrays if there are statuses but no names', () => {
  const users = [{ name: '', status: 'active' }, { name: '', status: 'inactive' }];
  expect(groupByStatus(users)).to.deep.equal({ active: [''], inactive: [''] });
});

it('should handle users with no status defined', () => {
  const users = [{ name: 'Alice', status: undefined }, { name: 'Bob', status: 'active' }];
  expect(groupByStatus(users)).to.deep.equal({ undefined: ['Alice'], active: ['Bob'] });
});

it('should group users by status', () => {
  const users = [
    { name: 'Carol', status: 'active' },
    { name: 'Alice', status: 'active' },
    { name: 'Dave', status: 'inactive' },
    { name: 'Bob', status: 'inactive' }
  ];
  const result = groupByStatus(users);
  expect(result.active).to.deep.equal(['Carol', 'Alice']);
  expect(result.inactive).to.deep.equal(['Dave', 'Bob']);
});

it('should handle a large array of users efficiently', () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({ name: `User${i}`, status: i % 2 === 0 ? 'active' : 'inactive' }));
  const activeUsers = largeArray.filter(user => user.status === 'active').map(user => user.name);
  const inactiveUsers = largeArray.filter(user => user.status === 'inactive').map(user => user.name);
  expect(groupByStatus(largeArray)).to.deep.equal({ active: activeUsers, inactive: inactiveUsers });
});

it('should correctly group users when some have null or unexpected statuses', () => {
  const users = [
    { name: 'Alice', status: null },
    { name: 'Bob', status: 'active' },
    { name: 'Carol', status: 'unknown' }
  ];
  expect(groupByStatus(users)).to.deep.equal({ null: ['Alice'], active: ['Bob'], unknown: ['Carol'] });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
