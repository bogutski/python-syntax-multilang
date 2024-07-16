![](https://course-qa-basics.s3.us-west-1.amazonaws.com/nan.png)
### Сложение `+` 
```javascript
console.log(3 + 4) // 7
```

### Вычитание `-` 
```javascript
console.log(3 - 4) // -1
```

### Умножение `*`
```javascript
console.log(3 * 4) // 12
```

### Деление `/`
```javascript
console.log(3 / 4) // 0.75
```

### Возведение в степень `**`
```javascript
console.log(3 ** 4) // 81
```

### Остаток от деления `%`
```javascript
console.log(10 % 2) // 0
console.log(9 % 2) // 1
```

С помощью оператора `%` удобно определять четное число или нечетное,
так как при делении четного числа на 2, остаток равен 0, а при делении
нечетного числа на 2, остаток равен 1

```javascript
console.log(12 % 2) // 0
console.log(91 % 2) // 1
```

### Квадратный корень 

Чтобы извлечь квадратный корень из числа, возведите его в степень `0.5`

```javascript
console.log(16 ** 0.5) // 4
console.log(100 ** 0.5) // 10
console.log(14 ** 0.5) // 3.7416573867739413
```

### `NaN` not a number - не число

`NaN` не является числом, но относится к типу данных `number`

```javascript
console.log(NaN) // NaN
console.log(typeof NaN) // 'number'
```

Мы получим `NaN` в результате следующих операций:

```javascript
console.log('12a' * 2) // NaN
console.log('12a' / 2) // NaN
console.log('12a' - 2) // NaN
console.log('12a' % 2) // NaN
console.log('12a' ** 2) // NaN
```

Подумайте, почему в результате этих операций мы получаем `NaN`.

Если сложить строковое значение с числовым, то произойдет преобразование
числового значения к строковому, а результатом будет слияние строк

```javascript
console.log('12a' + 2) // '12a2'
console.log('f45' + 7) // 'f457'
```
