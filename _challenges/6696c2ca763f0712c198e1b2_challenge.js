// NAMEEN:
// NAMERU:На каком автомобиле проедем дальше

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `whichCar` принимает параметры:

* `car1OwnerName` - имя владельца первого автомобиля
* `car1TankVolume` - сколько галлонов топлива находится в баке первого автомобиля
* `car1Mpg` - расход топлива первого автомобиля, сколько он проедет миль на одном галлоне топлива

* `car2OwnerName` - имя владельца второго автомобиля
* `car2TankVolume` - сколько галлонов топлива находится в баке второго автомобиля
* `car2Mpg` - расход топлива второго автомобиля, сколько он проедет миль на одном галлоне топлива

Пусть функция возвращает строку вида: `Congratulations, Bob, you win! Your car drive 45 miles more than Alice's car.`

Если расстояние одинаковое, то возвращаем строку вида: `Congratulations, Bob and Alice, you win! Your cars drive the same distance.`. В этом случае имя владельца первого автомобиля должно быть первым.


Для решения этой задачи найдите расстояние, которое проедет каждый автомобиль, и сравните их.

Подсказка: расстояние = объем бака * расход топлива.

При выводе строки можно использовать:
 * двойные кавычки снаружи и одинарные внутри: `"Bob's"`
 * знак экранирования: `'Bob\'s'`, в таком случаи одинарные кавычки можно использовать внутри строки.

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function whichCar(car1OwnerName, car1TankVolume, car1Mpg, car2OwnerName, car2TankVolume, car2Mpg) {
  let car1Distance = car1TankVolume * car1Mpg;
  let car2Distance = car2TankVolume * car2Mpg;

  if (car1Distance > car2Distance) {
    return `Congratulations, ${car1OwnerName}, you win! Your car drive ${car1Distance - car2Distance} miles more than ${car2OwnerName}'s car.`;
  } else if (car1Distance < car2Distance) {
    return `Congratulations, ${car2OwnerName}, you win! Your car drive ${car2Distance - car1Distance} miles more than ${car1OwnerName}'s car.`;
  } else {
    return `Congratulations, ${car1OwnerName} and ${car2OwnerName}, you win! Your cars drive the same distance.`;
  }
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function whichCar', () => {
  expect(whichCar).to.be.a('function');
});

it('whichCar("Bob", 10, 30, "Alice", 10, 20) returns "Congratulations, Bob, you win! Your car drive 100 miles more than Alice\'s car."', () => {
  expect(whichCar('Bob', 10, 30, 'Alice', 10, 20)).to.be.equal('Congratulations, Bob, you win! Your car drive 100 miles more than Alice\'s car.');
});

it('whichCar("Sam", 10, 20, "Joe", 10, 30) returns "Congratulations, Joe, you win! Your car drive 100 miles more than Sam\'s car."', () => {
  expect(whichCar('Sam', 10, 20, 'Joe', 10, 30)).to.be.equal('Congratulations, Joe, you win! Your car drive 100 miles more than Sam\'s car.');
});

it('whichCar("Sam", 10, 20, "Joe", 10, 20) returns "Congratulations, Sam and Joe, you win! Your cars drive the same distance."', () => {
  expect(whichCar('Sam', 10, 20, 'Joe', 10, 20)).to.be.equal('Congratulations, Sam and Joe, you win! Your cars drive the same distance.');
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
