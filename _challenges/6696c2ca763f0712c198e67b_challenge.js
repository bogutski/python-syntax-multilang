// NAMEEN:
// NAMERU:Поиск дубликатов пользователей

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Для участия в мероприятии пользователи должны заполнить заявку.

Каждая заполненная заявка – объект с информацией о пользователе.

После отправления заявки система будет сравнивать ее с каждой из уже отправленных заявок.

Если эта заявка уже была отправлена ранее, то повторная отправка будет считаться дубликатом.

Мы сделаем только механизм сравнения одной заявки с другой.

Когда пользователи оставляют заявку, они заполняют следующие поля:
* `firstName` – имя пользователя, строка
* `lastName` – фамилия пользователя, строка
* `phone` – телефон пользователя, строка
* `city` – город пользователя, строка

Напишите функцию `isDuplicate`.

Параметры функции:
* `profileSaved` – объект с информацией о пользователе, который уже отправил заявку.
* `profileNew` – объект с информацией о пользователе, который собирается отправить заявку.

Функция должна вернуть `true`, если заявки совпадают, и `false`, если нет.

В отправленных и в новых заявках пользователи могут допускать следующие действия:
* В имени и фамилии могут быть пробелы в начале и в конце строки.
* В имени и фамилии могут быть разные регистры букв.
* В телефоне могут быть пробелы в начале и в конце строки.
* Номер телефона может начинаться с `+` или без него.

Номера телефонов с `+` и без него считаются одинаковыми.

Пример запуска функции:
```javascript
isDuplicate({
  firstName: ' JohN ',
  lastName: '  Doe',
  phone: '+4234567890',
  city: 'Miami'
}, {
  firstName: '  john  ',
  lastName: ' DOE',
  phone: ' 4234567890   ',
  city: '  MIAMI '
}) // true
```

В этом примере заявки совпадают, потому что пользователи одинаковые не смотря на разные регистры букв, пробелы и `+` в номере телефона.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function isDuplicate(profileSaved, profileNew) {
  const normalize = (str) => str.trim().toLowerCase();
  const normalizePhone = (str) => normalize(str).replace(/^\+/, '');

  return (
    normalize(profileSaved.firstName) === normalize(profileNew.firstName) &&
    normalize(profileSaved.lastName) === normalize(profileNew.lastName) &&
    normalizePhone(profileSaved.phone) === normalizePhone(profileNew.phone) &&
    normalize(profileSaved.city) === normalize(profileNew.city)
  );
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function isDuplicate', () => {
  expect(isDuplicate).to.be.a('function');
});

it('isDuplicate({firstName: " JohN ", lastName: "  Doe", phone: "+4234567890", city: "Miami"}, {firstName: "  john  ", lastName: " DOE", phone: " 4234567890   ", city: "  MIAMI "}) should return true', () => {
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
        lastName: ' DOE',
        phone: ' 4234567890   ',
        city: '  MIAMI ',
      },
    ),
  ).to.be.equal(true);
});

// almost equal
it('isDuplicate({firstName: " Alex ", lastName: "  Doe", phone: "+4234567890", city: "Miami"}, {firstName: "  john  ", lastName: " DOE", phone: " 4234567890   ", city: "  MIAMI "}) should return false', () => {
  expect(
    isDuplicate(
      {
        firstName: ' Alex ',
        lastName: '  Doe',
        phone: '+4234567890',
        city: 'Miami',
      },
      {
        firstName: '  john  ',
        lastName: ' DOE',
        phone: ' 4234567890   ',
        city: '  MIAMI ',
      },
    ),
  ).to.be.equal(false);
});

// different phone
it('isDuplicate({firstName: " JohN ", lastName: "  Doe", phone: "+4234567890", city: "Miami"}, {firstName: "  john  ", lastName: " DOE", phone: " 4234567891   ", city: "  MIAMI "}) should return false', () => {
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
        lastName: ' DOE',
        phone: ' 4234567891   ',
        city: '  MIAMI ',
      },
    ),
  ).to.be.equal(false);
});

// different city
it('isDuplicate({firstName: " JohN ", lastName: "  Doe", phone: "+4234567890", city: "Miami"}, {firstName: "  john  ", lastName: " DOE", phone: " 4234567890   ", city: "  New York "}) should return false', () => {
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
        lastName: ' DOE',
        phone: ' 4234567890   ',
        city: '  New York ',
      },
    ),
  ).to.be.equal(false);
});

// different first name
it('isDuplicate({firstName: " Alex ", lastName: "  Doe", phone: "+4234567890", city: "Miami"}, {firstName: "  john  ", lastName: " DOE", phone: " 4234567890   ", city: "  MIAMI "}) should return false', () => {
  expect(
    isDuplicate(
      {
        firstName: ' Alex ',
        lastName: '  Doe',
        phone: '+4234567890',
        city: 'Miami',
      },
      {
        firstName: '  john  ',
        lastName: ' DOE',
        phone: ' 4234567890   ',
        city: '  MIAMI ',
      },
    ),
  ).to.be.equal(false);
});

// different last name
it('isDuplicate({firstName: " JohN ", lastName: "  Salley", phone: "+4234567890", city: "Miami"}, {firstName: "  john  ", lastName: " DOE", phone: " 4234567890   ", city: "  MIAMI "}) should return false', () => {
  expect(
    isDuplicate(
      {
        firstName: ' JohN ',
        lastName: '  Salley',
        phone: '+4234567890',
        city: 'Miami',
      },
      {
        firstName: '  john  ',
        lastName: ' DOE',
        phone: ' 4234567890   ',
        city: '  MIAMI ',
      },
    ),
  ).to.be.equal(false);
});

// all equal. all fields with spaces. Name : Robert city : New York phone : +245678921324
it('isDuplicate({firstName: " Robert  ", lastName: "  Wood", phone: "+245678921324", city: "New York"}, {firstName: "  Robert  ", lastName: " WOod", phone: " 245678921324   ", city: "  New York "}) should return true', () => {
  expect(
    isDuplicate(
      {
        firstName: ' Robert  ',
        lastName: '  Wood',
        phone: '+245678921324',
        city: 'New York',
      },
      {
        firstName: '  Robert  ',
        lastName: ' WOod',
        phone: ' 245678921324   ',
        city: '  New York ',
      },
    ),
  ).to.be.equal(true);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
