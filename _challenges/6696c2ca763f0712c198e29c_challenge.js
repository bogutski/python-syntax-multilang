// NAMEEN:
// NAMERU:Сколько рулонов обоев надо купить?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию с именем `numberOfWallpapers`, которая принимает параметры:
* `squareWall` – площадь стен в комнате, в квадратных футах;
* `wallpaperWidth` – ширина рулона обоев, в футах.
* `wallpaperLength` – длина рулона обоев, в футах.

Пусть функция возвращает минимальное количество рулонов обоев, которые необходимо купить для ремонта.

```javascript
numberOfWallpapers(20, 5, 5) // 1
numberOfWallpapers(25, 5, 5) // 1
numberOfWallpapers(30, 5, 5) // 2
numberOfWallpapers(35, 5, 5) // 2
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function numberOfWallpapers(squareWall, wallpaperWidth, wallpaperLength) {
  return Math.ceil(squareWall / (wallpaperWidth * wallpaperLength));
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function numberOfWallpapers', () => {
  expect(numberOfWallpapers).to.be.a('function');
});

it('numberOfWallpapers(20, 5, 5) should return 1', () => {
  expect(numberOfWallpapers(20, 5, 5)).to.equal(1);
});

it('numberOfWallpapers(25, 5, 5) should return 1', () => {
  expect(numberOfWallpapers(25, 5, 5)).to.equal(1);
});

it('numberOfWallpapers(30, 5, 5) should return 2', () => {
  expect(numberOfWallpapers(30, 5, 5)).to.equal(2);
});

it('numberOfWallpapers(35, 5, 5) should return 2', () => {
  expect(numberOfWallpapers(35, 5, 5)).to.equal(2);
});

it('numberOfWallpapers(40, 5, 5) should return 2', () => {
  expect(numberOfWallpapers(40, 5, 5)).to.equal(2);
});

it('numberOfWallpapers(45, 10, 5) should return 1', () => {
  expect(numberOfWallpapers(45, 10, 5)).to.equal(1);
});

it('numberOfWallpapers(160, 10, 15) should return 2', () => {
  expect(numberOfWallpapers(160, 10, 15)).to.equal(2);
});

it('numberOfWallpapers(160, 5, 4) should return 8', () => {
  expect(numberOfWallpapers(160, 5, 4)).to.equal(8);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
