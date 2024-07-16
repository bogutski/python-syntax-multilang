// NAMEEN:
// NAMERU:Гипотенуза в прямоугольном треугольнике

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Имеется прямоугольный треугольник.

Известны значения его катетов `a` и `b`.

Напишите функцию `hypotenuse`, которая принимает два параметра — длины катетов, и возвращает длину гипотенузы.

Вам поможет Теорема Пифагора: `Квадрат гипотенузы равен сумме квадратов катетов.`

```javascript
a * a + b * b = c * c // где 'а' и 'b' — катеты, 'c' — гипотенуза.
```

Чтобы найти гипотенузу, нужно взять квадратный корень из суммы квадратов катетов.
```javascript
c = (a * a + b * b) ** 0.5;
```

Примеры запуска функции:
```javascript
hypotenuse(3, 4); // 5
hypotenuse(5, 12); // 13
hypotenuse(1, 1); // 1.4142135623730951
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function hyp(a, b){
  return
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function hypotenuse(a, b){
  return (a * a + b * b) ** 0.5;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function hypotenuse', () => {
  expect(hypotenuse).to.be.a('function');
});

it('Function hypotenuse returns correct result for arguments `3, 4', () => {
  expect(hypotenuse(3, 4)).eq(5);
});

it('Function hypotenuse returns correct result for arguments `5, 12', () => {
  expect(hypotenuse(5, 12)).eq(13);
});

it('Function hypotenuse returns correct result for arguments `21, 20', () => {
  expect(hypotenuse(21, 20)).eq(29);
});

it('Function hypotenuse returns correct result for arguments `1, 1', () => {
  expect(hypotenuse(1, 1)).eq(1.4142135623730951);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
