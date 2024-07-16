// NAMEEN:
// NAMERU:Исправь адреса

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `fixAddress`, которая принимает один параметр:
* объект `address` с информацией об адресе, в котором нужно исправить ошибки.

В объекте `address` хранится информация об адресе:
* `state` - штат, написан в нижнем регистре, например `ma`, строка
* `zip` - почтовый индекс, написан с пробелами в начале и/или в конце строки, например `  03456  `.

Функция должна вернуть объект `address`, в котором:
* `state` - штат, написан в верхнем регистре, например `MA`
* `zip` - почтовый индекс, написан без пробелов в начале и/или в конце строки, например `03456`.

Пример запуска функции:
```javascript
fixAddress({ state: 'ma', zip: '  03456  ' })
// { state: 'MA', zip: '03456' }
```
Похожий пример:
```javascript
fixPerson({ name: 'john', age: ' 20  ' })
// { name: 'JOHN', age: '20' }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function fixAddress(address) {
  address.state = address.state.toUpperCase();
  address.zip = address.zip.trim();
  return address;
}
// SOLUTIONEND


// OPENTESTSSTART
  it('Created function fixAddress', () => {
    expect(fixAddress).to.be.a('function');
  });

  it('fixAddress should return object', () => {
    expect(fixAddress({ state: 'ma', zip: '  03456  ' })).to.be.an('object');
  });

  it('fixAddress should return object with correct state and zip', () => {
    expect(fixAddress({ state: 'ma', zip: '  01245' })).to.eql({ state: 'MA', zip: '01245' });
  });

  it('fixAddress should return object with correct state and zip', () => {
    expect(fixAddress({ state: 'ca', zip: '98787  ' })).to.eql({ state: 'CA', zip: '98787' });
  });

  it('fixAddress should return object with correct state and zip', () => {
    expect(fixAddress({ state: 'ny', zip: ' 23654  ' })).to.eql({ state: 'NY', zip: '23654' });
  });

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
