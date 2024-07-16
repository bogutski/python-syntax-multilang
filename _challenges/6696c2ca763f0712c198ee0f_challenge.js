// NAMEEN:
// NAMERU:Расшифровать сокращенные названия улиц

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В почтовых адресах для краткости часто используются сокращенные названия улиц.
Существует официальная таблица для расшифровки этих сокращений.
Для примера, вот некоторые из них:

* St. = Street
* Rd. = Road
* Ln. = Lane
* Dr. = Drive
* Cir. = Circle
* Ave. = Avenue
* Pl. = Place
* Sq. = Square
* Pkwy. = Parkway
* Ct. = Court
* Hwy. = Highway
* Plz. = Plaza
* Blvd. = Boulevard
* Bch. = Beach
* Aly. = Alley

На самом деле, таблица довольно большая, но для решения этой задачи мы будем использовать только 15 сокращений, которые указаны выше.

Нужно написать функцию `decodeAddress`, которая принимает строку с сокращенным адресом и возвращает строку, включающую адрес с полным названием улицы.

Слова в строке разделены пробелами.
Нужно в цикле получать из строки слова и сравнивать их со значениями в таблице.
Если слово есть в таблице, то нужно заменить его на полное название из таблицы, если нет, то оставить без изменений.
Заведомо не известно, в каком порядке будут идти слова в строке, поэтому нужно проверять каждое слово.

Если вы забыли алгоритм получения слов из строки, пересмотрите урок `Получить числа из строки`.
В решении запрещено использовать методы строк: `split`, `replace`, `indexOf`, `lastIndexOf`, `includes`.

Примеры запуска:
```javascript
decodeAddress('123 Main St.') // '123 Main Street'
decodeAddress('1001 1st Ave.') // '1001 1st Avenue'
decodeAddress('55 North Center Drive') // '55 North Center Drive'
decodeAddress('') // ''
```
Для хранения таблицы создадим объект `decodeTable`, в котором сокращения будут являться ключами, а полные названия - значениями.
```javascript
const decodeTable = {
  'St.': 'Street',
  'Rd.': 'Road',
  'Ln.': 'Lane',
  'Dr.': 'Drive',
  'Cir.': 'Circle',
  'Ave.': 'Avenue',
  'Pl.': 'Place',
  'Sq.': 'Square',
  'Pkwy.': 'Parkway',
  'Ct.': 'Court',
  'Hwy.': 'Highway',
  'Plz.': 'Plaza',
  'Blvd.': 'Boulevard',
  'Bch.': 'Beach',
  'Aly.': 'Alley',
}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function decodeAddress(address) {
  const decodeTable = {
    'St.': 'Street',
    'Rd.': 'Road',
    'Ln.': 'Lane',
    'Dr.': 'Drive',
    'Cir.': 'Circle',
    'Ave.': 'Avenue',
    'Pl.': 'Place',
    'Sq.': 'Square',
    'Pkwy.': 'Parkway',
    'Ct.': 'Court',
    'Hwy.': 'Highway',
    'Plz.': 'Plaza',
    'Blvd.': 'Boulevard',
    'Bch.': 'Beach',
    'Aly.': 'Alley'
  }

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function decodeAddress(address) {
  const decodeTable = {
    'St.': 'Street',
    'Rd.': 'Road',
    'Ln.': 'Lane',
    'Dr.': 'Drive',
    'Cir.': 'Circle',
    'Ave.': 'Avenue',
    'Pl.': 'Place',
    'Sq.': 'Square',
    'Pkwy.': 'Parkway',
    'Ct.': 'Court',
    'Hwy.': 'Highway',
    'Plz.': 'Plaza',
    'Blvd.': 'Boulevard',
    'Bch.': 'Beach',
    'Aly.': 'Alley',
  }

  let result ='';
  let word = '';
  for (let i = 0; i < address.length; i++) {
    const char = address[i];
    if (char === ' '){
      if(word in decodeTable){
        result += decodeTable[word];
      } else {
        result += word;
      }
      result += char;
      word = '';
    } else {
      word += char;
    }
  }
  if(word) {
    result += word in decodeTable ? decodeTable[word] : word;
  }
  return result;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function decodeAddress', () => {
  expect(decodeAddress).to.be.a('function');
});

it('Function decodeAddress should not use split()', () => {
  expect(decodeAddress.toString()).to.not.include('.split(');
});

it('Function decodeAddress should not use replace()', () => {
  expect(decodeAddress.toString()).to.not.include('.replace(');
})

it('Function decodeAddress should not use indexOf()', () => {
  expect(decodeAddress.toString()).to.not.include('.indexOf(');
});

it('Function decodeAddress should not use lastIndexOf()', () => {
  expect(decodeAddress.toString()).to.not.include('.lastIndexOf(');
});

it('Function decodeAddress should not use join()', () => {
  expect(decodeAddress.toString()).to.not.include('.join(');
});

it('decodeAddress("123 Main St.") should return "123 Main Street"', () => {
  expect(decodeAddress('123 Main St.')).to.equal('123 Main Street');
});

it('decodeAddress("1001 1st Ave.") should return "1001 1st Avenue"', () => {
  expect(decodeAddress('1001 1st Ave.')).to.equal('1001 1st Avenue');
});

it('decodeAddress("3413 Wood Aly.") should return "3413 Wood Alley"', () => {
  expect(decodeAddress('3413 Wood Aly.')).to.equal('3413 Wood Alley');
});

it('decodeAddress("551 North Center Pkwy.") should return "551 North Center Parkway"', () => {
  expect(decodeAddress('551 North Center Pkwy.')).to.equal('551 North Center Parkway');
});

it('decodeAddress("5051 North Center Parkway") should return "5051 North Center Parkway"', () => {
  expect(decodeAddress('5051 North Center Parkway')).to.equal('5051 North Center Parkway');
});

it('decodeAddress("55 North Center Dr.") should return "55 North Center Drive"', () => {
  expect(decodeAddress('55 North Center Dr.')).to.equal('55 North Center Drive');
});

it('decodeAddress("") should return ""', () => {
  expect(decodeAddress('')).to.equal('');
});

it('decodeAddress("123 Main St. 1001 1st Ave. 505 Floyd Dr.") should return "123 Main Street 1001 1st Avenue 505 Floyd Drive"', () => {
  expect(decodeAddress('123 Main St. 1001 1st Ave. 505 Floyd Dr.')).to.equal('123 Main Street 1001 1st Avenue 505 Floyd Drive');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
