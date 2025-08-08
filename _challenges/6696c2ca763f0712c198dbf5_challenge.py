// NAMEEN:Population growth in the city
// NAMERU:Рост населения города

/*
INSTRUCTIONENSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-5.png)

The city has a population of 180,000 people. Due to natural increase the population increases by 3% per year.
What will be the population of the city in a year?

Create a variable `people_count` and give it a value of `180000`.
Then write a command that increases the value of variable `people_count` by 3%.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-5-task-5.png)

В городе проживает 180000 человек. За счет естественного прироста количество населения увеличивается на 3% в год.
Каким будет население города через год?

Создайте переменную `people_count` и присвойте ей значение `180000`.
Затем запишите команду, увеличивающую значение переменной `people_count` на 3%.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
Here is an example, which is fundamentally similar to what you need to do,
but adapt it to the requirements of the task:
```python
a = 100
a = a + a * 0.05 # the command increments the value of variable a by 5%
```
HINTENEND
*/

/*
HINTRUSTART
Приведенный пример, принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```python
a = 100
a = a + a * 0.05 # команда увеличивает значение переменной a на 5 процентов
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
people_count = 180000
people_count = people_count + people_count * 0.03
// SOLUTIONEND

// OPENTESTSSTART
it('the variable "people_count" exists and has a value', () => {
  expect(people_count).not.undefined;
});

it('the variable "people_count" is not NaN', () => {
  expect(isNaN(people_count)).false;
});

it('the variable "people_count" is of type number', () => {
  expect(people_count).a('number');
});

it('the variable "people_count" is equal to 185400', () => {
  expect(people_count).equal(185400);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
