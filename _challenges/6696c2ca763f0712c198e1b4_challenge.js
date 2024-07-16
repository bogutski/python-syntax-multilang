// NAMEEN:
// NAMERU:Опять считаем самую выгодную пиццу

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `pizzaCompetition` принимает:
- `pizza1Name` - название первой пиццы
- `pizza1Price` - цену первой пиццы
- `pizza1Diameter` - диаметр первой пиццы в дюймах

- `pizza2Name` - название второй пиццы
- `pizza2Price` - цену второй пиццы
- `pizza2Diameter` - диаметр второй пиццы в дюймах

Функция должна вернуть строку вида `MarioPizza cheaper than LuigiPizza.`

Как вы поняли из примера, в начале строки должно быть название пиццы, которая дешевле.

Если пиццы стоят одинаково, то возвращаем строку `Both pizzas are equally cheap.`

Для расчета площади пиццы используйте формулу площади круга. PI = 3.14

Сравниваем стоимость пиццы по цене за квадратный дюйм.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function pizzaCompetition(pizza1Name, pizza1Price, pizza1Diameter, pizza2Name, pizza2Price, pizza2Diameter) {
  const pizza1Area = 3.14 * (pizza1Diameter / 2) ** 2;
  const pizza2Area = 3.14 * (pizza2Diameter / 2) ** 2;

  const pizza1PricePerInch = pizza1Price / pizza1Area;
  const pizza2PricePerInch = pizza2Price / pizza2Area;

  if (pizza1PricePerInch === pizza2PricePerInch) {
    return 'Both pizzas are equally cheap.';
  }

  const winner = pizza1PricePerInch < pizza2PricePerInch ? pizza1Name : pizza2Name;
  const loser =  pizza1PricePerInch < pizza2PricePerInch ? pizza2Name : pizza1Name;

  return `${winner} cheaper than ${loser}.`;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function pizzaCompetition', () => {
  expect(pizzaCompetition).to.be.a('function');
});

it('pizzaCompetition("MarioPizza", 100, 10, "LuigiPizza", 100, 10) should return "Both pizzas are equally cheap."', () => {
  expect(pizzaCompetition("MarioPizza", 100, 10, "LuigiPizza", 100, 10)).to.equal("Both pizzas are equally cheap.");
} );

it('pizzaCompetition("MarioPizza", 100, 10, "LuigiPizza", 200, 10) should return "MarioPizza cheaper than LuigiPizza."', () => {
  expect(pizzaCompetition("MarioPizza", 100, 10, "LuigiPizza", 200, 10)).to.equal("MarioPizza cheaper than LuigiPizza.");
} );

it('pizzaCompetition("MarioPizza", 100, 10, "LuigiPizza", 200, 20) should return "LuigiPizza cheaper than MarioPizza."', () => {
  expect(pizzaCompetition("MarioPizza", 100, 10, "LuigiPizza", 200, 20)).to.equal("LuigiPizza cheaper than MarioPizza.");
} );

it('pizzaCompetition("MarioPizza", 100, 10, "LuigiPizza", 200, 5) should return "MarioPizza cheaper than LuigiPizza."', () => {
  expect(pizzaCompetition("MarioPizza", 100, 10, "LuigiPizza", 200, 5)).to.equal("MarioPizza cheaper than LuigiPizza.");
} );
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
