// NAMEEN:
// NAMERU:Функция в которой переприсвоим значения переменных

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте функцию `swapWorkers`, которая принимает два параметра: `name1` и `name2`.

Внутри функции создайте переменную `shift1` и присвойте ей значение параметра `name1`. Используйте ключевое слово `let`.

Внутри функции создайте переменную `shift2` и присвойте ей значение параметра `name2`. Используйте ключевое слово `let`.

Выведите в консоль значения переменной `shift1`
Выведите в консоль значения переменной `shift2`

Внутри функции переприсвойте значение переменной `shift1` на `name2`, а значение переменной `shift2` на `name1`.

Выведите в консоль значения переменной `shift1`
Выведите в консоль значения переменной `shift2`

Пусть эта функция ничего не возвращает. Писать `return` не нужно.

Похожий пример:
```javascript
function swap(a, b) {
  let c = a;
  let d = b;
  console.log(c);
  console.log(d);
  c = b;
  d = a;
  console.log(c);
  console.log(d);
}
```

Если вы ищите смысл этого задания, то он в том, чтобы вы учились делать задание по инструкции.
Практического смысла в этом задании нет, но это хорошая практика.
Если все тесты проходят, то вы сделали задание правильно.

Придерживайтесь инструкций и стиля оформления, иначе задание не пройдет тесты.

Внутри функции должно быть 8 строк кода.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun!
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function swapWorkers(name1, name2) {
  let shift1 = name1;
  let shift2 = name2;
  console.log(shift1);
  console.log(shift2);
  shift1 = name2;
  shift2 = name1;
  console.log(shift1);
  console.log(shift2);
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function swapWorkers', () => {
  expect(swapWorkers).to.be.a('function');
});

it('Function swapWorkers has two parameters name1 and name2', () => {
  const args = swapWorkers.toString().match(/\(([^)]*)\)/)[1].split(',').map(arg => arg.trim());
  expect(args).to.be.eql(['name1', 'name2']);
});


it('Function swapWorkers has right structure. Line 1', () => {
  expect(swapWorkers.toString()).contains('let shift1 = name1;');
});

it('Function swapWorkers has right structure. Line 2', () => {
  expect(swapWorkers.toString()).contains('let shift2 = name2;');
});

it('Function swapWorkers has right structure. Line 3', () => {
  expect(swapWorkers.toString()).contains('console.log(shift1);');
});

it('Function swapWorkers has right structure. Line 4', () => {
  expect(swapWorkers.toString()).contains('console.log(shift2);');
});

it('Function swapWorkers has right structure. Line 5', () => {
  expect(swapWorkers.toString()).contains('shift1 = name2;');
});

it('Function swapWorkers has right structure. Line 6', () => {
  expect(swapWorkers.toString()).contains('shift2 = name1;');
});

it('Function swapWorkers has right structure. Line 7', () => {
  expect(swapWorkers.toString()).contains('console.log(shift1);');
});

it('Function swapWorkers has right structure. Line 8', () => {
  expect(swapWorkers.toString()).contains('console.log(shift2);');
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
