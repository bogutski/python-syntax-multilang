// NAMEEN:
// NAMERU:Проверка свойств объекта с двойной вложенностью

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Насколько мы знаем, объекты могут содержать в себе другие объекты. Такие объекты называются вложенными.

Пример:
```javascript
ownerInfo = {
  address: {
    city: 'San Francisco',
    state: 'CA',
  },
   car: {
    make: 'Toyota',
    model: 'Corolla',
  },
}
```
Хотя здесь и присутствуют в общей сложности три объекта, уровней вложенности в примере всего два.
Это потому, что объекты под свойствами `address` и `car` являются объектами одного уровня и находятся внутри объекта `ownerInfo`.

К объектам, вложенным в другие объекты, можно применять те же методы, что и к обычным объектам.
Нужно лишь обратиться к тому свойству, в котором находится интересующий нас объект.

Например, чтобы узнать, содержится ли свойство `make` в объекте `car`, можно ввести любой из этих вариантов:
```javascript
ownerInfo.car.hasOwnProperty("make");
ownerInfo["car"].hasOwnProperty("make");
"make" in ownerInfo.car;
"make" in ownerInfo["car"];
```
При увеличении уровней вложенности лишь удлиняется путь к нужному свойству:
```javascript
ownerInfo.address.state
ownerInfo["car"]["color"]["shade"]
ownerInfo["car"].color["shade"].type
```
Не важно, сколько уровней вложенности, главное прописать правильный путь к нужному свойству.

Напишите функцию `hasDoubleProperty`, которая принимает параметры:
* `doubleObject` - объект с двойной вложенностью;
* `propCheck1` - наименование свойства 1-го уровня вложенности, строка;
* `propCheck2` - наименование свойства 2-го уровня вложенности, строка.

Функция должна возвращать значение свойства `propCheck2`, если выполняются оба условия:
* на уровне объекта `doubleObject` есть свойство `propCheck1`;
* на уровне свойства `propCheck1` есть свойство `propCheck2`.
В противном случае функция должна возвращать строку `No such property: propCheck`, где `propCheck` - наименование свойства, которое не было найдено.

Условия:
* Проверка должна выполняться в следующем порядке: `propCheck1` -> `propCheck2`;
* Если первое свойство не найдено, то дальнейшая проверка прекращается.

Примеры запуска функции:
```javascript
hasDoubleProperty({ first: { second: "mushroom" } }, "first", "second");  // "mushroom"
hasDoubleProperty({ make: { model: "Corolla", generation: "E170" }, year: 2010 }, "make", "generation");  // "E170"
hasDoubleProperty({ make: { model: "Corolla", generation: "E170" }, year: 2010 }, "generation", "make");  // "No such property: generation"
hasDoubleProperty({ make: { model: "Corolla", generation: "E170" }, year: 2010 }, "year", "model");  // "No such property: model"
hasDoubleProperty({ make: { model: "Corolla", generation: "E170" }, year: 2010 }, "color", "model");  // "No such property: color"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hasDoubleProperty(doubleObject, propCheck1, propCheck2) {
  let propName = '';
  if (propCheck1 in doubleObject) {
    if (doubleObject[propCheck1].hasOwnProperty(propCheck2)) {
      return doubleObject[propCheck1][propCheck2];
    } else {
      propName = propCheck2;
    }
  } else {
    propName = propCheck1;
  }
  return `No such property: ${propName}`;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function `hasDoubleProperty`', () => {
  expect(hasDoubleProperty).to.be.a('function');
});

it('hasDoubleProperty({ sun: { moon: "satellite" } }, "sun", "moon")  // "satellite"', () => {
  expect(hasDoubleProperty({ sun: { moon: 'satellite' } }, 'sun', 'moon')).eq(
    'satellite',
  );
});

it('hasDoubleProperty({ black: { white: "color", white2: "color2" }, red: { blue: "color" } }, "black", "white")  // "color"', () => {
  expect(
    hasDoubleProperty(
      { black: { white: 'color', white2: 'color2' }, red: { blue: 'color' } },
      'black',
      'white',
    ),
  ).eq('color');
});

it('hasDoubleProperty({ one: { eleven: 11, twelve: 12 }, two: { twenty: 20, twentyOne: 21 } }, "two", "twenty")  // 20', () => {
  expect(
    hasDoubleProperty(
      { one: { eleven: 11, twelve: 12 }, two: { twenty: 20, twentyOne: 21 } },
      'two',
      'twenty',
    ),
  ).eq(20);
});

it('hasDoubleProperty({ Anaconda: { ___: null } }, "Anaconda", "___")  // null', () => {
  expect(hasDoubleProperty({ Anaconda: { ___: null } }, 'Anaconda', '___')).eq(null);
});

it('hasDoubleProperty({ _123: { "!": "   " } }, "_123", "!")  // "   "', () => {
  expect(hasDoubleProperty({ _123: { '!': '   ' } }, '_123', '!')).eq('   ');
});

it('hasDoubleProperty({ rose: { lily: "flower" } }, "rose", "")  // "No such property: "', () => {
  expect(hasDoubleProperty({ rose: { lily: 'flower' } }, 'rose', '')).eq(
    'No such property: ',
  );
});

it('hasDoubleProperty({ cake: { chocolate: "sweet" } }, "   ", "")  // "No such property:    "', () => {
  expect(hasDoubleProperty({ cake: { chocolate: 'sweet' } }, '   ', '')).eq(
    'No such property:    ',
  );
});

it('hasDoubleProperty({ "%": { " " : "!" } }, "%", " ")  // "!"', () => {
  expect(hasDoubleProperty({ '%': { ' ': '!' } }, '%', ' ')).eq('!');
});

it('hasDoubleProperty({ a: {}, b: {}, c: {} }, "a", "prop")  // "No such property: prop"', () => {
  expect(hasDoubleProperty({ a: {}, b: {}, c: {} }, 'a', 'prop')).eq(
    'No such property: prop',
  );
});

it('hasDoubleProperty({}, "one", "two")  // "No such property: one"', () => {
  expect(hasDoubleProperty({}, 'one', 'two')).eq('No such property: one');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
