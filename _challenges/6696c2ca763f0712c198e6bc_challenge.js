// NAMEEN:
// NAMERU: Изменение информации о клиенте. Объекты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `clientInfo` принимает три параметра:
* `obj` – объект.
* `key` – строка с названием ключа.
* `value` – значение, которое необходимо проверить, может быть любого типа.

Проверьте наличие свойства `key` в объекте `obj`.

Если объект `obj` содержит свойство `key`, то замените существующее значение этого свойства на `value`.
Если объект `obj` не содержит свойство `key`, то добавьте это свойство со значением `value`.

Функция должна вернуть объект `obj` с измененными свойствами.

Пример запуска функции:
```javascript
hasProperty({ name: "Helen", lastName: "Rock", age: 15 }, "lastName", "Cash")  // {name: "Helen", lastName: "Cash", age: 15}
hasProperty({ name: "Helen", lastName: "Rock", age: 15 }, "country", "USA")  // {name: "Helen", lastName: "Rock", age: 15, country: USA}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function clientInfo(obj, key, value) {
  obj[key] = value;
  return obj;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function clientInfo', () => {
    expect(clientInfo).to.be.a('function');
});

it(`Function clientInfo({ name: "Helen", lastName: "Rock", age: 15 }, "lastName", "Cash") should return {name: "Helen", lastName: "Cash", age: 15}`, () => {
    expect(clientInfo({name: "Helen", lastName: "Rock", age: 15}, "lastName", "Cash")).to.eql({
        name: "Helen",
        lastName: "Cash",
        age: 15
    });
});

it(`Function clientInfo({ name: "Helen", lastName: "Rock", age: 15 }, "country", "USA") should return {name: "Helen", lastName: "Rock", age: 15, country: USA}`, () => {
    expect(clientInfo({name: "Helen", lastName: "Rock", age: 15}, "country", "USA")).to.eql({
        name: "Helen",
        lastName: "Rock",
        age: 15,
        country: "USA"
    });
});

it(`Function clientInfo({ name: "Helen", lastName: "Rock", age: 15 }, "age", 20) should return {name: "Helen", lastName: "Rock", age: 20}`, () => {
    expect(clientInfo({name: "Helen", lastName: "Rock", age: 15}, "age", 20)).to.eql({
        name: "Helen",
        lastName: "Rock",
        age: 20
    });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
