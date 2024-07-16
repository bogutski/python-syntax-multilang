// NAMEEN:Population growth in the city
// NAMERU:Рост населения города

/*
INSTRUCTIONENSTART
The city has a population of 180,000 people. Due to natural increase the population increases by 3% per year.
What will be the population of the city in a year?

Create a variable `people` and give it a value of 180000.
Then write a command that increases the value of variable `people` by 3%.

Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```
let a = 100;
a = a + a * 0.05; //the command increments the value of the a variable by 5%
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-5.png)

В городе проживает 180000 человек. За счет естественного прироста количество населения увеличивается на 3% в год.
Каким будет население города через год?

Создайте переменную `people` и присвойте ей значение 180000.
Затем запишите команду, увеличивающую значение переменной `people` на 3%.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
let a = 100;
a = a + a * 0.05;  // команда увеличивает значение переменной `а` на 5 процентов
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let people = 180000;
people = people * 1.03;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let people = 180000;
people = people * 1.03;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let people = 180000;
people = people * 1.03;
// SOLUTIONEND


// OPENTESTSSTART
it('the variable `people` exists and has a value', () => {
  expect(people).not.undefined;
});

it('the variable `people` is not NaN', () => {
  expect(isNaN(people)).false;
});

it('the variable `people` is of type number', () => {
  expect(people).a('number');
});

it('the variable `people` is equal to 185400', () => {
  expect(people).equal(185400);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
