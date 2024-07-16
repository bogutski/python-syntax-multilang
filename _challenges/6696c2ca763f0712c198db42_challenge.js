// NAMEEN:The first variable. The number
// NAMERU:Первая переменная. Число

/*
INSTRUCTIONENSTART
Create a variable named `price`, use keyword `let`, assign number `123` as value
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-1.png)

Создайте переменную с именем `price`, используйте ключевое слово` let`, присвойте в качестве значения число `123`
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let price = 123;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let price = 123;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
let price =
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let price = 123;
// SOLUTIONEND


// OPENTESTSSTART
it('is variable exists', () => {
  expect(price).not.to.be.undefined;
});

it('should have a value of 123', () => {
  expect(price).eq(123);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
