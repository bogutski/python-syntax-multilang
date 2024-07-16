// NAMEEN:
// NAMERU:Дубликат, если схожесть больше 2-х свойств

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `isDuplicate`, которая принимает два объекта и возвращает `true`, если совпадает хотя бы два свойства, иначе `false`.

Функция принимает два объекта, в которых могут быть следующие свойства:
* `firstName` – имя пользователя, строка
* `lastName` – фамилия пользователя, строка
* `city` – город пользователя, строка
* `phone` – телефон пользователя, строка

Все свойства могут содержать пробелы в начале и в конце строки, а также разные регистры букв.

В телефоне могут быть пробелы в начале и в конце строки, а также может начинаться с `+` или без него.

Номера телефонов с `+` и без него считаются одинаковыми.

Нужно проверить, совпадают ли значения свойств, игнорируя пробелы и регистр букв.

Если совпадает хотя бы два свойства, то функция должна вернуть `true`, иначе `false`.

Пример запуска функции:
```javascript
isDuplicate({
  firstName: ' JohN ',
  lastName: '  Doe',
  phone: '+4234567890',
  city: 'Miami'
}, {
  firstName: '  john  ',
  lastName: ' D',
  phone: ' 4234567890   ',
  city: '  Florida '
}) // true потому что совпадает firstName и phone

isDuplicate({
  firstName: ' J ',
  lastName: '  Doe',
  phone: '+4234567890',
  city: 'Miami'
}, {
  firstName: '  john  ',
  lastName: ' D',
  phone: ' 4234567890   ',
  city: '  Florida '
}) // false потому что совпадает только одно свойство - phone

isDuplicate({
  firstName: ' J ',
  lastName: '  Doe',
  phone: '+4234567890',
  city: '  MIAMi'
}, {
  firstName: '  john  ',
  lastName: ' D',
  phone: ' 4234567890   ',
  city: '  miami '
}) // true потому что совпадает два свойства - city и phone
```

Комбинации свойств могут быть разными, но совпадать должны хотя бы два свойства.

В решении задачи вам поможет переменная `count`, которая будет хранить количество совпадений свойств.

Как только нашли совпадение, увеличиваем `count` на 1.

После того как перебрали все свойства, проверяем, что `count` больше или равно 2.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isDuplicate(obj1, obj2) {
  let count = 0;

  const normalize = (str) => str.trim().toLowerCase();
  const phoneNormalize = (str) => normalize(str).replace(/^\+/, '');

  const obj1Normalized = {
    firstName: normalize(obj1.firstName),
    lastName: normalize(obj1.lastName),
    city: normalize(obj1.city),
    phone: phoneNormalize(obj1.phone),
  };

  const obj2Normalized = {
    firstName: normalize(obj2.firstName),
    lastName: normalize(obj2.lastName),
    city: normalize(obj2.city),
    phone: phoneNormalize(obj2.phone),
  };

  if (obj1Normalized.firstName === obj2Normalized.firstName) count++;
  if (obj1Normalized.lastName === obj2Normalized.lastName) count++;
  if (obj1Normalized.city === obj2Normalized.city) count++;
  if (obj1Normalized.phone === obj2Normalized.phone) count++;

  return count >= 2;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function isDuplicate', () => {
  expect(isDuplicate).to.be.a('function');
});

it('isDuplicate({ firstName: " JohN ", lastName: "  Doe", phone: "+4234567890", city: "Miami" }, { firstName: "  john  ", lastName: " D", phone: " 4234567890   ", city: "  Florida " }) // true', () => {
  expect(
    isDuplicate(
      {
        firstName: ' JohN ',
        lastName: '  Doe',
        phone: '+4234567890',
        city: 'Miami',
      },
      {
        firstName: '  john  ',
        lastName: ' D',
        phone: ' 4234567890   ',
        city: '  Florida ',
      },
    ),
  ).to.be.true;
});

it('isDuplicate({ firstName: " J ", lastName: "  Doe", phone: "+4234567890", city: "Miami" }, { firstName: "  john  ", lastName: " D", phone: " 4234567890   ", city: "  Florida " }) // false', () => {
  expect(
    isDuplicate(
      {
        firstName: ' J ',
        lastName: '  Doe',
        phone: '+4234567890',
        city: 'Miami',
      },
      {
        firstName: '  john  ',
        lastName: ' D',
        phone: ' 4234567890   ',
        city: '  Florida ',
      },
    ),
  ).to.be.false;
});

it('isDuplicate({ firstName: " J ", lastName: "  Doe", phone: "+4234567890", city: "  MIAMi" }, { firstName: "  john  ", lastName: " D", phone: " 4234567890   ", city: "  miami " }) // true', () => {
  expect(
    isDuplicate(
      {
        firstName: ' J ',
        lastName: '  Doe',
        phone: '+4234567890',
        city: '  MIAMi',
      },
      {
        firstName: '  john  ',
        lastName: ' D',
        phone: ' 4234567890   ',
        city: '  miami ',
      },
    ),
  ).to.be.true;
});

it('isDuplicate({ firstName: " J ", lastName: "  Doe", phone: "+4234567890", city: "  MIAMi" }, { firstName: "  john  ", lastName: " D", phone: " 4234567890   ", city: "  miami " }) // true', () => {
  expect(
    isDuplicate(
      {
        firstName: ' J ',
        lastName: '  Doe',
        phone: '+4234567890',
        city: '  MIAMi',
      },
      {
        firstName: '  john  ',
        lastName: ' D',
        phone: ' 4234567890   ',
        city: '  miami ',
      },
    ),
  ).to.be.true;
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
