// NAMEEN:How much does Santa weigh?
// NAMERU:Сколько весит Санта?

/*
INSTRUCTIONENSTART
Every Christmas, the North American Aerospace Defense Command (NORAD)
tracks Santa Claus with its advanced surveillance technology,
and then shares this important information in real time using the NORAD Santa Tracker.

Based on flight profile data collected over 50 years of radar and satellite tracking,
NORAD concludes that Santa is probably about 5 feet 7 inches tall and
weighs about 260 pounds (before cookies).
Find Santa's weight in kilograms if 1 pound = 0.453592 kg.

To solve the problem:

Set the variable `pound` and assign a value of 0.453592 to it.

Define the variable `weight` and give it a value 260 (weight in pounds).

Set variable `weightKg`, in which calculate Santa's weight in kilograms.

(Note: 1 pound = 0.453592 kg)

Here is an example that is fundamentally similar to what you need to do,
but adapt it to the requirements of the problem:
```
const km = 1000; // 1 km = 1000 m
const distInKm = 25; // travelled distance in km
const distInMeters = distInKm * km; // distance in meters
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Каждый год на Рождество Североамериканское Командование воздушно-космической обороны (NORAD)
отслеживает Санта-Клауса с помощью своей передовой технологии наблюдения,
а затем делится этой важной информацией в режиме реального времени с помощью трекера NORAD Santa Tracker.

Основываясь на данных профиля полета, собранных более чем за 50 лет радарного и спутникового слежения,
NORAD делает вывод, что Санта, вероятно, имеет рост около 5 футов 7 дюймов в высоту и
весит около 260 фунтов (до печенья).
Найдите вес Санты в килограммах, если 1 фунт = 0.453592 кг.

Для решения задачи:

Задайте переменную `pound` и присвойте ей значение 0.453592.

Задайте переменную `weight` и присвойте ей значение 260 (вес в фунтах).

Задайте переменную `weightKg`, в которой вычислите вес Санты в килограммах.

(Замечание: 1 фунт = 0.453592 кг)

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```javascript
const km = 1000;                // 1 км = 1000 м
const distInKm = 25;            // пройденное расстояние в км
const distInMeters = distInKm * km; // расстояние в метрах
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART
```javascript
const pound = 0.453592;
const weight = 260;
const weightKg = weight * pound;
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const pound = 0.453592;
const weight = 260;
const weightKg = weight * pound;
// SOLUTIONEND


// OPENTESTSSTART
it('variable type `pound` - number', () => {
  expect(pound).a('number');
});

it('variable type `weight` - number', () => {
  expect(weight).a('number');
});

it('variable type `weightKg` - number', () => {
  expect(weightKg).a('number');
});

it('Variable `pound` contains a value', () => {
  expect(pound).not.undefined;
});

it('The `weight` variable contains a value', () => {
  expect(weight).not.undefined;
});

it('Variable `weightKg` contains a value', () => {
  expect(weightKg).not.undefined;
});

it('Variable `pound` contains a valid value', () => {
  expect(pound).equal(0.453592);
});
it('The `weight` variable contains a valid value', () => {
  expect(weight).equal(260);
});

it('Variable `weightKg` contains the correct value', () => {
  expect(weightKg).equal(weight * pound);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
