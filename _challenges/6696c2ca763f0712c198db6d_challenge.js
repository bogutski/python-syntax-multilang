// NAMEEN:The variable with the name of the movie
// NAMERU:Переменная с названием фильма

/*
INSTRUCTIONENSTART
Create a variable named `nameOfMovie` using the `const` keyword and assign it the value of the string `'Titanic'`.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-2-task-5.png)

Создайте переменную с именем `nameOfMovie` c использованием ключевого слова `const` и присвойте ей значение строки `'Titanic'`.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
const nameOfMovie = 'Titanic';
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
const nameOfMovie = 'Titanic';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const nameOfMovie = 'Titanic';
// SOLUTIONEND


// OPENTESTSSTART
it('nameOfMovie should be a variable', () => {
  expect (nameOfMovie).to.exist;
});

it('nameOfMovie should be a string', () => {
  expect (nameOfMovie).to.be.a('string');
});

it('nameOfMovie should be equal to "Titanic"', () => {
  expect (nameOfMovie).to.be.equal('Titanic');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
