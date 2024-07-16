// NAMEEN:
// NAMERU:Вывести номера телефонов из массива

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Номера телефонов содержат 10 цифр. Напишите функцию `onlyPhoneNumbers`, которая принимает массив строк в качестве параметра.

Функция должна вернуть новый массив, содержащий только номера телефонов.

При этом в качестве элементов массива могут приходить строки, такие как даты рождения, которые тоже состоят из 10 символов,
но не являются номерами телефонов. Они содержат точки в строке. Их не нужно учитывать.

Если строка состоит из двух слов (и длина этой строки также равна 10), то такая строка не является номером телефона.

Пример запуска функции:
```javascript
onlyPhoneNumbers(['1234567890', '123456789', '12345678901']); // ['1234567890']
onlyPhoneNumbers(['1234567890', '14.04.1980', 'Address is', '1234567890']); // ['1234567890', '1234567890']
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function onlyPhoneNumbers(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 10) {continue;}
    if (arr[i].includes('.')||arr[i].includes(' ')) {continue;}
      newArr.push(arr[i]);
  }
  return newArr;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function onlyPhoneNumbers', () => {
  expect(onlyPhoneNumbers).to.be.a('function');
});

it('function onlyPhoneNumbers(["1234567890", "123456789", "12345678901"]) should return ["1234567890"]', () => {
  expect(onlyPhoneNumbers(["1234567890", "123456789", "12345678901"])).to.deep.equal(["1234567890"]);
});

it('function onlyPhoneNumbers(["1234567890", "14.04.1980", Address is, "1234567890"]) should return ["1234567890", "1234567890"]', () => {
  expect(onlyPhoneNumbers(["1234567890", '14.04.1980', 'Address is', "1234567890"])).to.deep.equal(["1234567890", "1234567890"]);
});

it('function onlyPhoneNumbers(["1234567890", "7938469021", "Peter Smit", "12890"]) should return ["1234567890", "7938469021"]', () => {
  expect(onlyPhoneNumbers(["1234567890", "7938469021", "Peter Smit", "12890"])).to.deep.equal(["1234567890", "7938469021"]);
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
