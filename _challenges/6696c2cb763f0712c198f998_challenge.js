// NAMEEN:
// NAMERU:Найти адвокатов с высшим рейтингом

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `findTopLawyers`, которая принимает два массива: `lawyerScore` и `lawyerName`.

* Массив `lawyerScore` содержит объекты с идентификатором адвоката и его рейтингом.
* Массив `lawyerName` содержит объекты с идентификатором адвоката, его именем и штатом.

Функция должна вернуть массив объектов, содержащих информацию о двух адвокатах с наивысшими рейтингами.

Если данных недостаточно, функция должна возвращать соответствующее сообщение:

* Если один из массивов пустой - `Missing data`
* Если id не совпадают - `No matching IDs`


Примеры запуска функции:
```javascript
const lawyerScore = [
  {id: 1, score: 80},
  {id: 3, score: 32},
  {id: 4, score: 33},
  {id: 2, score: 88}
];

const lawyerName = [
  {id: 1, name: 'Mike', state: 'CA'},
  {id: 3, name: 'Susan', state: 'FL'},
  {id: 4, name: 'Kevin', state: 'CA'},
  {id: 2, name: 'John', state: 'TN'}
];

console.log(findTopLawyers(lawyerScore, lawyerName));
// [
//   { lawyerId: 2, lawyerName: 'John', lawyerScore: 88, state: 'TN' },
//   { lawyerId: 1, lawyerName: 'Mike', lawyerScore: 80, state: 'CA' }
// ]

console.log(findTopLawyers([{id: 1, score: 80}], [{id: 1, name: 'Mike', state: 'CA'}]));
// [ { lawyerId: 1, lawyerName: 'Mike', lawyerScore: 80, state: 'CA' } ]

console.log(findTopLawyers(lawyerScore, [])); // "Missing data"
console.log(findTopLawyers([], lawyerName));  // "Missing data"
console.log(findTopLawyers([{id: 1, score: 80}], [{id: 2, name: 'Mike', state: 'CA'}])); // "No matching IDs"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function findTopLawyers(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function findTopLawyers(score, name) {
  if(!score.length || !name.length) return 'Missing data'

  const [firstScore, secondScore] = score.sort((a, b) => b.score - a.score);
  let firstLawyer
  let secondLawyer

  for(let obj of name){
    if(firstScore.id === obj.id) firstLawyer = obj
    else if(secondScore && secondScore.id === obj.id) secondLawyer = obj
  }

  let result = []

  if(firstLawyer){
    result.push({
      lawyerId: firstScore.id,
      lawyerName: firstLawyer.name,
      lawyerScore: firstScore.score,
      state: firstLawyer.state
    })
  }

  if(secondLawyer){
    result.push({
      lawyerId: secondScore.id,
      lawyerName: secondLawyer.name,
      lawyerScore: secondScore.score,
      state: secondLawyer.state
    })
  }

  return result.length !== 0 ? result : 'No matching IDs';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function findTopLawyers', () => {
  expect(findTopLawyers).to.be.a('function');
});

it('findTopLawyers([{id: 1, score: 80}, {id: 3, score: 32}, {id: 4, score: 33}, {id: 2, score: 88}], [{id: 1, name: "Mike", state: "CA"}, {id: 3, name: "Susan", state: "FL"}, {id: 4, name: "Kevin", state: "CA"}, {id: 2, name: "John", state: "TN"}]) should return [{ lawyerId: 2, lawyerName: "John", lawyerScore: 88, state: "TN" }, { lawyerId: 1, lawyerName: "Mike", lawyerScore: 80, state: "CA" }]', function() {
  expect(findTopLawyers([{id: 1, score: 80}, {id: 3, score: 32}, {id: 4, score: 33}, {id: 2, score: 88}], [{id: 1, name: "Mike", state: "CA"}, {id: 3, name: "Susan", state: "FL"}, {id: 4, name: "Kevin", state: "CA"}, {id: 2, name: "John", state: "TN"}])).to.deep.equal([{ lawyerId: 2, lawyerName: "John", lawyerScore: 88, state: "TN" }, { lawyerId: 1, lawyerName: "Mike", lawyerScore: 80, state: "CA" }]);
});

it('findTopLawyers([{id: 1, score: 80}], [{id: 1, name: "Mike", state: "CA"}]) should return [{ lawyerId: 1, lawyerName: "Mike", lawyerScore: 80, state: "CA" }]', function() {
  expect(findTopLawyers([{id: 1, score: 80}], [{id: 1, name: "Mike", state: "CA"}])).to.deep.equal([{ lawyerId: 1, lawyerName: "Mike", lawyerScore: 80, state: "CA" }]);
});

it('findTopLawyers([], [{id: 1, name: "Mike", state: "CA"}]) should return "Missing data"', function() {
  expect(findTopLawyers([], [{id: 1, name: "Mike", state: "CA"}])).to.equal("Missing data");
});

it('findTopLawyers([{id: 1, score: 80}], []) should return "Missing data"', function() {
  expect(findTopLawyers([{id: 1, score: 80}], [])).to.equal("Missing data");
});

it('findTopLawyers([{id: 1, score: 80}], [{id: 2, name: "Mike", state: "CA"}]) should return "No matching IDs"', function() {
  expect(findTopLawyers([{id: 1, score: 80}], [{id: 2, name: "Mike", state: "CA"}])).to.equal("No matching IDs");
});

it('findTopLawyers([{id: 1, score: 80}, {id: 3, score: 32}], [{id: 1, name: "Mike", state: "CA"}, {id: 3, name: "Susan", state: "FL"}]) should return [{ lawyerId: 1, lawyerName: "Mike", lawyerScore: 80, state: "CA" }, { lawyerId: 3, lawyerName: "Susan", lawyerScore: 32, state: "FL" }]', function() {
  expect(findTopLawyers([{id: 1, score: 80}, {id: 3, score: 32}], [{id: 1, name: "Mike", state: "CA"}, {id: 3, name: "Susan", state: "FL"}])).to.deep.equal([{ lawyerId: 1, lawyerName: "Mike", lawyerScore: 80, state: "CA" }, { lawyerId: 3, lawyerName: "Susan", lawyerScore: 32, state: "FL" }]);
});

it('findTopLawyers([{id: 1, score: 80}, {id: 3, score: 32}, {id: 4, score: 33}], [{id: 1, name: "Mike", state: "CA"}, {id: 3, name: "Susan", state: "FL"}, {id: 4, name: "Kevin", state: "CA"}]) should return [{ lawyerId: 1, lawyerName: "Mike", lawyerScore: 80, state: "CA" }, { lawyerId: 4, lawyerName: "Kevin", lawyerScore: 33, state: "CA" }]', function() {
  expect(findTopLawyers([{id: 1, score: 80}, {id: 3, score: 32}, {id: 4, score: 33}], [{id: 1, name: "Mike", state: "CA"}, {id: 3, name: "Susan", state: "FL"}, {id: 4, name: "Kevin", state: "CA"}])).to.deep.equal([{ lawyerId: 1, lawyerName: "Mike", lawyerScore: 80, state: "CA" }, { lawyerId: 4, lawyerName: "Kevin", lawyerScore: 33, state: "CA" }]);
});

it('findTopLawyers([{id: 1, score: 80}, {id: 2, score: 88}], [{id: 1, name: "Mike", state: "CA"}, {id: 2, name: "John", state: "TN"}]) should return [{ lawyerId: 2, lawyerName: "John", lawyerScore: 88, state: "TN" }, { lawyerId: 1, lawyerName: "Mike", lawyerScore: 80, state: "CA" }]', function() {
  expect(findTopLawyers([{id: 1, score: 80}, {id: 2, score: 88}], [{id: 1, name: "Mike", state: "CA"}, {id: 2, name: "John", state: "TN"}])).to.deep.equal([{ lawyerId: 2, lawyerName: "John", lawyerScore: 88, state: "TN" }, { lawyerId: 1, lawyerName: "Mike", lawyerScore: 80, state: "CA" }]);
});

it('findTopLawyers([{id: 2, score: 88}, {id: 1, score: 80}], [{id: 2, name: "John", state: "TN"}, {id: 1, name: "Mike", state: "CA"}]) should return [{ lawyerId: 2, lawyerName: "John", lawyerScore: 88, state: "TN" }, { lawyerId: 1, lawyerName: "Mike", lawyerScore: 80, state: "CA" }]', function() {
  expect(findTopLawyers([{id: 2, score: 88}, {id: 1, score: 80}], [{id: 2, name: "John", state: "TN"}, {id: 1, name: "Mike", state: "CA"}])).to.deep.equal([{ lawyerId: 2, lawyerName: "John", lawyerScore: 88, state: "TN" }, { lawyerId: 1, lawyerName: "Mike", lawyerScore: 80, state: "CA" }]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
