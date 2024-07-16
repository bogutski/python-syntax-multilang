![](https://course-qa-basics.s3.us-west-1.amazonaws.com/boy-change.png)

Каждый элемент массива имеет свой уникальный индекс, начиная с нуля.

Чтобы изменить элемент массива, нужно обратиться к нему по индексу и присвоить ему новое значение.

```javascript
const students = ['Alice', 'Bill', 'Carson'];

students[1] = 'Bob';
console.log(students); // ['Alice', 'Bob', 'Carson']

// приведем второй элемент массива в верхний регистр
students[1] = students[1].toUpperCase();
console.log(students); // ['Alice', 'BOB', 'Carson']
```

Если мы хотим поменять местами два элемента в массиве, нам надо ввести дополнительную переменную.

Рассмотрим пример:

```javascript
const students = ['Alice', 'Bill', 'Carson'];

const firstEl = students[0];
students[0] = students[1];
students[1] = firstEl;

console.log(students); // ['Bill', 'Alice', 'Carson']
```

Кроме того, массивы могут содержать не только примитивные типы данных, такие как числа и строки, но и другие сложные типы данных, такие как объекты.

```javascript
const students = [
  { name: 'Alice', id: 987 }, 
  { name: 'Bob', id: 357 }, 
  { name: 'Carson', id: 753 }
];

students[1].name = 'Bill';

console.log(students); // [{ ... }, { name: 'Bill', id: 357 }, { ... }]
```

В JavaScript объекты являются ссылочным типом данных, что означает, что переменная, содержащая объект, на самом деле хранит ссылку на объект в памяти, а не сам объект.

При работе с объектами в массивах следует учитывать, что при изменении свойства объекта, хранящегося в массиве, это изменение будет отражаться везде, где используется этот объект.

Это может привести к непредсказуемым результатам, если не учитывать эту особенность:

```javascript
const student1 = { name: 'Alice', id: 987 }; 
const student2 = { name: 'Bob', id: 357 };
const student3 = { name: 'Carson', id: 753 };

const students = [student1, student2, student3]
students[1].name = 'Bill';

console.log(students); // [{ ... }, { name: 'Bill', id: 357 }, { ... }]
console.log(student2); // { name: 'Bill', id: 357 }
```

Теперь полностью изменим второй элемент массива :

```javascript
const student1 = { name: 'Alice', id: 987 }; 
const student2 = { name: 'Bob', id: 357 };
const student3 = { name: 'Carson', id: 753 };

const students = [student1, student2, student3]
students[1] = { name: 'Alan', id: 432 };

console.log(students); // [{ ... }, { name: 'Alan', id: 432 }, { ... }]
console.log(student2); // { name: 'Bob', id: 357 }
```

Напишем функцию `tenToZero`, которая принимает массив `arr`, находит элемент `target`, заменяет его на `replacement`, и возвращает измененный массив: 

```javascript
function tenToZero(arr, target, replacement) {
  const targetIndex = arr.indexOf(target);
  arr[targetIndex] = replacement;
  return arr;
}

console.log(tenToZero([1, 23, 4, 1, 4, 6], 4, 'four')); // [1, 23, 'four', 1, 4, 6]
```
