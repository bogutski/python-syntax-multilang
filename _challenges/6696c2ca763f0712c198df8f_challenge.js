// NAMEEN:
// NAMERU:Рассчитать доход от проката автомобилей

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Пишем функцию для помощи компании по прокату автомобилей.
Напиши функцию `calculateRentalProfit`.

На вход функции подаются параметры в таком порядке:

* количество доступных дней проката
* процент резерваций
* стоимость проката за один день для клиента.
* стоимость обслуживания за один день автомобиля в прокате.
* стоимость обслуживания за один день автомобиля не в прокате.
* количество автомобилей в наличии

Компания хочет узнать, сколько денег она получит за прокат автомобилей.

Пример:

* доступно для проката 100 дней
* 60% резерваций. То есть 60 дней зарезервированы, 40 дней свободны и с них не получится ничего заработать.
* для клиента стоимость проката за один день 30 долларов
* стоимость обслуживания за один день автомобиля в прокате 10 долларов
* стоимость обслуживания за один день автомобиля не в прокате 5 долларов (например, на хранение)
* в наличии 10 автомобилей

В этом случае у компании останется 10 000 долларов

Функция должна вернуть сумму, которая останется у компании после проката за это время.

```
calculateRentalProfit(100, 60, 30, 10, 5, 10) should return 10000
calculateRentalProfit(100, 20, 30, 10, 5, 10) should return 0
calculateRentalProfit(100, 80, 30, 5, 5, 50) should return 95000
calculateRentalProfit(300, 85, 60, 10, 5, 500) should return 6262500
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function (){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function calculateRentalProfit(days, percent, cost, service, serviceNotRented, cars) {
  const rentedDays = days * percent / 100;
  const notRentedDays = days - rentedDays;
  return rentedDays * cost * cars - rentedDays * service * cars - notRentedDays * serviceNotRented * cars;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function calculateRentalProfit', () => {
  expect(calculateRentalProfit).to.be.a('function');
});

it('calculateRentalProfit(100, 60, 30, 10, 5, 10) should return 10000', () => {
  expect(calculateRentalProfit(100, 60, 30, 10, 5, 10)).to.equal(10000);
});

it('calculateRentalProfit(100, 20, 30, 10, 5, 10) should return 0', () => {
  expect(calculateRentalProfit(100, 20, 30, 10, 5, 10)).to.equal(0);
} );

it('calculateRentalProfit(100, 80, 30, 5, 5, 50) should return 95000', () => {
  expect(calculateRentalProfit(100, 80, 30, 5, 5, 50)).to.equal(95000);
});

it('calculateRentalProfit(300, 85, 60, 10, 5, 500) should return 6262500', () => {
  expect(calculateRentalProfit(300, 85, 60, 10, 5, 500)).to.equal(6262500);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
