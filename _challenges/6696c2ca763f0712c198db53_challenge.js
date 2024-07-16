// NAMEEN:Fix bugs in the code. Variable product
// NAMERU:Исправьте ошибки в коде. Переменная product

/*
INSTRUCTIONENSTART
You need to write a command which assigns the value of `1` to the variable `product` using the
keyword `let`.

Correct the errors in the given code.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
![](https://course-qa-basics.s3.us-west-1.amazonaws.com/section-2-course-1-task-18.png)

Требуется написать команду, которая присваивает переменной `product` значение числа `1` с использованием
ключевого слова `let`.

Исправьте ошибки в приведенном коде.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```javascript
let product = 1;
```
HINTENEND
*/

/*
HINTRUSTART
```javascript
let product = 1;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
let 'product' = 1;
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
let product = 1;
// SOLUTIONEND


// OPENTESTSSTART
it('product should be defined', () => {
  expect(product).not.to.be.undefined;
});

it('product should be a number', () => {
  expect(product).to.be.a('number');
});

it('product should be equal to 1', () => {
  expect(product).to.be.equal(1);
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
