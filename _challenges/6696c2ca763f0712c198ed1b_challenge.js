// NAMEEN:
// NAMERU:Объект с информацией о числах
/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `getNumbersInfo`, которая принимает строку из чисел, разделенных пробелами, и возвращает объект, содержащий информацию о числах, записанных в строке.
В объекте должно быть записано сколько в строке положительных, отрицательных чисел, нулей, четных, нечетных чисел. Одни и те же числа могут участвовать в нескольких подсчетах.
Например: -5 - отрицательное, нечетное число.

Структура объекта:
```javascript
{
  negatives: 0, // количество отрицательных чисел
  positives: 0, // количество положительных чисел
  zeros: 0,     // количество нулей
  odds: 0,      // количество нечетных чисел
  evens: 0      // количество четных чисел
}
```
Можно создать объект счетчиков с нулевыми значениями, как показано выше, в начале функции и увеличивать нужные счетчики в цикле.
Или можно создать 5 переменных - счетчиков с нулевыми значениями, в начале функции, увеличивать нужные переменные в цикле, а в конце создать объект с нужными свойствами и записать в него значениями этих переменных.

Для решения задачи рекомендуется использовать метод для работы со строками `split`.
Метод `split` вызывается на строку, принимает разделитель, разбивает исходную строку на подстроки по разделителю и возвращает массив подстрок.
Например:

```javascript
const str = '1 2 3 4 5';
const arr = str.split(' '); // ['1', '2', '3', '4', '5']
```

Если переданная в функцию строка пустая, или состоит из одних пробелов, то функция должна вернуть сообщение об ошибке: `String is empty`.
В самом начале функции удалите из строки лишние пробелы и проверьте строку на пустоту и, если строка пустая, то верните сообщение об ошибке.

Пример запуска функции:

```javascript
getNumbersInfo('-2 -1 0 1 2 3 4 55'); // должна вернуть
{
  negatives: 2,
  positives: 5,
  zeros: 1,
  odds: 4,
  evens: 3
}

getNumbersInfo('      ');  // должна вернуть сообщение об ошибке: 'String is empty'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
func


INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getNumbersInfo(str) {
  str = str.trim();
  if (str === '') return 'String is empty';

  const obj = {
    negatives: 0,
    positives: 0,
    zeros: 0,
    odds: 0,
    evens: 0
  }

  const numbers = str.split(' ');

  for (let i = 0; i < numbers.length; i += 1) {
    const number = Number(numbers[i]);

    if (number < 0) obj.negatives++;
    else if (number > 0) obj.positives++;
    else obj.zeros++;

    if (number % 2 === 0) obj.evens++;
    else obj.odds++;
  }

  return obj;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function getNumbersInfo', () => {
  expect(getNumbersInfo).to.be.a('function');
});

it('getNumbersInfo("1 2 3 4 5") should return { negatives: 0, positives: 5, zeros: 0, odds: 3, evens: 2 }', () => {
  expect(getNumbersInfo('1 2 3 4 5')).to.deep.equal({
    negatives: 0,
    positives: 5,
    zeros: 0,
    odds: 3,
    evens: 2
  });
});

it('getNumbersInfo("-1 -2 -3 -4 -5") should return { negatives: 5, positives: 0, zeros: 0, odds: 3, evens: 2 }', () => {
  expect(getNumbersInfo('-1 -2 -3 -4 -5')).to.deep.equal({
    negatives: 5,
    positives: 0,
    zeros: 0,
    odds: 3,
    evens: 2
  });
});

it('getNumbersInfo("-1 20 0 3 -45 -5 0") should return { negatives: 3, positives: 2, zeros: 2, odds: 4, evens: 3 }', () => {
  expect(getNumbersInfo('-1 20 0 3 -45 -5 0')).to.deep.equal({
    negatives: 3,
    positives: 2,
    zeros: 2,
    odds: 4,
    evens: 3
  });
});

it('getNumbersInfo("0") should return { negatives: 0, positives: 0, zeros: 1, odds: 0, evens: 1 }', () => {
  expect(getNumbersInfo('0')).to.deep.equal({
    negatives: 0,
    positives: 0,
    zeros: 1,
    odds: 0,
    evens: 1
  });
});

it('getNumbersInfo("1") should return { negatives: 0, positives: 1, zeros: 0, odds: 1, evens: 0 }', () => {
  expect(getNumbersInfo('1')).to.deep.equal({
    negatives: 0,
    positives: 1,
    zeros: 0,
    odds: 1,
    evens: 0
  });
});

it('getNumbersInfo("") should return "String is empty"', () => {
  expect(getNumbersInfo('')).to.equal('String is empty');
});

it('getNumbersInfo("      ") should return "String is empty"', () => {
  expect(getNumbersInfo('      ')).to.equal('String is empty');
});

it('getNumbersInfo("  1 3 5 7 9 ") should return { negatives: 0, positives: 5, zeros: 0, odds: 5, evens: 0 }', () => {
  expect(getNumbersInfo('  1 3 5 7 9 ')).to.deep.equal({
    negatives: 0,
    positives: 5,
    zeros: 0,
    odds: 5,
    evens: 0
  });
});

it('getNumbersInfo("11 21 31 41 51 6 72 8 92 10") should return { negatives: 0, positives: 10, zeros: 0, odds: 5, evens: 5 }', () => {
  expect(getNumbersInfo('11 21 31 41 51 6 72 8 92 10')).to.deep.equal({
    negatives: 0,
    positives: 10,
    zeros: 0,
    odds: 5,
    evens: 5
  });
});

it('getNumbersInfo("-11 -21 -31 -41 -51 -6 -72 -8 -92 -10") should return { negatives: 10, positives: 0, zeros: 0, odds: 5, evens: 5 }', () => {
  expect(getNumbersInfo('-11 -21 -31 -41 -51 -6 -72 -8 -92 -10')).to.deep.equal({
    negatives: 10,
    positives: 0,
    zeros: 0,
    odds: 5,
    evens: 5
  });
});

it('getNumbersInfo("-1 0 1") should return { negatives: 1, positives: 1, zeros: 1, odds: 2, evens: 1 }', () => {
  expect(getNumbersInfo('-1 0 1')).to.deep.equal({
    negatives: 1,
    positives: 1,
    zeros: 1,
    odds: 2,
    evens: 1
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
