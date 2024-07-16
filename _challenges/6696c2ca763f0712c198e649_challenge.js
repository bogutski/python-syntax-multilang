// NAMEEN:
// NAMERU:Прогноз погоды. Объекты.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `averageTemperature` принимает объект `weather`, который содержит информацию о погоде в разные сезоны.

Объект `weather` имеет следующую структуру:
* `summer` – средняя температура в летний период, число;
* `autumn` – средняя температура в осенний период, число;
* `winter` – средняя температура в зимний период, число;
* `spring` – средняя температура в весенний период, число.

По ошибке средняя температура в зимний период была записана в свойство `summer`, а зимняя в летний.

Необходимо исправить ошибку – поменять значения летнего и зимнего периода.

Рассчитать и добавить новое свойство – среднюю температуру за год `averageTemperature`.

Пусть функция вернет обновленный объект.

Пример запуска функции:
```javascript
averageTemperature({summer: 0,
autumn:10,
winter: 25
spring:15})
// { summer: 25, autumn: 10, winter: 0, spring: 15, averageTemperature: 12.5 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function averageTemperature(weather) {
  weather.averageTemperature =
    (weather.summer + weather.autumn + weather.winter + weather.spring) / 4;
  let temp = weather.winter;
  weather.winter = weather.summer;
  weather.summer = temp;
  return weather;
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function averageTemperature', () => {
  expect(averageTemperature).to.be.a('function');
});

it('averageTemperature({summer: 0, autumn:10, winter: 25, spring:15}) // { summer: 25, autumn: 10, winter: 0, spring: 15, averageTemperature: 12.5 }', () => {
  expect(averageTemperature({ summer: 0, autumn: 10, winter: 25, spring: 15 })).eql({
    summer: 25,
    autumn: 10,
    winter: 0,
    spring: 15,
    averageTemperature: 12.5,
  });
});

it('averageTemperature({summer: -5, autumn:5, winter: 15, spring:7}) // { summer: 15, autumn: 5, winter: -5, spring: 7, averageTemperature: 5.5 }', () => {
  expect(averageTemperature({ summer: -5, autumn: 5, winter: 15, spring: 7 })).eql({
    summer: 15,
    autumn: 5,
    winter: -5,
    spring: 7,
    averageTemperature: 5.5,
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
