// NAMEEN:
// NAMERU:Исправьте ошибки в функции. Конкатенация адреса с форматированием

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
В функции есть опечатки, исправьте их.


Пример вызова функции:
```javascript
addressFormat('NY', '10001', '1', '40.7128', '74.0060');
```
Должна вернуться строка: `NY 10001 // 1 (40.7128 - 74.0060)`
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function addressFormat(cityCode, zipCode, homeNumber, lat, lng)
  return cityCode + ' ' + zipCode  //  homeNumber + ' (' + lat + ' - ' + lng + ')';
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addressFormat(cityCode, zipCode, homeNumber, lat, lng) {
  return cityCode + ' ' + zipCode + ' // ' + homeNumber + ' (' + lat + ' - ' + lng + ')';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function addressFormat', () => {
  expect(addressFormat).to.be.a('function');
});

it('Function addressFormat returns correct string', () => {
  expect(addressFormat('NY', '10001', '1', '40.7128', '74.0060')).to.equal('NY 10001 // 1 (40.7128 - 74.0060)');
});

it('Function addressFormat returns correct string', () => {
  expect(addressFormat('SF', '50456', '756', '5.7128', '4.0060')).to.equal('SF 50456 // 756 (5.7128 - 4.0060)');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
