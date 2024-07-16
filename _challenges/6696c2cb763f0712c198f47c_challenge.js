// NAMEEN:
// NAMERU:Преобразование температур

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `convertCelsiusToFahrenheit`, которая принимает массив температур в градусах Цельсия и возвращает новый массив, где каждая температура преобразована в градусы Фаренгейта.

Используйте метод `map()` для этого преобразования.

Формула для конвертации: Фаренгейт = (Цельсий * 9/5) + 32.


Пример запуска функции:
```javascript
convertCelsiusToFahrenheit([0, 25, 30]);    // [ 32, 77, 86 ]
convertCelsiusToFahrenheit([-20, -10, -5]); // [ -4, 14, 23 ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function convertCelsiusToFahrenheit(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function convertCelsiusToFahrenheit(arr) {
  return arr.map(el => (el * 9 / 5) + 32);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function convertCelsiusToFahrenheit', () => {
  expect(convertCelsiusToFahrenheit).to.be.a('function');
});

it('Function convertCelsiusToFahrenheit should include method map()', () => {
  const res = convertCelsiusToFahrenheit.toString()
  expect(res).to.include('.map(')
});

it('convertCelsiusToFahrenheit([]) should return []', () => {
  expect(convertCelsiusToFahrenheit([])).to.deep.equal([]);
});

it('convertCelsiusToFahrenheit([-20, -10, 0]) should return [-4, 14, 32]', () => {
  expect(convertCelsiusToFahrenheit([-20, -10, 0])).to.deep.equal([-4, 14, 32]);
});

it('convertCelsiusToFahrenheit([0.5, 25.3, 30.7]) should return [32.9, 77.54, 87.26]', () => {
  const celsiusTemps = [0.5, 25.3, 30.7];
  const expectedFahrenheit = [32.9, 77.54, 87.26];
  expect(convertCelsiusToFahrenheit(celsiusTemps).map(temp => parseFloat(temp.toFixed(2)))).to.deep.equal(expectedFahrenheit);
});

it('convertCelsiusToFahrenheit([100]) should return [212]', () => {
  const celsiusTemps = [100];
  const expectedFahrenheit = [212];
  expect(convertCelsiusToFahrenheit(celsiusTemps)).to.deep.equal(expectedFahrenheit);
});

it('convertCelsiusToFahrenheit([-30, -10, 0, 20, 40]) should return [-22, 14, 32, 68, 104]', () => {
  const celsiusTemps = [-30, -10, 0, 20, 40];
  const expectedFahrenheit = [-22, 14, 32, 68, 104];
  expect(convertCelsiusToFahrenheit(celsiusTemps)).to.deep.equal(expectedFahrenheit);
});

it('convertCelsiusToFahrenheit([0.555, 25.123, 30.987]) should return [32.999, 77.2214, 87.7756]', () => {
  const celsiusTemps = [0.555, 25.123, 30.987];
  const expectedFahrenheit = [32.999, 77.2214, 87.7756];
  expect(convertCelsiusToFahrenheit(celsiusTemps).map(temp => parseFloat(temp.toFixed(2)))).to.deep.equal(expectedFahrenheit.map(temp => parseFloat(temp.toFixed(2))));
});

it('convertCelsiusToFahrenheit([-15]) should return [5]', () => {
  const celsiusTemps = [-15];
  const expectedFahrenheit = [5];
  expect(convertCelsiusToFahrenheit(celsiusTemps)).to.deep.equal(expectedFahrenheit);
});

it('convertCelsiusToFahrenheit([0]) should return [32]', () => {
  const celsiusTemps = [0];
  const expectedFahrenheit = [32];
  expect(convertCelsiusToFahrenheit(celsiusTemps)).to.deep.equal(expectedFahrenheit);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
