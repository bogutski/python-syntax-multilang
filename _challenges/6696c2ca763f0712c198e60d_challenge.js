// NAMEEN:
// NAMERU:Какой ресторан лучше?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `bestRestaurant`, которая принимает два объекта с оценками ресторанов.

Каждый объект имеет следующие свойства:
* `name` - название ресторана (string)
* `food` - оценка качества еды (number)
* `service` - оценка качества обслуживания (number)
* `waitingTime` - оценка времени ожидания (number)

Функция должна возвращать новый объект с рестораном, который имеет наибольшую общую оценку.
Для вычисления общей оценки ресторана необходимо сложить оценки качества еды, обслуживания и времени ожидания.

В новом объекте должны быть свойства:
* `bestRestaurant` - название ресторана с наибольшей общей оценкой
* `totalScore` - общая оценка ресторана

Если общая оценка ресторанов одинаковая, то возвращаемый объект должен иметь свойства:
* `bestRestaurant` со значением: `It's a tie!`
* `totalScore` - общая оценка ресторана одного из ресторанов

Пример запуска функции:
```javascript
bestRestaurant(
{ name: 'Chittos', food: 2.1, service: 1, waitingTime: 1.8 },
{ name: 'Best Burger', food: 2.5, service: 1, waitingTime: 0 }); // { bestRestaurant: 'Chittos', totalScore: 4.9 }

bestRestaurant(
{ name: "Chittos", food: 4.5, service: 4, waitingTime: 4 },
{ name: "Best Burger", food: 4.7, service: 3, waitingTime: 4.8 }); // { bestRestaurant: "It's a tie!", totalScore: 12.5 }
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function bestRestaurant(restaurant1, restaurant2) {
  let restaurant1Score = restaurant1.food + restaurant1.service + restaurant1.waitingTime;
  let restaurant2Score = restaurant2.food + restaurant2.service + restaurant2.waitingTime;
  if (restaurant1Score > restaurant2Score) {
    return { bestRestaurant: restaurant1.name, totalScore: restaurant1Score };
  } else if (restaurant1Score < restaurant2Score) {
    return { bestRestaurant: restaurant2.name, totalScore: restaurant2Score };
  } else {
    return { bestRestaurant: "It's a tie!", totalScore: restaurant1Score };
  }
}
// SOLUTIONEND

// OPENTESTSSTART
it('Created function bestRestaurant', () => {
  expect(bestRestaurant).to.be.a('function');
});

it('bestRestaurant returns an object', () => {
  expect(
    bestRestaurant(
      { name: 'Chittos', food: 4.5, service: 4, waitingTime: 4 },
      { name: 'Best Burger', food: 4.7, service: 3, waitingTime: 4.8 },
    ),
  ).to.be.a('object');
});

it('bestRestaurant({ name: "Chittos", food: 4.5, service: 4, waitingTime: 4 }, { name: "Best Burger", food: 4.7, service: 3, waitingTime: 4.8 }) returns { bestRestaurant: "It\'s a tie!", totalScore: 12.5 }', () => {
  expect(
    bestRestaurant(
      { name: 'Chittos', food: 4.5, service: 4, waitingTime: 4 },
      { name: 'Best Burger', food: 4.7, service: 3, waitingTime: 4.8 },
    ),
  ).to.eql({ bestRestaurant: "It's a tie!", totalScore: 12.5 });
});

it('bestRestaurant({ name: "Chittos", food: 2.1, service: 1, waitingTime: 1.8 }, { name: "Best Burger", food: 2.5, service: 1, waitingTime: 0 }) returns { bestRestaurant: "Chittos", totalScore: 4.9 }', () => {
  expect(
    bestRestaurant(
      { name: 'Chittos', food: 2.1, service: 1, waitingTime: 1.8 },
      { name: 'Best Burger', food: 2.5, service: 1, waitingTime: 0 },
    ),
  ).to.eql({ bestRestaurant: 'Chittos', totalScore: 4.9 });
});

it('bestRestaurant({ name: "Chittos", food: 4.5, service: 3, waitingTime: 4 }, { name: "Best Burger", food: 4.7, service: 3, waitingTime: 4.8 }) returns { bestRestaurant: "Best Burger", totalScore: 12.5 }', () => {
  expect(
    bestRestaurant(
      { name: 'Chittos', food: 4.5, service: 3, waitingTime: 4 },
      { name: 'Best Burger', food: 4.7, service: 3, waitingTime: 4.8 },
    ),
  ).to.eql({ bestRestaurant: 'Best Burger', totalScore: 12.5 });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
