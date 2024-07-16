// NAMEEN:
// NAMERU:Определить, что число содержит три знака после запятой

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fractionalPart`, которая принимает число.

Функция должна вернуть `true`, если число содержит три значащие цифры после запятой, и `false` в противном случае.

Примеры запуска функции:
```javascript
fractionalPart(1.234); // true
fractionalPart(1.2); // false
fractionalPart(200); // false
fractionalPart(200.234); // true
fractionalPart(200.23); // false
fractionalPart(471.22244); // false
fractionalPart(456471.222); // true
```

Один из вариантов решения предполагает следующий алгоритм:

* Преобразовать число в строку с помощью метода `toString()`
* Получить строковое представление числа с тремя цифрами после запятой с помощью метода `toFixed()`
* Сравнить две полученные строки. Если они равны, то возвращаем `true`, иначе `false`

Метод `toString()` преобразует число в строку, включающую все значащие цифры после запятой. Незначащие нули в конце числа отбрасываются.

Пример преобразования числа в строку:
```javascript
const num = 1.234;
const str = num.toString(); // '1.234'
const num2 = 12.000;
const str2 = num2.toString(); // '12'
const num3 = 12.345000;
const str3 = num3.toString(); // '12.345'
```

Задача может быть также решена с помощью математических операций без использования методов `toString()` и `toFixed()`.
Один из вариантов - умножить число на 1000 и проверить остатки от деления полученного числа на 1 и на 10.
Подумайте, как это сделать.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fractionalPart(num) {
  num = num * 1000;
  const remainder1 = num % 1;
  const remainder2 = num % 10;
  return remainder1 === 0 && remainder2 !== 0;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function fractionalPart', () => {
  expect(fractionalPart).to.be.a('function');
});

it('fractionalPart(1.234) should return true', () => {
  expect(fractionalPart(1.234)).to.be.equal(true);
});

it('fractionalPart(1.2) should return false', () => {
  expect(fractionalPart(1.2)).to.be.equal(false);
});

it('fractionalPart(200) should return false', () => {
  expect(fractionalPart(200)).to.be.equal(false);
});

it('fractionalPart(78953) should return false', () => {
  expect(fractionalPart(78953)).to.be.equal(false);
});

it('fractionalPart(200.234) should return true', () => {
  expect(fractionalPart(200.234)).to.be.equal(true);
});

it('fractionalPart(200.23) should return false', () => {
  expect(fractionalPart(200.23)).to.be.equal(false);
});

it('fractionalPart(471.22244) should return false', () => {
  expect(fractionalPart(471.22244)).to.be.equal(false);
});

it('fractionalPart(456471.222) should return true', () => {
  expect(fractionalPart(456471.222)).to.be.equal(true);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
