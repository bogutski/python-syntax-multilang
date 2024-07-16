// NAMEEN:A Christmas present.
// NAMERU:Подарок на Рождество.

/*
INSTRUCTIONENSTART
December is here, the time of the first snow and preparations for Christmas.
We've bought the lights, the decorations, too. We even baked Santa cookies. Now all we have to do
...to write a letter to Santa. So what do we want most?

Create a variable `gift` and assign it the value `'Job offer'`.


Here is an example that is fundamentally similar to what we want to do,
but adapt it to the requirements of the task:

```
const gift = 'MacBook Pro';

```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Вот и наступил декабрь, время первого снега и подготовки к Рождеству.
Ëлку купили, украшение тоже. Даже Санте печенье испекли. Теперь нужно
написать письмо Санте. Так что мы хотим больше всего?

Создайте переменную `gift` и присвойте ей значение `'Job offer'`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:

```javascript
const gift = 'MacBook Pro';
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
const gift = 'Job offer';
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const gift = 'Job offer';
// SOLUTIONEND


// OPENTESTSSTART
it('The `gift` variable exists and contains a value', () => {
  expect(gift).not.undefined;
});

it('Variable `gift` contains data type string', () => {
  expect(gift).a('string');
});

it('The `gift` variable contains the value `Job offer`', () => {
  expect(gift).eq('Job offer');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
