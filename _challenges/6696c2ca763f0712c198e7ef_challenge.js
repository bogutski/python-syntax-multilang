// NAMEEN:
// NAMERU:Создание и добавление нового объекта в массив объектов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте ошибки в коде функции `addObjectCombined`, которая принимает массив из трех объектов `arr`.

* Каждый элемент массива `arr` имеет два свойства: `subjectName` и `averageScore`.
* Значение свойства `subjectName` - это строка, а значение свойства `averageScore` - число.
* Оба свойства обязательно присутствуют в каждом элементе массива `arr` и имеют непустые значения.

Пример массива:
```javascript
const arr = [
  { subjectName: 'physics', averageScore: 55 },
  { subjectName: 'algebra', averageScore: 71 },
  { subjectName: 'geometry', averageScore: 88 }
];
```

Функция создает новый объект `newObj`, добавляет его в начало массива `arr` и возвращает модифицированный массив `arr`.

Новый объект `newObj`, содержит три свойства - по одному свойству на каждый элемент массива.
Именем каждого свойства `newObj` является значение свойства `subjectName` соответствующего элемента массива, а значением - значения свойства `averageScore` этого же элемента.

Пример создания нового объекта `newObj` на основе информации, содержащейся в массиве `arr`:

```javascript
const newObj = {
  physics: 55,
  algebra: 71,
  geometry: 88
};

Пример нового массива с добавленным объектом `newObj`:

```javascript
const arr = [
  { physics: 55, algebra: 71, geometry: 88 },
  { subjectName: 'physics', averageScore: 55 },
  { subjectName: 'algebra', averageScore: 71 },
  { subjectName: 'geometry', averageScore: 88 }
];
```
Пример добавления нового свойства в объект `newObj` на основе информации, содержащейся в первом элементе массива `arr1`:

```javascript
const array = [ { subjectName: 'physics', averageScore: 90 },
               { subjectName: 'algebra', averageScore: 85 },
               { subjectName: 'geometry', averageScore: 100 } ];
const newObj = {};
newObj[array[0].subjectName] = array[0].averageScore;
console.log(newObj); // newObj = { physics: 90 }
```

1) Создается новое свойство-ключ в объекте `newObj` с именем, которое является значением ключа `subjectName` первого объекта массива `array`.

2) Значение этого свойства равно значению свойства `averageScore` первого элемента массива `array`.

3) Синтаксис `[]` позволяет использовать переменную в качестве ключа объекта.

Пример запуска функции:

```javascript
const array = [
  { subjectName: 'history', averageScore: 75 },
  { subjectName: 'geography', averageScore: 82 },
  { subjectName: 'economics', averageScore: 56 }
];

addObjectCombined(array); // [
  { history: 75, geography: 82, economics: 56 },
  { subjectName: 'history', averageScore: 75 },
  { subjectName: 'geography', averageScore: 82 },
  { subjectName: 'economics', averageScore: 56 }
];
```
В коде функции `addObjectCombined` есть 4 ошибки. Найдите и исправьте их.

Внимательно изучите, как работает функция, запустите ее в песочнице с приведенным в примере массивом объектов и сравните результаты.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
functon addObjectCombined(arr1) {
  const newObj = {};
  newObj[arr[0].subjectName] = arr[0].averageScore;
  newObj[arr[1].subjectName] = arr[1].averageScore;
  newObj[arr[2].subjectName] = arr[2].averageScore;
  arr.shift(newObj);
  return arr1;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addObjectCombined(arr) {
  const newObj = {};
  newObj[arr[0].subjectName] = arr[0].averageScore;
  newObj[arr[1].subjectName] = arr[1].averageScore;
  newObj[arr[2].subjectName] = arr[2].averageScore;
  arr.unshift(newObj);
  return arr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addObjectCombined', () => {
  expect(addObjectCombined).to.be.a('function');
});

it('addObjectCombined([ { subjectName: "physics", averageScore: 67}, { subjectName: "algebra", averageScore: 81 }, { subjectName: "geometry", averageScore: 98 } ]) should return ' +
  '[ { physics: 67, algebra: 81, geometry: 98 }, { subjectName: "physics", averageScore: 67}, { subjectName: "algebra", averageScore: 81 }, { subjectName: "geometry", averageScore: 98 } ]', () => {
  expect(addObjectCombined([ { subjectName: "physics", averageScore: 67},
                                 { subjectName: "algebra", averageScore: 81 },
                                 { subjectName: "geometry", averageScore: 98 } ])).to.deep.equal(
                                   [ { physics: 67, algebra: 81, geometry: 98 },
                                     { subjectName: "physics", averageScore: 67},
                                     { subjectName: "algebra", averageScore: 81 },
                                     { subjectName: "geometry", averageScore: 98 } ]);
});

it('addObjectCombined([ { subjectName: "history", averageScore: 55}, { subjectName: "geography", averageScore: 71 }, { subjectName: "geometry", averageScore: 88 } ]) should return ' +
  '[ { history: 55, geography: 71, geometry: 88 }, { subjectName: "history", averageScore: 55}, { subjectName: "geography", averageScore: 71 }, { subjectName: "geometry", averageScore: 88 } ]', () => {
  expect(addObjectCombined([ { subjectName: "history", averageScore: 55},
                                  { subjectName: "geography", averageScore: 71 },
                                  { subjectName: "geometry", averageScore: 88 } ])).to.deep.equal(
                                    [ { history: 55, geography: 71, geometry: 88 },
                                      { subjectName: "history", averageScore: 55},
                                      { subjectName: "geography", averageScore: 71 },
                                      { subjectName: "geometry", averageScore: 88 } ]);
});


it('addObjectCombined([ { subjectName: "physics", averageScore: 92}, { subjectName: "algebra", averageScore: 86 }, { subjectName: "geometry", averageScore: 60 } ]) should return ' +
  '[ { physics: 92, algebra: 86, geometry: 60 }, { subjectName: "physics", averageScore: 92}, { subjectName: "algebra", averageScore: 86 }, { subjectName: "geometry", averageScore: 60 } ]', () => {
  expect(addObjectCombined([ { subjectName: "physics", averageScore: 92},
                                  { subjectName: "algebra", averageScore: 86 },
                                  { subjectName: "geometry", averageScore: 60 } ])).to.deep.equal(
                                    [ { physics: 92, algebra: 86, geometry: 60 },
                                      { subjectName: "physics", averageScore: 92},
                                      { subjectName: "algebra", averageScore: 86 },
                                      { subjectName: "geometry", averageScore: 60 } ]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
