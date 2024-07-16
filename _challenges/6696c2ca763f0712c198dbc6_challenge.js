// NAMEEN:Variable with the name of the football team
// NAMERU:Переменная с названием футбольной команды

/*
INSTRUCTIONENSTART
Create a variable `soccerTeam` and give it the value `'Barcelona'`.

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the task
```
const hockeyTeam = 'Panthers';
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-4-task-12.png)

Создайте переменную `soccerTeam` и присвойте ей значение `'Barcelona'`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи
```javascript
const hockeyTeam = 'Panthers';
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const soccerTeam = 'Barcelona';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const soccerTeam = 'Barcelona';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const soccerTeam = 'Barcelona';
// SOLUTIONEND


// OPENTESTSSTART
it('Variable `soccerTeam` exists and has a value', () => {
  expect(soccerTeam).not.undefined;
});

it('Variable`s soccerTeam` contains data type string', () => {
  expect(soccerTeam).a('string');
});

it('The `soccerTeam` variable contains the value `Barcelona`', () => {
  expect(soccerTeam).eq('Barcelona');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
