// NAMEEN:
// NAMERU:Погода. Тепло или холодно?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `currentWeather`, которая принимает один параметр:
* объект `weather` с информацией о погоде.

Объект `weather` имеет два свойства:
* `temperature` - температура в градусах Цельсия, число,
* `condition` - состояние погоды, пустая строка.

Функция должна изменить свойство `condition` в объекте `weather` следующим образом:

* Если температура больше или равна 20 градусам Цельсия, то состояние погоды должно измениться на `warm`,
* Если температура больше или равна 10 и меньше 20 градусов Цельсия, то состояние погоды должно измениться на `cool`,
* Если температура меньше 10 градусов Цельсия, то состояние погоды должно измениться на `cold`.

Функция должна вернуть обновленный объект `weather`.

Пример запуска функции:
```javascript
currentWeather({temperature: 10, condition: ''});
// { temperature: 10, condition: 'cool' }

currentWeather({temperature: 7, condition: ''});
// { temperature: 7, condition: 'cold' }

currentWeather({temperature: 25, condition: ''});
// { temperature: 25, condition: 'warm' }
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function currentWeather(weather) {
  if (weather.temperature >= 20) {
    weather.condition = 'warm';
  } else if (weather.temperature >= 10) {
    weather.condition = 'cool';
  } else {
    weather.condition = 'cold';
  }
  return weather;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function currentWeather', () => {
  expect(currentWeather).to.be.a('function');
});

it("currentWeather({temperature: 10, condition: ''}) should return { temperature: 10, condition: 'cool' }", () => {
  expect(currentWeather({ temperature: 10, condition: '' })).eql({
    temperature: 10,
    condition: 'cool',
  });
});

it("currentWeather({temperature: 7, condition: ''}) should return { temperature: 7, condition: 'cold' }", () => {
  expect(currentWeather({ temperature: 7, condition: '' })).eql({
    temperature: 7,
    condition: 'cold',
  });
});

it("currentWeather({temperature: 25, condition: ''}) should return { temperature: 25, condition: 'warm' }", () => {
  expect(currentWeather({ temperature: 25, condition: '' })).eql({
    temperature: 25,
    condition: 'warm',
  });
});

it("currentWeather({temperature: 0, condition: ''}) should return { temperature: 0, condition: 'cold' }", () => {
  expect(currentWeather({ temperature: 0, condition: '' })).eql({
    temperature: 0,
    condition: 'cold',
  });
});

it("currentWeather({temperature: 15, condition: ''}) should return { temperature: 15, condition: 'cool' }", () => {
  expect(currentWeather({ temperature: 15, condition: '' })).eql({
    temperature: 15,
    condition: 'cool',
  });
});

it("currentWeather({temperature: 20, condition: ''}) should return { temperature: 20, condition: 'warm' }", () => {
  expect(currentWeather({ temperature: 20, condition: '' })).eql({
    temperature: 20,
    condition: 'warm',
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
