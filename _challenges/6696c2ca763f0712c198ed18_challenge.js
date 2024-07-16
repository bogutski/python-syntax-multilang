// NAMEEN:
// NAMERU:Калькулятор - вычисление выражения, записанного в строке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `calculateExpression` должна принимать строку, в которой содержатся 2 числа и знак математической операции. В строке нет пробелов.
Пример строки: `21+39`.
Строка не может быть пустой и будет приходить в правильном формате.
Знаки математических операций могут быть следующими: `+`, `-`, `*`, `/`.
Функция должна вернуть результат вычисления этого выражения.

Для решения задачи создайте также вторую функцию `calculator`, которая будет принимать 3 аргумента: знак математической операции и 2 числа и вызываться внутри первой функции `calculateExpression`.
Анализ знака операции и вычисление результата должны быть реализованы во второй функции `calculator`.

Для решения задачи используйте циклы, не используйте строковые функции и методы массивов.

#### Один из возможных алгоритмов решения задачи:

Напишите функцию `calculator`, которая принимает 3 аргумента: знак математической операции и 2 числа и возвращает результат вычисления.

Напишите функцию `isOperator`, которая принимает 1 аргумент - символ и возвращает `true`, если аргумент является знаком математической операции, и `false` в противном случае.
В функции `isOperator` создайте переменную `operators` со строкой, содержащей все знаки математических операций и используйте цикл по ней для проверки того, является ли символ знаком математической операции.

В функции `calculateExpression`:

1. Создайте переменные `num1` и `num2` и присвойте им пустые строки.
2. Создайте переменные`op` и `opIndex` без начального значения.
3. Создайте цикл `for`, который будет перебирать все символы строки `str` и записывать их в переменную `num1` до тех пор, пока не встретит знак математической операции.
Для проверки того, является ли текущий символ знаком математической операции, используйте функцию `isOperator`, которую вы написали ранее.
Если символ является знаком математической операции, присвойте его значение переменной `op`, запишите в переменную `opIndex` его индекс в строке `str` и прервите выполнение цикла.
4. Создайте цикл `for`, который будет перебирать все символы строки `str, начиная с индекса, следующего за оператором, и записывать их в переменную `num2`.
5. Преобразуйте строки `num1` и `num2` в числа.
6. Вызовите функцию `calculator`, передав в нее знак операции `op` и 2 числа `num1` и `num2`.
7. верните результат выполнения функции `calculator`.

Примеры вызова функции:

```javascript
calculateExpression('21+39');   // 60
calculateExpression('21-39');   // -18
calculateExpression('20/0');    // Infinity
```

Примеры вызова функции из другой функции:
```javascript
function hello(name){
  console.log('Hello, ' + name)
}
function bye(name){
  console.log('Goodbye, ' + name)
}

function greetings(name, greeting){
  if(greeting === 'Hi') return hello(name)
  if(greeting === 'Bye') return bye(name)
}
greetings('Alice', 'Hi') // Hello, Alice
greetings('Alice', 'Bye') // Goodbye, Alice
```
В этом примере функция `greetings` принимает 2 аргумента: имя и приветствие. В зависимости от приветствия, функция вызывает либо функцию `hello`, либо функцию `bye`, передавая вызванной функции имя.

Вы можете создавать свои функции и использовать их в решении разных похожих между собою задач.
Например, можно создать функцию `isDigit`, которая будет принимать один символ и проверять, является ли он цифрой.
Вы можете сохранить эту функцию и вставлять ее в решении других задач, в которых нужно проверять, является ли символ цифрой.
```javascript
function isDigit(char){
  if (char >="0" && char <="9") return true;
  else return false;
}

function onlyDigits(str){ //Эта функция принимает строку и возвращает строку, содержащую только цифры из исходной строки
  let result = '';
  for ( let i=0; i<str.length; i++ ) {
    if (isDigit(str[i])) result += str[i]; //Вызов функции isDigit для проверки текущего символа
  }
  return result;
}
console.log(onlyDigits('1s0t89r3')); //"10893"
console.log(onlyDigits(' t i85u y ')); //"85"
console.log(onlyDigits(' no digits ')); // ""
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function calculator(op, num1, num2) {
}
function calculateExpression(str) {
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function calculator(op, num1, num2) {
  if (op === '+') return num1 + num2;
  else if (op === '-') return num1 - num2;
  else if (op === '*') return num1 * num2;
  else if (op === '/') return num1 / num2;
}

function isOperator(char) {
  const operators = '+-*/';
  for (let i = 0; i < operators.length; i++) {
    if (char === operators[i]) {
      return true;
    }
  }
  return false;
}

function calculateExpression(str) {
  let num1 = '';
  let num2 = '';
  let op;
  let opIndex = -1;

  for (let i = 0; i < str.length; i++) {
    if (isOperator(str[i])) {
      op = str[i];
      opIndex = i;
      break;
    }
    num1 += str[i];
  }

  for (let i = opIndex + 1; i < str.length; i++) {
    num2 += str[i];
  }

  return calculator(op, +num1, +num2);
}

// SOLUTIONEND

// OPENTESTSSTART
it('Created function calculator', () => {
  expect(calculator).to.be.a('function');
});

it('Created function calculateExpression', () => {
  expect(calculateExpression).to.be.a('function');
});

it('calculateExpression() should not contain split() method', () => {
  expect(calculateExpression.toString()).to.not.contain('.split(');
});

it('calculateExpression() should not contain indexOf() method', () => {
  expect(calculateExpression.toString()).to.not.contain('.indexOf(');
});

it('calculateExpression() should not contain slice() method', () => {
  expect(calculateExpression.toString()).to.not.contain('.slice(');
});

it('calculateExpression() should not contain substring() method', () => {
  expect(calculateExpression.toString()).to.not.contain('.substring(');
});

it('calculateExpression("21+39") should return 60', () => {
  expect(calculateExpression('21+39')).to.equal(60);
});

it('calculateExpression("21-39") should return -18', () => {
  expect(calculateExpression(' 21 - 39 ')).to.equal(-18);
});

it('calculateExpression("20/5") should return 4', () => {
  expect(calculateExpression('20/5')).to.equal(4);
});

it('calculateExpression("20/0") should return Infinity', () => {
  expect(calculateExpression('20/0')).to.equal(Infinity);
});

it('calculateExpression("100*200") should return 20000', () => {
  expect(calculateExpression('100*200')).to.equal(20000);
});

it('calculateExpression("1+20") should return 21', () => {
  expect(calculateExpression('1+20')).to.equal(21);
});

it('calculateExpression("1-0.2") should return 0.8', () => {
  expect(calculateExpression('1-0.2')).to.equal(0.8);
});

it('calculateExpression("1*1") should return 1', () => {
  expect(calculateExpression('1*1')).to.equal(1);
});

it('calculateExpression("1.5*1") should return 1.5', () => {
  expect(calculateExpression('1.5*1')).to.equal(1.5);
});

it('calculateExpression("1.5-0.005") should return 1.495', () => {
  expect(calculateExpression('1.5-0.005')).to.equal(1.495);
});

it('calculateExpression("1.5/0.5") should return 3', () => {
  expect(calculateExpression('1.5/0.5')).to.equal(3);
});

it('calculateExpression("1*0") should return 0', () => {
  expect(calculateExpression('1*0')).to.equal(0);
});

it('calculateExpression("1/1") should return 1', () => {
  expect(calculateExpression('1/1')).to.equal(1);
});

it('calculateExpression("00+00000") should return 0', () => {
  expect(calculateExpression('00+00000')).to.equal(0);
});

it('calculateExpression("0+20") should return 20', () => {
  expect(calculateExpression('0+20')).to.equal(20);
});

it('calculateExpression("0.25+20.05") should return 20.3', () => {
  expect(calculateExpression('0.25+20.05')).to.equal(20.3);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
