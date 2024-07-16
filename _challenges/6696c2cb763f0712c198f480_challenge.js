// NAMEEN:
// NAMERU:Перевод оценок в буквенный формат

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `convertGrades`, которая принимает массив численных оценок и возвращает новый массив, содержащий эквивалент этих оценок в буквенном формате по следующей схеме:

* 90 и выше: "A"
* 80 - 89: "B"
* 70 - 79: "C"
* 60 - 69: "D"
* Ниже 60: "F"

Используйте метод `map()` для этого преобразования.


Пример запуска функции:
```javascript
convertGrades([95, 82, 75, 63, 55]); // [ 'A', 'B', 'C', 'D', 'F' ]
convertGrades([59, 69, 79, 89, 90]); // [ 'F', 'D', 'C', 'B', 'A' ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function convertGrades(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function convertGrades(arr) {
  return arr.map(score => {
    if(score >= 90) return 'A'
    else if(score >= 80 && score < 90) return 'B'
    else if(score >= 70 && score < 80) return 'C'
    else if(score >= 60 && score < 70) return 'D'
    else return 'F'
  });
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function convertGrades', () => {
  expect(convertGrades).to.be.a('function');
});

it('Function convertGrades should include method map()', () => {
  const res = convertGrades.toString()
  expect(res).to.include('.map(')
});

it("convertGrades([95, 82, 75, 63, 55]) should return ['A', 'B', 'C', 'D', 'F']", () => {
  expect(convertGrades([95, 82, 75, 63, 55])).to.deep.equal(['A', 'B', 'C', 'D', 'F']);
});

it("convertGrades([100, 88, 92, 70, 60]) should return ['A', 'B', 'A', 'C', 'D']", () => {
  expect(convertGrades([100, 88, 92, 70, 60])).to.deep.equal(['A', 'B', 'A', 'C', 'D']);
});

it("convertGrades([59, 49, 89, 72, 100]) should return ['F', 'F', 'B', 'C', 'A']", () => {
  expect(convertGrades([59, 49, 89, 72, 100])).to.deep.equal(['F', 'F', 'B', 'C', 'A']);
});

it("convertGrades([]) should return []", () => {
  expect(convertGrades([])).to.deep.equal([]);
});

it("convertGrades([81, 77, 90, 95, 99]) should return ['B', 'C', 'A', 'A', 'A']", () => {
  expect(convertGrades([81, 77, 90, 95, 99])).to.deep.equal(['B', 'C', 'A', 'A', 'A']);
});

it("convertGrades([90, 80, 70, 60, 59]) should return ['A', 'B', 'C', 'D', 'F']", () => {
  expect(convertGrades([90, 80, 70, 60, 59])).to.deep.equal(['A', 'B', 'C', 'D', 'F']);
});

it("convertGrades([89, 79, 69, 59, 0]) should return ['B', 'C', 'D', 'F', 'F']", () => {
  expect(convertGrades([89, 79, 69, 59, 0])).to.deep.equal(['B', 'C', 'D', 'F', 'F']);
});

it("convertGrades([100]) should return ['A']", () => {
  expect(convertGrades([100])).to.deep.equal(['A']);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
