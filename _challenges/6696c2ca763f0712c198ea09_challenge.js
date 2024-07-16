// NAMEEN:
// NAMERU:Вычисление степени

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `powerOfTwo`, которая принимает число `n` и возвращает `2` в степени этого числа.

Шаги по решению задачи:
* Создайте переменную и присвойте ей значение `1`
* Создайте цикл, который будет выполняться от `1` до `n`, включительно
* В теле цикла умножайте переменную на `2`

Пример запуска функции:
```javascript
powerOfTwo(4); // 16
powerOfTwo(8); // 256
powerOfTwo(10); // 1024
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function powerOfTwo(num){
  let power = 1;
  for(let i = 1; i <= num; i++){
    power *= 2;
  }
  return power;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function powerOfTwo', () => {
  expect(powerOfTwo).to.be.a('function');
});

it('powerOfTwo(4) should return 16', () => {
  expect(powerOfTwo(4)).to.equal(16);
});

it('powerOfTwo(8) should return 256', () => {
  expect(powerOfTwo(8)).to.equal(256);
});

it('powerOfTwo(10) should return 1024', () => {
  expect(powerOfTwo(10)).to.equal(1024);
});

it('powerOfTwo(6) should return 64', () => {
  expect(powerOfTwo(6)).to.equal(64);
});

it('powerOfTwo(0) should return 1', () => {
  expect(powerOfTwo(0)).to.equal(1);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
