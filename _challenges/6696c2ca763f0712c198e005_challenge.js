// NAMEEN:
// NAMERU:Переменные и функции. Объем комнаты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Вы можете создавать и использовать переменные внутри и вне функций.

Сейчас мы с вами создадим функцию, которая будет считать объем комнаты.

Высота комнаты всегда одинаковая - 10 футов, ширина и длина комнаты будут разными.

Создайте функцию `roomVolume` с двумя параметрами `width` и `length`.

Внутри функции создайте переменную `height` и присвойте ей значение 10. Используйте ключевое слово `const`.

Внутри функции создайте переменную `volume` и присвойте ей значение произведения переменных `width`, `length` и `height`. Используйте ключевое слово `const`.

Верните значение переменной `volume` из функции.

Похожий пример:
```javascript
function totalPrice(quantity, price) {
  const tax = 1.08;
  const total = quantity * price * tax;
  return total;
}
```

Придерживайтесь правил форматирования кода.

Отступы, пробелы, точки с запятой должны быть такими же, как в примере выше.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun!
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function roomVolume(width, length) {
  const height = 10;
  const volume = width * length * height;
  return volume;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function roomVolume', () => {
  expect(roomVolume).to.be.a('function');
});

it('Function roomVolume has two parameters', () => {
  expect(roomVolume.length).to.be.equal(2);
});

it('Function roomVolume returns a number', () => {
  expect(roomVolume(10, 10)).to.be.a('number');
});

it('Function roomVolume returns correct value', () => {
  expect(roomVolume(10, 10)).to.be.equal(1000);
});

it('Function roomVolume returns correct value', () => {
  expect(roomVolume(5, 5)).to.be.equal(250);
});

it('Function roomVolume contains variable height', () => {
  expect(roomVolume.toString().includes('const height')).to.be.equal(true);
});

it('Function roomVolume contains variable volume', () => {
  expect(roomVolume.toString().includes('const volume')).to.be.equal(true);
});

it('Function roomVolume has two parameters width, length', () => {
  // function to string and then to array of arguments
  const args = roomVolume.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  expect(args).to.be.eql(['width', 'length']);
});

it('Function roomVolume has right formatting', () => {
  expect(roomVolume.toString().includes('const height = 10;')).to.be.equal(true);
  expect(roomVolume.toString().includes('const volume = width * length * height;')).to.be.equal(true);
  expect(roomVolume.toString().includes('return volume;')).to.be.equal(true);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
