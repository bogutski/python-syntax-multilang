// NAMEEN:
// NAMERU:Определить сколько знаков в числе

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
* Число `5.456` имеет 1 знак до запятой.
* Число `45.46` имеет 2 знака до запятой.
* Числа `782` и `357.01` имеют 3 знака до запятой.

Напишите функцию `countSigns`, которая принимает число и возвращает количество знаков до запятой.

Примеры запуска функции:
```javascript
countSigns(1.234); // 1
countSigns(1.2); // 1
countSigns(9.99); // 1
countSigns(99.99); // 2
countSigns(100); // 3
countSigns(1000); // 4
```

Преобразование числа в строку:
```javascript
const number = 10.034;
number.toString(); // '10.034'
```

Подсказка. Для решения задачи можно использовать метод `Math.floor()`, чтобы отбросить дробную часть числа.

Затем преобразовать число в строку с помощью методов `toFixed(0)` или `toString()`.

Количество знаков до запятой в числе будет равно длине полученной строки, которую можно узнать, воспользовавшись свойством строки `length`.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const countSigns = n => Math.floor(n).toFixed(0).length;
// SOLUTIONEND

// OPENTESTSSTART
it('Created function countSigns', () => {
  expect(countSigns).to.be.a('function');
});

it('countSigns(1.234) should return 1', () => {
  expect(countSigns(1.234)).to.equal(1);
});

it('countSigns(1.2) should return 1', () => {
  expect(countSigns(1.2)).to.equal(1);
});

it('countSigns(9.99) should return 1', () => {
  expect(countSigns(9.99)).to.equal(1);
});

it('countSigns(99.99) should return 2', () => {
  expect(countSigns(99.99)).to.equal(2);
});

it('countSigns(100) should return 3', () => {
  expect(countSigns(100)).to.equal(3);
});

it('countSigns(1000) should return 4', () => {
  expect(countSigns(1000)).to.equal(4);
});

it('countSigns(10000) should return 5', () => {
  expect(countSigns(10000)).to.equal(5);
});

it('countSigns(987789) should return 6', () => {
  expect(countSigns(987789)).to.equal(6);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
