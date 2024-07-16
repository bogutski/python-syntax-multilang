// NAMEEN:
// NAMERU:Категория скидок

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `discountCategory`, которая поможет определить насколько большая скидка будет предоставлена покупателю.

Функция принимает один аргумент - сумму покупки.

В зависимости от суммы покупки, функция должна вернуть строку – категорию скидки:

- `0%` - если сумма меньше 100
- `1%` - если сумма от 100 до 200
- `2%` - если сумма от 200 до 300
- `3%` - если сумма от 300 до 400
- `4%` - если сумма от 400

Похожий пример:
```javascript
function category(amount) {
  if(amount > 100) {
    return '1%';
  } else {
     return '0%';
  }
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function discountCategory(sum) {
  if (sum < 100) {
    return '0%';
  } else if (sum < 200) {
    return '1%';
  } else if (sum < 300) {
    return '2%';
  } else if (sum < 400) {
    return '3%';
  } else {
    return '4%';
  }
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function discountCategory', () => {
  expect(discountCategory).to.be.a('function');
});

it('discountCategory(99) returns 0%', () => {
  expect(discountCategory(99)).to.equal('0%');
});

it('discountCategory(100) returns 1%', () => {
  expect(discountCategory(100)).to.equal('1%');
});

it('discountCategory(199) returns 1%', () => {
  expect(discountCategory(199)).to.equal('1%');
});

it('discountCategory(200) returns 2%', () => {
  expect(discountCategory(200)).to.equal('2%');
});

it('discountCategory(299) returns 2%', () => {
  expect(discountCategory(299)).to.equal('2%');
});

it('discountCategory(300) returns 3%', () => {
  expect(discountCategory(300)).to.equal('3%');
});

it('discountCategory(399) returns 3%', () => {
  expect(discountCategory(399)).to.equal('3%');
});

it('discountCategory(400) returns 4%', () => {
  expect(discountCategory(400)).to.equal('4%');
});

it('discountCategory(500) returns 4%', () => {
  expect(discountCategory(500)).to.equal('4%');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
