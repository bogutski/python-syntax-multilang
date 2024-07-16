// NAMEEN:
// NAMERU:Расчет объема цилиндра с особым округлением

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Для расчета объема цилиндра используется формула: `V = π * r^2 * h`, где `V` – объем, `r` – радиус основания, `h` – высота цилиндра.

`r^2` – это `r` в квадрате.

Напишите функцию `cylinderVolume`, которая принимает два аргумента: `r` и `h` и возвращает объем цилиндра.

Используйте `Math.PI` для получения числа `π`.

Результат округлите по следующим правилам:
* если дробная часть числа меньше или равна 0.3, то округлите в меньшую сторону;
* если дробная часть числа больше 0.3 и меньше 0.7, то пусть дробная часть числа будет равна 0.5;
* если дробная часть числа больше или равна 0.7, то округлите в большую сторону.

Примеры запуска функции:
```javascript
cylinderVolume(1, 1) // 3
cylinderVolume(2, 1) // 12.50
cylinderVolume(2, 2) // 25
cylinderVolume(4, 2) // 100


```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function cylinderVolume(r, h) {
  const volume = Math.PI * r ** 2 * h;
  const decimal = volume - Math.floor(volume);

  if (decimal <= 0.3) {
    return Math.floor(volume);
  } else if (decimal > 0.3 && decimal < 0.7) {
    return Math.floor(volume) + 0.5;
  } else {
    return Math.ceil(volume);
  }
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function cylinderVolume', () => {
  expect(cylinderVolume).to.be.a('function');
});

it('cylinderVolume(1, 1) should return 3', () => {
  expect(cylinderVolume(1, 1)).to.equal(3);
});

it('cylinderVolume(2, 1) should return 12.50', () => {
  expect(cylinderVolume(2, 1)).to.equal(12.5);
});

it('cylinderVolume(2, 2) should return 25', () => {
  expect(cylinderVolume(2, 2)).to.equal(25);
});

it('cylinderVolume(4, 2) should return 100.5', () => {
  expect(cylinderVolume(4, 2)).to.equal(100.5);
});

it('cylinderVolume(1, 2) should return 6', () => {
  expect(cylinderVolume(1, 2)).to.equal(6);
});

it('cylinderVolume(1, 3) should return 9.5', () => {
  expect(cylinderVolume(1, 3)).to.equal(9.5);
});

it('cylinderVolume(1, 4) should return 12.5', () => {
  expect(cylinderVolume(1, 4)).to.equal(12.5);
});

it('cylinderVolume(1, 5) should return 16', () => {
  expect(cylinderVolume(1, 5)).to.equal(16);
});

it('cylinderVolume(8, 6) should return 1206.5', () => {
  expect(cylinderVolume(8, 6)).to.equal(1206.5);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
