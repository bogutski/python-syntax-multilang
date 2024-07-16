![](https://course-qa-basics.s3.us-west-1.amazonaws.com/no-girl.png)

Логический оператор `НЕ(!)` (логическое отрицание) меняет логическое значение операнда с истины в ложь и наоборот. 

Обычно он используется с булевыми (логическими) значениями. 

Оператор `НЕ(!)` – логический оператор, который получает только один аргумент:

```javascript
let result = !true;
console.log(result); //false
```

Давайте рассмотрим, как работает логическое `НЕ(!)`:

1. Сначала приводит аргумент к логическому типу `true/false`.

2. Затем возвращает противоположное значение.

Таким образом:

```javascript
console.log(true); // true
console.log(!true); // false
console.log(!false); // читается как `не false`, т.е. `true`
```

Рассмотрим примеры:

```javascript
const isOpen = true;
if(isOpen) {
console.log('Welcome'); // 'Welcome'    
}
```

```javascript
const isOpen = false;
if(!isOpen) {
   console.log('Closed'); // 'Closed'  
}
```

Оператор `НЕ(!)` преобразовывает всё в `boolean` и возвращает противоположное значение.

```javascript
const isOpen = 10;
console.log(!isOpen); // false
```

### Примеры выражений, которые могут быть преобразованы в `false`:

* null
* NaN
* 0 
* пустая строка ("", '', ``)
* undefined

Все числа (включая отрицательные) преобразовываются в `true`, кроме нуля. Ноль преобразовывается в `false`.

```javascript
const isOpen = 0;
console.log(!isOpen); // true 
```

Все строки, кроме пустой строки, преобразовываются в `true`.

```javascript
const isOpen = '';
console.log(!isOpen); // false
```

`NaN`, `null` и `undefined` преобразовываются в `false` и с помощью оператора `НЕ(!)` получается `true`.

```javascript
const isOpen = NaN;
console.log(!isOpen); // true
```

```javascript
const isOpen = null;
console.log(!isOpen); // true
```

```javascript
const isOpen = undefined;
console.log(!isOpen); // true
```

![](https://course-qa-basics.s3.us-west-1.amazonaws.com/girl-yellow-dress.png)

### Двойное `НЕ(!!)` 

Используется для преобразования значений к логическому типу:

```javascript
const isOpen = 1;
console.log(!!isOpen); // true
```

```javascript
const isOpen = '';
console.log(!!isOpen); // пустая строка: false 
```

```javascript
const isOpen = ' ';
console.log(!!isOpen); // непустая строка: true
```
