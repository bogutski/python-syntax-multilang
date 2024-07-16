// NAMEEN:
// NAMERU:Замена почтового индекса. Объекты.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `clientInfo` принимает два параметра:
* `address` – объект, содержащий информацию об адресе
* `postalCode` – почтовый индекс, строка

Объект `address` имеет следующую структуру:
* `flat` – номер квартиры, строка
* `city` – город, строка
* `country` – страна, строка.

Свойство `flat` нам не нужно, но в объекте не хватает почтового индекса. Необходимо исправить объект: удалить свойство
`flat` и добавить свойство `postalCode` со значением `postalCode`.

Функция должна вернуть измененный объект `address`

Пример запуска функции:
```javascript
clientInfo({
flat: '35',
city: 'London',
country: 'Great Britain'},
'NW1 6XE') //
{city: 'London',
country: 'Great Britain',
postalCode: 'NW1 6XE'}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function clientInfo(address, postalCode) {
  address.postalCode = postalCode;
  delete address.flat;
  return address;
}
// SOLUTIONEND

// OPENTESTSSTART
it(`created function clientInfo`, () => {
  expect(clientInfo).to.be.a(`function`);
});

it(`clientInfo({flat: '1', city: 'London', country: 'Great Britain'}, 'NW1 6XE') should return {city: 'London', country: 'Great Britain', postalCode: 'NW1 6XE'}`, () => {
  expect(
    clientInfo({ flat: '1', city: 'London', country: 'Great Britain' }, 'NW1 6XE'),
  ).eql({ city: 'London', country: 'Great Britain', postalCode: 'NW1 6XE' });
});

it(`clientInfo({flat: '35', city: 'Los Angeles', country: 'USA'}, '90210') should return {city: 'Los Angeles', country: 'USA', postalCode: '90210'}`, () => {
  expect(clientInfo({ flat: '35', city: 'Los Angeles', country: 'USA' }, '90210')).eql({
    city: 'Los Angeles',
    country: 'USA',
    postalCode: '90210',
  });
});

it(`clientInfo({flat: '453', city: 'Paris', country: 'France'}, '75001') should return {city: 'Paris', country: 'France', postalCode: '75001'}`, () => {
  expect(clientInfo({ flat: '453', city: 'Paris', country: 'France' }, '75001')).eql({
    city: 'Paris',
    country: 'France',
    postalCode: '75001',
  });
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
