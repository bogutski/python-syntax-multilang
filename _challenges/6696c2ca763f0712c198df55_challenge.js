// NAMEEN:
// NAMERU:Проверьте правильно ли написаны функции. Исправьте ошибки, если они есть.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В программе должны быть 4 функции `address`, `driverName`, `totalAmount`, `deliveryTime`.

Функция `address` должна возвращать строку `533 Delia dr, Commerce, 30529 GA`.

Функция `driverName` должна возвращать строку `Kroistiannsen Jouahn`.

Функция `totalAmount` должна возвращать число `1028`.

Функция `deliveryTime` должна возвращать строку `2:30 PM`.

Будьте внимательны к мелочам.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function addres() {
  return '535 Delia dr. Comerce, 30329, GA';
}

function driverName() {
  return 'Krostiannsen Juoahn';
}

function tota1Amount() {
  retyrn 1O28;
}

function deliverTime() {
  return '2:3O PM';
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function address() {
  return '533 Delia dr, Commerce, 30529 GA';
}

function driverName() {
  return 'Kroistiannsen Jouahn';
}

function totalAmount() {
  return 1028;
}

function deliveryTime() {
  return '2:30 PM';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function address', () => {
  expect(address).to.be.a('function');
});

it('Created function driverName', () => {
  expect(driverName).to.be.a('function');
});

it('Created function totalAmount', () => {
  expect(totalAmount).to.be.a('function');
});

it('Created function deliveryTime', () => {
  expect(deliveryTime).to.be.a('function');
});

it('Function address returns correct value', () => {
  expect(address()).eq('533 Delia dr, Commerce, 30529 GA');
});

it('Function driverName returns correct value', () => {
  expect(driverName()).eq('Kroistiannsen Jouahn');
});

it('Function totalAmount returns correct value', () => {
  expect(totalAmount()).eq(1028);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
