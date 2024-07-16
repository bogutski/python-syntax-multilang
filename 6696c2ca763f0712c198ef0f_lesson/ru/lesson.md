В этом уроке мы еще раз разберем как пройтись по элементам массива.

Для этого мы будем использовать цикл for.

```javascript
const arr = [123, 'abc', true, null, undefined, {name: 'Jack'}];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);                // выводим элементы массива
}
// 123
// 'abc'
// true
// null
// undefined
// {name: 'Jack'}
```

Теперь попробуем вывести каждый третий элемент массива.

```javascript
const arr = ['one', 2, 3, 'two', 2, 3, 'three', 2, 3];

for(let i = 0; i < arr.length; i += 3) {  // изменили шаг итерации
    console.log(arr[i]);
}
// 'one'
// 'two'
// 'three'
```

Также, мы можем начать проходить по массиву с определенного индекса и заканчивать на определенном индексе.

В следующем примере, нам нужно вывести в консоль только середину массива, где находятся только `true`.

Для этого мы изменим условие цикла следующим образом: 

* `let i = 2` - первоначальное значение `i` будет равно `2`, что значит, мы начнем цикл с индекса `2`.
* `i < arr.length - 2` - цикл будет выполняться пока `длина массива - 2` будет больше `i`.

```javascript
const arr = [false, false, true, true, true, false, false];

for(let i = 2; i < arr.length - 2; i++) {  // изменили условие цикла
    console.log(arr[i]);
}
// true
// true
// true
```

Если хотите повторить материал о переборе массива, то можете вернуться к уроку:
`Section 12` -> `Цикл for` -> `Перебор массива`