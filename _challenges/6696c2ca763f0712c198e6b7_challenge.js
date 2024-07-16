// NAMEEN:
// NAMERU:Вместимость склада. Объект

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Существует склад, на котором хранятся различные товары. Склад имеет ограниченную вместимость.

Создайте функцию `warehouseCapacity`, которая принимает три параметра:
* `capacity` – вместимость склада, число
* `productExist` – количество товара, которое уже находится на складе, число
* `productIncoming` – количество товара, которое прибывает на склад, число

Необходимо вернуть объект, который содержит следующие свойства:
* `warehouseAvailability` – число, которое показывает, сколько свободного места было на складе до момента поступления нового товара
* `productIncoming` – количество товара, которое прибывает на склад, число
* `warehouseCapacity` – число в процентах, которое показывает, сколько свободного места осталось на складе

Для округления процентов используйте `Math.round()`.

Пример запуска функции:
```javascript
warehouseCapacity(130, 50, 17) // {warehouseAvailability: 80, productIncoming: 17, warehouseCapacity: 48}
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function warehouseCapacity(capacity, productExist, productIncoming) {
  const warehouseAvailability = capacity - productExist;
  const updatedAvailable = capacity - (productExist + productIncoming);
  const warehouseCapacity = Math.round(updatedAvailable / capacity * 100);
  return {
    warehouseAvailability,
    productIncoming,
    warehouseCapacity,
  };
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function warehouseCapacity', () => {
  expect(warehouseCapacity).to.be.a('function');
});

it('warehouseCapacity(100, 50, 10) return { warehouseAvailability: 50, productIncoming: 10, warehouseCapacity: 40}', () => {
  expect(warehouseCapacity(100, 50, 10)).to.be.eql({
    warehouseAvailability: 50,
    productIncoming: 10,
    warehouseCapacity: 40,
  });
});

it('warehouseCapacity(120, 30, 70) return { warehouseAvailability: 90, productIncoming: 70, warehouseCapacity: 17}', () => {
  expect(warehouseCapacity(120, 30, 70)).to.be.eql({
    warehouseAvailability: 90,
    productIncoming: 70,
    warehouseCapacity: 17,
  });
});

it('warehouseCapacity(100, 0, 0) return { warehouseAvailability: 100, productIncoming: 0, warehouseCapacity: 100}', () => {
  it
  expect(warehouseCapacity(100, 0, 0)).to.be.eql({
    warehouseAvailability: 100,
    productIncoming: 0,
    warehouseCapacity: 100,
  });
});

it('warehouseCapacity(200, 50, 50) return { warehouseAvailability: 150, productIncoming: 50, warehouseCapacity: 50}', () => {
  expect(warehouseCapacity(200, 50, 50)).to.be.eql({
    warehouseAvailability: 150,
    productIncoming: 50,
    warehouseCapacity: 50,
  });
});

it(`warehouseCapacity(130, 50, 17) return { warehouseAvailability: 80, productIncoming: 17, warehouseCapacity: 48}`, () => {
    expect(warehouseCapacity(130, 50, 17)).to.be.eql({
        warehouseAvailability: 80,
        productIncoming: 17,
        warehouseCapacity: 48,
    });
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
