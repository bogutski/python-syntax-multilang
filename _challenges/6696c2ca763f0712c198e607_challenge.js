// NAMEEN:
// NAMERU:Заполнить объект свойствами

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fillObj`, которая принимает объект и три значения:
* `obj` - объект
* `value1` - значение,
* `value2` - значение,
* `value3` - значение

Добавьте в объект следующие ключи:
* `width` со значением `value1`,
* `height` со значением `value2`,
* `length` со значением `value3`

Если в объекте уже есть один из таких ключей, то оставьте его без изменений.

Функция должна вернуть объект.

Пример запуска функции:
```javascript
fillObj({}, 10, 20, 30);      // { width: 10, height: 20, length: 30 }
fillObj({ width: 10 }, 20, 30, 40);      // { width: 10, height: 30, length: 40 }
fillObj({ width: 10, height: 20 }, 20, 30, 40);      // { width: 10, height: 20, length: 40 }
```
Похожий пример:
```javascript
function fillCarObj(car, "red", "Camry", 2020) {
    if (!car.color) car.color = "red";
    if (!car.model) car.model = "Camry";
    if (!car.year) car.year = 2020;
    return car;
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
function fillObj(obj, value1, value2, value3) {
  if (!obj.width) obj.width = value1;
  if (!obj.height) obj.height = value2;
  if (!obj.length) obj.length = value3;
  return obj;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function fillObj', () => {
  expect(fillObj).to.be.a('function');
});

it('fillObj({ }, 5, 15, 30) return { width: 5, height: 15, length: 30 }', () => {
  expect(fillObj({}, 5, 15, 30)).to.eql({ width: 5, height: 15, length: 30 });
});

it('fillObj({ width: 10 }, 20, 30, 40) return { width: 10, height: 30, length: 40 }', () => {
  expect(fillObj({ width: 10 }, 20, 30, 40)).to.eql({
    width: 10,
    height: 30,
    length: 40,
  });
});

it('fillObj({ width: 10, height: 20 }, 20, 30, 40) return { width: 10, height: 20, length: 40 }', () => {
  expect(fillObj({ width: 10, height: 20 }, 20, 30, 40)).to.eql({
    width: 10,
    height: 20,
    length: 40,
  });
});

it('fillObj({ width: 10, height: 20, length: 30 }, 20, 30, 40) return { width: 10, height: 20, length: 30 }', () => {
  expect(fillObj({ width: 10, height: 20, length: 30 }, 20, 30, 40)).to.eql({
    width: 10,
    height: 20,
    length: 30,
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
