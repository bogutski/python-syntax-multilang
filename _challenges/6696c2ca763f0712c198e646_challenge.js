// NAMEEN:
// NAMERU:Рецепт коктейля. Удаление свойства из объекта.

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Если вы любите коктейли, то наверняка знаете, что для их приготовления необходимо соблюдать определенный рецепт.

Каждый ингредиент должен быть в определенном количестве.

Давайте напишем функцию `cocktailRecipe`, которая принимает один параметр `ingredients`– объект, содержащий информацию об ингредиентах.

Объект `ingredients` имеет следующие свойства:
* `name1` – название первого ингредиента, строка
* `name2` – название второго ингредиента, строка
* `name3` – название третьего ингредиента, строка
* `name4` – название четвертого ингредиента, строка;
* `mix` – строка, содержащая инструкцию по приготовлению коктейля.

По ошибке в объекте могут быть повторяющиеся ингредиенты. Например, если в ключе `name1` записано `orange juice`
и в ключе `name2` также записано `orange juice` необходимо удалить из объекта повторяющиеся ингредиенты
(в данном примере свойство `name1` необходимо удалить).

Функция должна вернуть объект, содержащий только уникальные ингредиенты и инструкцию по приготовлению коктейля.

Пример запуска функции:
```javascript
cocktailRecipe({
name1: 'orange juice',
name2: 'milk',
name3: 'apple',
name4: 'soda',
mix: 'Mix all ingredients'}) // {name1: 'orange juice', name2: 'milk', name3: 'apple', name4: 'soda', mix: 'Mix all ingredients'}

cocktailRecipe({
name1: 'orange juice',
name2: 'apple juice',
name3: 'apple juice',
name4: 'sparkling water',
mix: 'Mix all ingredients'}) // {name1: 'orange juice', name3: 'apple juice', name4: 'sparkling water', mix: 'Mix all ingredients'}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function cocktailRecipe(ingredients) {
  if (
    ingredients.name1 === ingredients.name2 ||
    ingredients.name1 === ingredients.name3 ||
    ingredients.name1 === ingredients.name4
  ) {
    delete ingredients.name1;
  }
  if (
    ingredients.name2 === ingredients.name3 ||
    ingredients.name2 === ingredients.name4
  ) {
    delete ingredients.name2;
  }
  if (ingredients.name3 === ingredients.name4) {
    delete ingredients.name3;
  }
  return ingredients;
}
// SOLUTIONEND

// OPENTESTSSTART
it(`function cocktailRecipe(ingredients)`, () => {
  expect(cocktailRecipe).to.be.a('function');
});

it(`function cocktailRecipe({name1: "milk", name2: "milk", name3: "milk", name4: "milk", mix: "Mix all ingredients"}) return {name4: "milk", mix: "Mix all ingredients"}`, () => {
  expect(
    cocktailRecipe({
      name1: 'milk',
      name2: 'milk',
      name3: 'milk',
      name4: 'milk',
      mix: 'Mix all ingredients',
    }),
  ).eql({ name4: 'milk', mix: 'Mix all ingredients' });
});

it(`function cocktailRecipe({name1: "orange juice", name2: "coca-cola", name3: "apple juice", name4: "sparkling water", mix: "Mix all ingredients"}) return {name1: "orange juice", name2: "coca-cola", name3: "apple juice", name4: "sparkling water", mix: "Mix all ingredients"}`, () => {
  expect(
    cocktailRecipe({
      name1: 'orange juice',
      name2: 'coca-cola',
      name3: 'apple juice',
      name4: 'sparkling water',
      mix: 'Mix all ingredients',
    }),
  ).eql({
    name1: 'orange juice',
    name2: 'coca-cola',
    name3: 'apple juice',
    name4: 'sparkling water',
    mix: 'Mix all ingredients',
  });
});

it(`function cocktailRecipe({name1: "orange juice", name2: "orange juice", name3: "peach juice", name4: "coconut water", mix: "Mix all ingredients"}) return {name2: "orange juice", name3: "peach juice", name4: "coconut water", mix: "Mix all ingredients"}`, () => {
  expect(
    cocktailRecipe({
      name1: 'orange juice',
      name2: 'orange juice',
      name3: 'peach juice',
      name4: 'coconut water',
      mix: 'Mix all ingredients',
    }),
  ).eql({
    name2: 'orange juice',
    name3: 'peach juice',
    name4: 'coconut water',
    mix: 'Mix all ingredients',
  });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
