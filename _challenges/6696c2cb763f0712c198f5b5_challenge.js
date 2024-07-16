// NAMEEN:
// NAMERU:Извлечение и объединение адресов электронной почты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `extractAndCombineEmails`, которая принимает массив объектов.

Каждый объект содержит ключ `emails`, который ассоциируется с массивом адресов электронной почты.

Функция должна возвращать один массив, содержащий все адреса электронной почты из всех объектов, сохраняя их порядок и включая повторения.


Пример запуска функции:
```javascript
const contacts = [
  { emails: ['alice@example.com', 'alice@gmail.com'] },
  { emails: ['bob@example.com'] },
  { emails: ['carol@example.com', 'carol@gmail.com', 'carol@yahoo.com'] }
];

console.log(extractAndCombineEmails(contacts));
// Вывод: ['alice@example.com', 'alice@gmail.com', 'bob@example.com', 'carol@example.com', 'carol@gmail.com', 'carol@yahoo.com']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function extractAndCombineEmails(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function extractAndCombineEmails(arr) {
  return arr.flatMap(obj => obj.emails);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function extractAndCombineEmails', () => {
  expect(extractAndCombineEmails).to.be.a('function');
});

it('Function extractAndCombineEmails should include method flatMap()', () => {
  const res = extractAndCombineEmails.toString()
  expect(res).to.include('.flatMap(')
});

it('should extract and combine emails from an array of objects', () => {
  const contacts = [
    { emails: ['alice@example.com', 'alice@gmail.com'] },
    { emails: ['bob@example.com'] },
    { emails: ['carol@example.com', 'carol@gmail.com', 'carol@yahoo.com'] }
  ];
  expect(extractAndCombineEmails(contacts)).to.deep.equal(['alice@example.com', 'alice@gmail.com', 'bob@example.com', 'carol@example.com', 'carol@gmail.com', 'carol@yahoo.com']);
});

it('should return an empty array if the input array is empty', () => {
  expect(extractAndCombineEmails([])).to.deep.equal([]);
});

it('should handle objects with empty email arrays', () => {
  const contacts = [{ emails: [] }, { emails: ['alice@example.com'] }];
  expect(extractAndCombineEmails(contacts)).to.deep.equal(['alice@example.com']);
});

it('should return an empty array if all objects have empty email arrays', () => {
  const contacts = [{ emails: [] }, { emails: [] }];
  expect(extractAndCombineEmails(contacts)).to.deep.equal([]);
});

it('should handle single-email arrays in all objects', () => {
  const contacts = [{ emails: ['alice@example.com'] }, { emails: ['bob@example.com'] }, { emails: ['carol@example.com'] }];
  expect(extractAndCombineEmails(contacts)).to.deep.equal(['alice@example.com', 'bob@example.com', 'carol@example.com']);
});

it('should not remove duplicates from the combined array', () => {
  const contacts = [{ emails: ['alice@example.com', 'alice@example.com'] }, { emails: ['bob@example.com'] }];
  expect(extractAndCombineEmails(contacts)).to.deep.equal(['alice@example.com', 'alice@example.com', 'bob@example.com']);
});

it('should combine emails correctly regardless of the order in the input objects', () => {
  const contacts = [{ emails: ['carol@example.com'] }, { emails: ['bob@example.com'] }, { emails: ['alice@example.com'] }];
  expect(extractAndCombineEmails(contacts)).to.deep.equal(['carol@example.com', 'bob@example.com', 'alice@example.com']);
});

it('should handle a large array of objects efficiently', () => {
  const largeArray = Array.from({ length: 1000 }, (_, i) => ({ emails: [`user${i}@example.com`, `user${i}@gmail.com`] }));
  const expectedResult = Array.from({ length: 2000 }, (_, i) => `user${Math.floor(i / 2)}@${i % 2 === 0 ? 'example.com' : 'gmail.com'}`);
  expect(extractAndCombineEmails(largeArray)).to.deep.equal(expectedResult);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
