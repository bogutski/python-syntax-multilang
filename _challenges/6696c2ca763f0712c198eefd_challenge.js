// NAMEEN:
// NAMERU:Найти сумму положительных и отрицательных чисел в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В этой задаче разберем как найти сумму не только положительных, но и отрицательных чисел в строке.

Функция `sumAllNumbers` принимает строку, состоящую из различных символов и положительных и отрицательных чисел.

Функция должна найти все числа в строке и сложить их.

Разберите код и допишите условие в цикле.

Постарайтесь переписать код самостоятельно.


Пррмеры запуска функции:
```javascript
sumAllNumbers('11$2#(17)');                                    // 30
sumAllNumbers('-51--42--33-2---1');                            // -129
sumAllNumbers('0,-53;- -7,- - --- -3-72,W2--8:-94, -211-2-3'); // -451
sumAllNumbers('');                                             // 0
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function sumAllNumbers(str){
  const numbers = {0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true};

  let sum = 0;                                      // variable for sum
  let acc = '';                                     // accumulator for numbers

  for (<code here...>) {                            // loop through string
    const el = str[i];                              // current element
    const nextEl = str[i + 1];                      // next element

    // if current element is located in an object OR
    // if current element is '-' AND next element is a number AND accumulator is empty
    if (numbers[el] || el === '-' && numbers[nextEl] && acc === '') {
      acc += el;                                    // add current element to accumulator
    }

    // if current element is '-' AND next element is a number AND accumulator is not empty
    else if(el === '-' && numbers[nextEl] && acc !== ''){
      sum += Number(acc);                          // add accumulator to sum
      acc = '-';                                   // reset accumulator and add '-' to it
    }
    else {
      sum += Number(acc);                         // add accumulator to sum
      acc = '';                                   // reset accumulator
    }
  }
  sum += Number(acc);                             // add accumulator to sum
  return sum;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function sumAllNumbers(str){
  const numbers = {0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true};

  let sum = 0;                              // variable for sum
  let acc = '';                              // accumulator for numbers

  for (let i = 0; i < str.length; i++) {   // loop through string
    const el = str[i];                              // current element
    const nextEl = str[i + 1];                      // next element

    // if current element is located in an object OR
    // if current element is '-' AND next element is a number AND accumulator is empty
    if (numbers[el] || el === '-' && numbers[nextEl] && acc === '') {
      acc += el;                                    // add current element to accumulator
    }

    // if current element is '-' AND next element is a number AND accumulator is not empty
    else if(el === '-' && numbers[nextEl] && acc !== ''){
      sum += Number(acc);                          // add accumulator to sum
      acc = '-';                                   // reset accumulator and add '-' to it
    }
    else {
      sum += Number(acc);                         // add accumulator to sum
      acc = '';                                   // reset accumulator
    }
  }
  sum += Number(acc);                             // add accumulator to sum
  return sum;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function sumAllNumbers', () => {
  expect(sumAllNumbers).to.be.a('function');
});

it("sumAllNumbers('1,-21,3, w-4, d52,--6, w72, w-89-10') should return -2", () => {
  expect(sumAllNumbers('1,-21,3, w-4, d52,--6, w72, w-89-10')).to.equal(-2);
});

it("sumAllNumbers('-51-42-33-2-1') should return -129", () => {
  expect(sumAllNumbers('-51-42-33-2-1')).to.equal(-129);
});

it("sumAllNumbers('91!20#30^44^2-84=7&82d93.5.') should return 290", () => {
  expect(sumAllNumbers('91!20#30^44^2-84=7&82d93.5.')).to.equal(290);
});

it("sumAllNumbers('0-53----7---3, *-*-*--729------8-94++-+-+-15-285-403') should return -1597", () => {
  expect(sumAllNumbers('0-53----7---3, *-*-*--729------8-94++-+-+-15-285-403')).to.equal(-1597);
});

it("sumAllNumbers('') should return 0", () => {
  expect(sumAllNumbers('')).to.equal(0);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
