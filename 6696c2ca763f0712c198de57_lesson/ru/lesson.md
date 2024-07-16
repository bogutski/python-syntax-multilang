Давайте рассмотрим простой пример со сложением, записанный с помощью JavaScript.
```
let a = 15;
let b = 20;
let c = a + b;
```
В третьей строке используется не только оператор бинарный плюс, который складывает `a` и `b`, но и оператор присваивания `=`. В выражениях, имеющих несколько операторов, порядок их выполнения определяется *приоритетом*.  
Первыми выполняются операторы, приоритет которых *выше*. Так, например, умножение выполняется раньше сложения, а использование скобок и унарный плюс выполнится даже раньше умножения. Приоритет у оператора присваивания `=` один из самых низких, поэтому в длинных выражениях обычно сперва выполняются все действия "справа от равно", а затем результат присваивается в переменную.  
```
let d = 2 * 2 + (3 - +'1');
```
В JavaScript существует целая таблица приоритетов. Ознакомиться с ней можно по ссылке: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Иногда в JavaScript используются сокращения для некоторых комбинаций операторов:
```
y = y + x; равносильно y += x;
y = y - x; равносильно y -= x;
y = y * x; равносильно y *= x;
y = y / x; равносильно y /= x;
y = y % x; равносильно y %= x;
```
Не удивляйтесь, встретив подобные комбинации в задачах! Вы всегда можете переписать эти сочетания в удобном для вас виде.