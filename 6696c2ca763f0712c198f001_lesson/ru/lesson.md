### Минимальное число в массиве

Найдем минимальное число в массиве.

```javascript
const arr = [5, 15, 0, 9, 45, -8]       // минимальное число в массиве -8

let min = arr[0];                       // предположим, что первый элемент массива минимальный

for (let i = 1; i < arr.length; i++) {  // переберем все элементы массива
    if (arr[i] < min) {                 // если текущий элемент меньше минимального
        min = arr[i];                   // то обновим значение минимального
    }
}

console.log(min);  // -8
```

Обратите внимание, что цикл мы начинаем с индекса `1`, так как первый элемент массива мы уже записали в переменную `min` и нам не нужно его проверять снова.


### Максимальное число в массиве

Теперь найдем максимальное число в массиве.

```javascript
const arr = [5, 15, 0, 9, 45, -8]       // максимальное число в массиве 45

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);  // 45
```

Отлично, все работает как надо.


### Функция для поиска минимального и максимального числа в массиве

Давайте напишем функцию, которая будет принимать массив чисел и возвращать массив с минимальным и максимальным числом.

```javascript
function minAndMax(arr){
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return [min, max];
}

console.log(minAndMax([5, -25, 14, 69, 100, 46, 0]));      // [ -25, 100 ]
console.log(minAndMax([-5, -53, -6, -7, -120, -3, -48]));  // [ -120, -3 ]
```