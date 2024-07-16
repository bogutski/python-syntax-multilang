// NAMEEN:
// NAMERU:Площадь круга, прямоугольника и треугольника

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишем универсальную функцию `getArea`, которая будет вычислять площадь фигур.

Функция принимает параметры:
* `shape` - название фигуры, для которой необходимо вычислить площадь. Допустимые значения: `circle`, `rectangle`, `triangle`.
* `param1` - первый параметр, необходимый для вычисления площади фигуры. Для круга - это радиус, для прямоугольника - это длина стороны, для треугольника - это длина первой стороны.
* `param2` - второй параметр, необходимый для вычисления площади фигуры. Для круга - это не используется, для прямоугольника - это длина стороны, для треугольника - это длина второй стороны.
* `param3` - третий параметр, необходимый для вычисления площади фигуры. Для круга - это не используется, для прямоугольника - это не используется, для треугольника - это длина третьей стороны.

Если первый параметр не равен `circle`, `rectangle` или `triangle`, то функция должна вернуть строку `Wrong Shape`.

Если первый параметр равен `circle`, то функция должна вернуть площадь круга, вычисленную по формуле `3.14 * (radius ** 2)`.
Если первый параметр равен `rectangle`, то функция должна вернуть площадь прямоугольника, вычисленную по формуле `side1 * side2`.
Если первый параметр равен `triangle`, то функция должна вернуть площадь треугольника, вычисленную по формуле Герона.

Зная длины трех сторон треугольника, можно найти площадь треугольника по формуле Герона:

```javascript
s = (p * (p - a) * (p - b) * (p - c)) ** 0.5
```

где `p` – полупериметр треугольника, равный половине суммы длин трех сторон треугольника, `a`, `b`, `c` - длины сторон треугольника.
Для вычисления полупериметра сложите длины трех сторон треугольника и разделите на 2.

* `** 0.5` – это извлечение квадратного корня.


Примеры запуска функции:
```javascript
getArea('circle', 5); // 78.5
getArea('rectangle', 5, 10); // 50
getArea('triangle', 6, 10, 15); // 20.123058912600737
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function getArea(shape, param1, param2, param3) {
  if (shape === 'circle') {
    return 3.14 * (param1 ** 2);
  }

  if (shape === 'rectangle') {
    return param1 * param2;
  }

  if (shape === 'triangle') {
    const p = (param1 + param2 + param3) / 2;
    return (p * (p - param1) * (p - param2) * (p - param3)) ** 0.5;
  }

  return 'Wrong Shape';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function getArea', () => {
  expect(getArea).to.be.a('function');
});

it('getArea("circle", 5) should return 78.5', () => {
  expect(getArea('circle', 5)).to.be.equal(78.5);
});

it('getArea("circle", 10) should return 314', () => {
  expect(getArea('circle', 10)).to.be.equal(314);
});

it('getArea("rectangle", 5, 10) should return 50', () => {
  expect(getArea('rectangle', 5, 10)).to.be.equal(50);
});

it('getArea("rectangle", 10, 10) should return 100', () => {
  expect(getArea('rectangle', 10, 10)).to.be.equal(100);
});

it('getArea("triangle", 5, 10, 11) should return 24.979991993593593', () => {
  expect(getArea('triangle', 5, 10, 11)).to.be.equal(24.979991993593593);
});

it('getArea("triangle", 3, 4, 5) should return 6', () => {
  expect(getArea('triangle', 3, 4, 5)).to.be.equal(6);
});

it('getArea("oval", 5) should return "Wrong Shape"', () => {
  expect(getArea('oval', 5)).to.be.equal('Wrong Shape');
});

it('getArea("cone", 5) should return "Wrong Shape"', () => {
  expect(getArea('cone', 5)).to.be.equal('Wrong Shape');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
