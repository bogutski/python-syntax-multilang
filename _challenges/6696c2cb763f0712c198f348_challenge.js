// NAMEEN:
// NAMERU:Расширение списка увлечений

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `expandHobbiesList`, которая принимает первым аргументом массив существующих увлечений и последующими аргументами неопределенное количество новых хобби.

Функция должна возвращать обновленный список увлечений, где все новые хобби добавлены в начало.

Пример запуска функции:
```javascript
expandHobbiesList(['Cycling'], 'Photography', 'Traveling', 'Swimming'); // ['Photography', 'Traveling', 'Swimming', 'Cycling']
expandHobbiesList(['Reading', 'Cooking'], 'Hiking', 'Painting'); // ['Hiking', 'Painting', 'Reading', 'Cooking']
expandHobbiesList([], 'Gardening'); // ['Gardening']
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function expandHobbiesList(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function expandHobbiesList(arr, ...list){
  arr.unshift(...list);
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function expandHobbiesList', () => {
  expect(expandHobbiesList).to.be.a('function');
});

it("expandHobbiesList(['Reading', 'Cooking'], 'Hiking', 'Painting') should return ['Hiking', 'Painting', 'Reading', 'Cooking']", () => {
  expect(expandHobbiesList(['Reading', 'Cooking'], 'Hiking', 'Painting')).to.deep.equal(['Hiking', 'Painting', 'Reading', 'Cooking']);
});

it("expandHobbiesList(['Cycling'], 'Photography', 'Traveling') should return ['Photography', 'Traveling', 'Cycling']", () => {
  expect(expandHobbiesList(['Cycling'], 'Photography', 'Traveling')).to.deep.equal(['Photography', 'Traveling', 'Cycling']);
});

it("expandHobbiesList([], 'Gardening') should return ['Gardening']", () => {
  expect(expandHobbiesList([], 'Gardening')).to.deep.equal(['Gardening']);
});

it("expandHobbiesList(['Knitting'], 'Woodworking') should start with 'Woodworking'", () => {
  const result = expandHobbiesList(['Knitting'], 'Woodworking');
  expect(result[0]).to.equal('Woodworking');
});

it("expandHobbiesList(['Jogging', 'Swimming'], 'Skiing') should have 'Skiing' as the first hobby", () => {
  expect(expandHobbiesList(['Jogging', 'Swimming'], 'Skiing')[0]).to.equal('Skiing');
});

it("expandHobbiesList(['Baking'], 'Drawing', 'Singing') should have a length of 3", () => {
  expect(expandHobbiesList(['Baking'], 'Drawing', 'Singing').length).to.equal(3);
});

it("expandHobbiesList(['Chess'], []) should return ['Chess'] without changes", () => {
  expect(expandHobbiesList(['Chess'])).to.deep.equal(['Chess']);
});

it("expandHobbiesList(['Guitar Playing'], 'Video Games', 'Piano Playing') should include 'Piano Playing'", () => {
  expect(expandHobbiesList(['Guitar Playing'], 'Video Games', 'Piano Playing')).to.include('Piano Playing');
});

it("expandHobbiesList(['Dancing'], 'Acting') should not include 'Cooking'", () => {
  expect(expandHobbiesList(['Dancing'], 'Acting')).to.not.include('Cooking');
});

it("expandHobbiesList(['Running'], 'Yoga', 'Meditation') should return array with 'Yoga' as the first element", () => {
  const result = expandHobbiesList(['Running'], 'Yoga', 'Meditation');
  expect(result[0]).to.equal('Yoga');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
