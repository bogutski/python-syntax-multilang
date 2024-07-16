// NAMEEN:
// NAMERU:Переменная вне функции. Считаем площадь круга

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Познакомимся с переменными, которые создаются вне функций.

И заодно напомним как считается площадь круга.

Создайте переменную `PI` и присвойте ей значение `3.14`.

Потом создайте функцию `circleArea` с одним параметром `radius`.

Внутри функции создайте переменную `area` и присвойте ей значение произведения переменных `PI` и `radius` в квадрате.

Верните значение переменной `area`.

Похожий пример:
```javascript
const TAX = 1.01;

function totalCost(price) {
  return price * TAX ** 2;
}
```

Для возведения в квадрат используйте оператор `**`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun!
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const PI = 3.14;

function circleArea(radius) {
  const area = PI * radius ** 2;
  return area;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function circleArea', () => {
  expect(circleArea).to.be.a('function');
});

it('Function circleArea has one parameter', () => {
  console.log(circleArea.length);
  expect(circleArea.length).to.be.equal(1);
});

it('Function circleArea has one parameter radius', () => {
  // function to string and then to array of arguments
  const args = circleArea.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  console.log(args);
  expect(args).to.be.eql(['radius']);
});

it('Function circleArea contains variable area', () => {
  expect(circleArea.toString().includes('area')).to.be.equal(true);
});

it('Created variable PI', () => {
  expect(PI).equal(3.14);
});

// PI outside function
it('"const PI" is outside function', () => {
  expect(circleArea.toString()).to.not.contain('const PI');
});

it('"let PI" is outside function', () => {
  expect(circleArea.toString()).to.not.contain('let PI');
});

it('Function circleArea returns value for radius 1', () => {
  expect(circleArea(1)).equal(3.14);
});

it('Function circleArea returns correct value for radius 2', () => {
  expect(circleArea(2)).equal(12.56);
});

it('Function circleArea returns correct value for radius 3', () => {
  expect(circleArea(3)).equal(28.26);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
