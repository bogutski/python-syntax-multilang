### Второе минимальное число в массиве

Разберем как найти второе минимальное число в массиве.

```javascript
const arr = [5, 31, -5, 0, 14, 55, -25]  // min = -25, secondMin = -5

let min = arr[0];                        // присвоим переменной min значение первого элемента массива
let secondMin = arr[0];                  // присвоим переменной secondMin значение первого элемента массива

for(let i = 1; i < arr.length; i++){
    if(arr[i] < min) {                              // если текущий элемент меньше числа, переданного в переменную min
        secondMin = min;                            // то переменной secondMin присваивается значение переменной min
        min = arr[i];                               // а в переменную min присваивается значение текущего минимального элемента
    } else if(arr[i] < secondMin && arr[i] > min){  // если текущий элемент меньше второго минимального числа и больше минимального
        secondMin = arr[i];                         // то текущий элемент становится вторым минимальным
    }
}

console.log(min, secondMin)  // -25, -5
```

Рассмотрим еще один пример.

```javascript
const arr = [-25, 10, -5]  // min = -25, secondMin = -5

let min = arr[0];
let secondMin = arr[0];

for(let i = 1; i < arr.length; i++){
    if(arr[i] < min) {
        secondMin = min;
        min = arr[i];
    } else if(arr[i] < secondMin && arr[i] > min){
        secondMin = arr[i];
    }
}

console.log(min, secondMin)  // -25, -25
```

Как мы видим, результат не соответствует ожидаемому.

Разберем пошагово этот пример:

```javascript
const arr = [-25, 10, -5]  // min = -25, secondMin = -5
let min = arr[0];         // -> min = -25
let secondMin = arr[0];   // -> secondMin = -25

// 1 итерация: 
// 10 < -25 -> false
// 10 < -25 && 10 > -25 -> false

// 2 итерация:
// -5 < -25 -> false
// -5 < -25 && -5 > -25 -> false      // на этом шаге у нас проблема, так как -5 второе минимальное число, но оно не попадает в условие
```

Давайте добавим еще одно условие, чтобы исправить эту проблему.

```javascript
const arr = [-25, 10, -5]  // min = -25, secondMin = -5

let min = arr[0];                        // первоначальное значение минимального числа
let secondMin = arr[0];                  // первоначальное значение второго минимального числа

for(let i = 1; i < arr.length; i++){
  if(arr[i] < min) {                              // если текущий элемент меньше минимального числа
    secondMin = min;                              // то второе минимальное число становится минимальным
    min = arr[i];                                 // а текущий элемент становится минимальным
  } else if(arr[i] < secondMin && arr[i] > min){  // если текущий элемент меньше второго минимального числа и больше минимального
    secondMin = arr[i];                           // то текущий элемент становится вторым минимальным
  } else if(min === secondMin){                   // если минимальное число равно второму минимальному
    secondMin = arr[i];                           // то второе минимальное число становится текущим элементом
  }
}

console.log(min, secondMin)  // -25, -5
```

Отлично, теперь результат соответствует ожидаемому.

Это один из вариантов исправление функции, но есть и другие способы.



### Второе максимальное число в массиве

По аналогии найдем второе максимальное число в массиве.

```javascript
const arr = [999, 5, -9, -55, 42, 19, 88]  // max = 999, secondMax = 88

let max = arr[0];
let secondMax = arr[0];

for(let i = 1; i < arr.length; i++){
  if(arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if(arr[i] > secondMax && arr[i] < max){
    secondMax = arr[i];
  } else if(max === secondMax){
    secondMax = arr[i];
  }
}

console.log(max, secondMax); // 999, 88
```


### Функция для поиска второго минимального и максимального числа в массиве

Давайте теперь сложим все воедино и напишем функцию, которая будет принимать массив чисел и возвращать объект с двумя свойствами: `secondMin` и `secondMax`.

```javascript
function secondMinAndMax(arr){
    let result = {};
    let min = arr[0];
    let secondMin = arr[0];
    let max = arr[0];
    let secondMax = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if(arr[i] < secondMin && arr[i] > min){
            secondMin = arr[i];
        } else if(min === secondMin){
            secondMin = arr[i];
        }

        if(arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if(arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i];
        } else if(max === secondMax){
            secondMax = arr[i];
        }
    }

    result.secondMin = secondMin;
    result.secondMax = secondMax;

    return result;
}

console.log(secondMinAndMax([8, 0, -9, 1, 4, 6, -7]));  // { secondMin: -7, secondMax: 6 }
```