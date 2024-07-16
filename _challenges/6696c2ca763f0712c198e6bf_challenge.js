// NAMEEN:
// NAMERU:Прогноз пожароопасности. Объекты

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `forecast` оценивает риск пожароопасности в лесах в зависимости от температуры и влажности воздуха.

Функция принимает объект `weather` с двумя свойствами:
* `temperature`  - температура в градусах цельсия, число
* `humidity` - влажность в процентах, число

Если температура ниже 22 градусов, а влажность выше 65%, то функция должна вернуть строку `Low risk`.

Если температура от 22 до 29 градусов (включительно), а влажность выше 50%, то вернуть строку `Medium risk`.

Если температура выше 29 градусов и влажность равна или меньше 50%, то вернуть строку `High risk`.

В остальных случаях вернуть строку `Watch the situation`.

Примеры запуска функции:
```javascript
forecast({temperature: 20, humidity: 70}) // => 'Low risk'

forecast({temperature: 25, humidity: 55}) // => 'Medium risk'

forecast({temperature: 30, humidity: 60}) // => 'Watch the situation'

forecast({temperature: 30, humidity: 30}) // => 'High risk'
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function forecast(weather){
  if (weather.temperature < 22 && weather.humidity > 65){return "Low risk";}
  else if (weather.temperature >= 22 && weather.temperature <= 29 && weather.humidity > 50) {return "Medium risk";}
  else if (weather.temperature > 29 && weather.humidity <= 50) {return "High risk";}
  return 'Watch the situation';
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function forecast', () => {
  expect(forecast).to.be.a('function');
});

it('forecast({temperature: 20, humidity: 70}) should return "Low risk"', () => {
    expect(forecast({temperature: 20, humidity: 70})).eql('Low risk');
});

it('forecast({temperature: 25, humidity: 55}) should return "Medium risk"', () => {
    expect(forecast({temperature: 25, humidity: 55})).eql('Medium risk');
});

it('forecast({temperature: 30, humidity: 60}) should return "Watch the situation"', () => {
    expect(forecast({temperature: 30, humidity: 60})).eql('Watch the situation');
});

it('forecast({temperature: 30, humidity: 30}) should return "High risk"', () => {
    expect(forecast({temperature: 30, humidity: 30})).eql('High risk');
});

it('forecast({temperature: 22, humidity: 51}) should return "Medium risk"', () => {
    expect(forecast({temperature: 22, humidity: 51})).eql('Medium risk');
});

it('forecast({temperature: 29, humidity: 49}) should return "Watch the situation"', () => {
    expect(forecast({temperature: 29, humidity: 49})).eql('Watch the situation');
});

it('forecast({temperature: 29, humidity: 31}) should return "Watch the situation"', () => {
    expect(forecast({temperature: 29, humidity: 31})).eql('Watch the situation');
});

it('forecast({temperature: 35, humidity: 85}) should return "Watch the situation"', () => {
    expect(forecast({temperature: 35, humidity: 85})).eql('Watch the situation');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
