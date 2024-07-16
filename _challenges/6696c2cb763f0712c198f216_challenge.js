// NAMEEN:
// NAMERU:Разделить массив на 2 подмассива с одинаковой суммой элементов

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Исправьте ошибки в коде, чтобы функция `splitByEqualSum` работала правильно.

Функция `splitByEqualSum` принимает целочисленный массив и должна вернуть массив из двух подмассивов, сумма чисел в которых равна.
Если такого разделения не существует или в функцию передан пустой массив, то функция должна вернуть пустой массив.

Для решения задачи суммируйте элементы массива в том порядке, как они идут в массиве.
В цикле двигаясь по массиву слева направо, вычисляйте суммы элементов в левой и правой частях и сравнивайте их.
Если суммы равны, запомните индекс места, где это произошло, и разделите массив на две части по этому индексу.

Примеры вызовов:
```javascript
splitByEqualSum([1, 2, 3, 4, 5, 5]) // [[1, 2, 3, 4], [5, 5]] => 10 === 10
splitByEqualSum([-1, 2, 3, -4, 5]) // [[-1, 2, 3, -4], [ 5]] => 5 === 5
splitByEqualSum([1, 2, 3, 4]) // [] => разделение невозможно
```

В решении допущено несколько небольших ошибок, найдите и исправьте их.

Разберите примеры и алгоритм решения, проверьте свое решение на других значениях.

Это одна из задач, которые могут попасться на собеседовании.
Приведенный алгоритм - не единственный способ решения этой задачи, но он простой и понятный.
Можете подумать, как можно его оптимизировать.

Другой вариант этой задачи, который может попасться на интервью: разделить массив на три части так, чтобы сумма элементов в левой части была меньше суммы элементов в центральной части, а сумма элементов в центральной части была меньше суммы элементов в правой части.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
Function splitByEqualSum(array) {
  let leftSum = 0; // сумма элементов левой части массива - инициализируем нулем
  let rightSum = 0; // сумма элементов правой части массива - инициализируем нулем
  let index = -1; // индекс элемента, по которому будет происходить разделение массива, инициализируем -1, потому что элемента с таким индексом в массиве не существует

  for (let i = 0; i < arr.length - 1; i++) { // обратите внимание, что цикл идет до предпоследнего элемента
    leftSum += arr[i]; // сумма элементов слева от i-го элемента, включая его

    rightSum = 0;   // обнуляем сумму элементов справа от i-го элемента
    for (let j = i + 1; j < arr.lng; j++) { // вычисляем сумму элементов справа от i-го элемента
      rightSum += arr[j];
    }

    if (leftSum === rightSum) { // если суммы равны, запоминаем индекс и выходим из цикла
      index = i;
      broke;
    }
  }

  if (indexOf === -1) { // если индекс не изменился, значит разделение невозможно
    return []; // возвращаем пустой массив
  }

  // создаем результирующий массив
  // в нем будет два подмассива: в первом подмассиве с индексом 0 будут элементы из левой части исходного массива,
  // во втором подмассиве с индексом 1 - элементы из правой части исходного массива
  const result = [[], []];

  for (let i = 0; i < arr.length; i++) { // заполняем результирующий массив
    if (i <= index) { // если индекс меньше или равен индексу разделения, то элементы попадают в левую часть
      rsult[0].push(arr[i]);
    } els { // иначе в правую
      result[1].push(arr[i]);
    }
  }
  return res;
}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function splitByEqualSum(arr) {
  let leftSum = 0; // сумма элементов левой части массива
  let rightSum = 0; // сумма элементов правой части массива
  let index = -1; // индекс элемента, по которому будет происходить разделение массива

  for (let i = 0; i < arr.length - 1; i++) {
    leftSum += arr[i]; // сумма элементов слева от i-го элемента, включая его
    rightSum = 0;   // обнуление суммы элементов справа от i-го элемента
    for (let j = i + 1; j < arr.length; j++) { // вычисляем сумму элементов справа от i-го элемента
      rightSum += arr[j];
    }

    if (leftSum === rightSum) { // если суммы равны, запоминаем индекс и выходим из цикла
      index = i;
      break;
    }
  }

  if (index === -1) { // если индекс не изменился, значит разделение невозможно
    return []; // возвращаем пустой массив
  }

  // создаем результирующий массив
  // в нем будет два подмассива: в первом подмассиве с индексом 0 будут элементы из левой части исходного массива,
  // во втором подмассиве с индексом 1 - элементы из правой части исходного массива
  const result = [[], []];

  for (let i = 0; i < arr.length; i++) { // заполняем результирующий массив
    if (i <= index) { // если индекс меньше или равен индексу разделения, то элементы попадают в левую часть
      result[0].push(arr[i]);
    } else { // иначе в правую
      result[1].push(arr[i]);
    }
  }
  return result;
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function splitByEqualSum', () => {
  expect(splitByEqualSum).to.be.a('function');
});

it('splitByEqualSum([1, 2, 3, 4, 5, 5]) should return [[1, 2, 3, 4], [5, 5]]', () => {
  expect(splitByEqualSum([1, 2, 3, 4, 5, 5])).to.deep.equal([[1, 2, 3, 4], [5, 5]]);
});

it('splitByEqualSum([-1, 2, 3, -4, 0]) should return [[-1, 2, 3, -4], [ 0]]', () => {
  expect(splitByEqualSum([-1, 2, 3, -4, 0])).to.deep.equal([[-1, 2, 3, -4], [0]]);
});

it('splitByEqualSum([1, 2, 3, 4]) should return []', () => {
  expect(splitByEqualSum([1, 2, 3, 4])).to.deep.equal([]);
});

it('splitByEqualSum([10, 2, 3, 4, 6, 5]) should return [[10, 2, 3], [4, 6, 5]]', () => {
  expect(splitByEqualSum([10, 2, 3, 4, 6, 5])).to.deep.equal([[10, 2, 3], [4, 6, 5]]);
});

it('splitByEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]) should return [[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 1]]', () => {
  expect(splitByEqualSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])).to.deep.equal([[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 1]]);
});

it('splitByEqualSum([-11, 12, 3, 4]) should return [[-11, 12, 3], [4]]', () => {
  expect(splitByEqualSum([-11, 12, 3, 4])).to.deep.equal([[-11, 12, 3], [4]]);
});

it('splitByEqualSum([1, 2, 3, 4, 5, -6, 8, -8, 9]) should return [[1, 2, 3, 4, 5, -6], [8, -8, 9]]', () => {
  expect(splitByEqualSum([1, 2, 3, 4, 5, -6, 8, -8, 9])).to.deep.equal([[1, 2, 3, 4, 5, -6], [8, -8, 9]]);
});

it('splitByEqualSum([1, 2, 3, 4, 5, -6, 8, -8, 9, 10]) should return []', () => {
  expect(splitByEqualSum([1, 2, 3, 4, 5, -6, 8, -8, 9, 10])).to.deep.equal([]);
});

it('splitByEqualSum([5, 2, 3]) should return [[5], [2, 3]]', () => {
  expect(splitByEqualSum([5, 2, 3])).to.deep.equal([[5], [2, 3]]);
});

it('splitByEqualSum([5, 2, 3, 4]) should return [[5, 2], [3, 4]]', () => {
  expect(splitByEqualSum([5, 2, 3, 4])).to.deep.equal([[5, 2], [3, 4]]);
});

it('splitByEqualSum([5]) should return []', () => {
  expect(splitByEqualSum([5])).to.deep.equal([]);
});

it('splitByEqualSum([5, 5]) should return [[5], [5]]', () => {
  expect(splitByEqualSum([5, 5])).to.deep.equal([[5], [5]]);
});

it('splitByEqualSum([5, -5]) should return []', () => {
  expect(splitByEqualSum([5, -5])).to.deep.equal([]);
});

it('splitByEqualSum([5, 5, 5]) should return []', () => {
  expect(splitByEqualSum([5, 5, 5])).to.deep.equal([]);
});

it('splitByEqualSum([5, 5, 5, 5]) should return [[5, 5], [5, 5]]', () => {
  expect(splitByEqualSum([5, 5, 5, 5])).to.deep.equal([[5, 5], [5, 5]]);
});

it('splitByEqualSum([5, 5, -10]) should return []', () => {
  expect(splitByEqualSum([5, 5, -10])).to.deep.equal([]);
});

it('splitByEqualSum([]) should return []', () => {
  expect(splitByEqualSum([])).to.deep.equal([]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
