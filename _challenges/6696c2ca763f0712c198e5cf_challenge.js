// NAMEEN:
// NAMERU:Поменяй цвет животного

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `changeAnimalColor`, которая принимает параметры:
* `animalObj` - объект, описывающий животное
* `color` - строка, описывающая цвет животного

Объект животного имеет следующие свойства:
* `animal`- тип животного, строка
* `name`- имя животного, строка
* `color`- цвет животного, строка

Поменяй цвет животного на новый цвет, который передан в функцию вторым параметром.

Функция должна вернуть строку вида: `Tom's new color is green`

```javascript
changeAnimalColor(
  { animal: 'cat', name: 'Tom', color: 'red' },
  'green',
)
// "Tom's new color is green"

changeAnimalColor(
  { animal: 'dog', name: 'Boo', color: 'black' },
  'brown',
)
// "Boo's new color is brown"
```

Похожий пример:
```javascript
function carChangeColor(car, color) {
  car.color = color;
  return 'Your new car color is ' + car.color;
}

console.log(
  carChangeColor(
    { brand: 'BMW', model: 'X5', color: 'black' },
    'red',
  ),
);
// "Your new car color is red"
```


INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function changeAnimalColor(animalObj, color) {
  animalObj.color = color;
  return animalObj.name + "'s new color is " + animalObj.color;
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function changeAnimalColor', () => {
  expect(changeAnimalColor).to.be.a('function');
});

it('changeAnimalColor({ animal: "cat", name: "Tom", color: "red" }, "grey") should return Tom\'s new color is grey', () => {
  expect(
    changeAnimalColor(
      { animal: 'cat', name: 'Tom', color: 'red' },
      'grey',
    ),
  ).to.equal("Tom's new color is grey");
});

it('changeAnimalColor({ animal: "parrot", name: "Koko", color: "white" }, "black") should return Koko\'s new color is black', () => {
  expect(
    changeAnimalColor(
      { animal: 'parrot', name: 'Koko', color: 'white' },
      'black',
    ),
  ).to.equal("Koko's new color is black");
});

it('changeAnimalColor({ animal: "dog", name: "Masha", color: "black" }, "brown") should return Masha\'s new color is brown', () => {
  expect(
    changeAnimalColor(
      { animal: 'cat', name: 'Masha', color: 'black' },
      'brown',
    ),
  ).to.equal("Masha's new color is brown");
});

it('changeAnimalColor({ animal: "cat", name: "Vasya", color: "white" }, "blue") should return Vasya\'s new color is blue', () => {
  expect(
    changeAnimalColor(
      { animal: 'cat', name: 'Vasya', color: 'white' },
      'blue',
    ),
  ).to.equal("Vasya's new color is blue");
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
