// NAMEEN:
// NAMERU:Говорящий термометр

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Сенсор термометра считывает температуру воздуха в градусах Цельсия.

Напишите функцию `speakingsThermometer`, которая принимает один параметр - температуру в градусах Цельсия.

В процессе работы функция переводит температуру в градусах Цельсия в градусы Фаренгейта и возвращает строку в зависимости от температуры:

- если температура меньше либо равна 32 градусов Фаренгейта, то функция возвращает строку `32 it is freezing!`;
- если температура меньше либо равна 50 градусов Фаренгейта, то функция возвращает строку `50 it is cold!`;
- если температура меньше либо равна 68 градусов Фаренгейта, то функция возвращает строку `68 it is warm!`;
- если температура меньше либо равна 86 градусов Фаренгейта, то функция возвращает строку `85 it is hot!`;
- если температура больше 86 градусов Фаренгейта, то функция возвращает строку `87 it is burning!`.

Вместо цифр `32`, `50`, `68`, `85`, `87` возвращаемой строки должна быть температура в градусах Фаренгейта.

Примеры работы функции:
```javascript
speakingsThermometer(0); // 32 it is freezing!
speakingsThermometer(10); // 50 it is cold!
speakingsThermometer(20); // 68 it is warm!
speakingsThermometer(30); // 85 it is hot!
speakingsThermometer(40); // 87 it is burning!
```

Для перевода температуры из градусов Цельсия в градусы Фаренгейта используйте формулу: Градусы Фаренгейта = Градусы Цельсия * 1.8 + 32.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function speakingsThermometer(temperature) {
  const fahrenheit = temperature * 1.8 + 32;
  if (fahrenheit <= 32) return `${fahrenheit} it is freezing!`;
  else if (fahrenheit <= 50) return `${fahrenheit} it is cold!`;
  else if (fahrenheit <= 68) return `${fahrenheit} it is warm!`;
  else if (fahrenheit <= 86) return `${fahrenheit} it is hot!`;
  return `${fahrenheit} it is burning!`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function speakingsThermometer', () => {
  expect(speakingsThermometer).to.be.a('function');
});
it('speakingsThermometer(-10) should return 14 it is freezing!', () => {
  expect(speakingsThermometer(-10)).to.be.equal('14 it is freezing!');
});

it('speakingsThermometer(0) should return 32 it is freezing!', () => {
  expect(speakingsThermometer(0)).to.be.equal('32 it is freezing!');
});

it('speakingsThermometer(10) should return 50 it is cold!', () => {
  expect(speakingsThermometer(10)).to.be.equal('50 it is cold!');
});

it('speakingsThermometer(20) should return 68 it is warm!', () => {
  expect(speakingsThermometer(20)).to.be.equal('68 it is warm!');
});

it('speakingsThermometer(30) should return 86 it is hot!', () => {
  expect(speakingsThermometer(30)).to.be.equal('86 it is hot!');
});

it('speakingsThermometer(40) should return 104 it is burning!', () => {
  expect(speakingsThermometer(40)).to.be.equal('104 it is burning!');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
