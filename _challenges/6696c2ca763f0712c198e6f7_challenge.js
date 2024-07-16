// NAMEEN:
// NAMERU:Есть ли массивы одинаковой длины?

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напиши функцию `arraysSameLength`, которая принимает три параметра:
* `arr1` - массив,
* `arr2` - массив,
* `arr3` - массив.

Функция должна вернуть строку, в которой будет указано, какие из массивов имеют одинаковую длину:

* Если все массивы имеют одинаковую длину, то функция должна вернуть строку "All arrays are the same length".

* Если длина `arr1` равна длине `arr2`, то функция должна вернуть строку
`Arr1 and Arr2 are the same length`.

* Если длина `arr1` равна длине `arr3`, то функция должна вернуть строку
`Arr1 and Arr3 are the same length`.

* Если длина `arr2` равна длине `arr3`, то функция должна вернуть строку
`Arr2 and Arr3 are the same length`.

* Если все массивы имеют разную длину, то функция должна вернуть строку `All arrays are different lengths`.

Пример запуска функции:
```javascript
arraysSameLength([0], [0], [0, 1, 2]); // "Arr1 and Arr2 are the same length"
arraysSameLength([0], [0, 1, 2], [0]); // "Arr1 and Arr3 are the same length"
arraysSameLength([0, 1, 2], [0], [0]); // "Arr2 and Arr3 are the same length"
arraysSameLength([0, 1, 2], [0, 1, 2], [0, 1, 2]); // "All arrays are the same length"
arraysSameLength([1, 7, 3], [], [0]); // "All arrays are different lengths"
```

Похожий пример со строками:
```javascript
function stringsSameLength(str1, str2){
  if(str1.length === str2.length){
    return "Strings are the same length";
  } else {
    return "Strings are different lengths";
  }
}
```

INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function arraysSameLength(arr1, arr2, arr3){
  if(arr1.length === arr2.length && arr1.length === arr3.length){
    return "All arrays are the same length";
  } else if(arr1.length === arr2.length){
    return "Arr1 and Arr2 are the same length";
  } else if(arr1.length === arr3.length){
    return "Arr1 and Arr3 are the same length";
  } else if(arr2.length === arr3.length){
    return "Arr2 and Arr3 are the same length";
  } else {
    return "All arrays are different lengths";
  }
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function arraysSameLength', () => {
  expect(arraysSameLength).to.be.a('function');
});

it('Function arraysSameLength([1, 7, 3], [], [0]) returns "All arrays are different lengths"', () => {
  expect(arraysSameLength([1, 7, 3], [], [0])).eq("All arrays are different lengths");
});

it('Function arraysSameLength([0], [0, 1, 2], [0]) returns "Arr1 and Arr3 are the same length"', () => {
  expect(arraysSameLength([0], [0, 1, 2], [0])).eq("Arr1 and Arr3 are the same length");
});

it('Function arraysSameLength([0, 1, 2], [0], [0]) returns "Arr2 and Arr3 are the same length"', () => {
  expect(arraysSameLength([0, 1, 2], [0], [0])).eq("Arr2 and Arr3 are the same length");
});

it('Function arraysSameLength([0, 1, 2], [0, 1, 2], [0]) returns "Arr1 and Arr2 are the same length"', () => {
  expect(arraysSameLength([0, 1, 2], [0, 1, 2], [0])).eq("Arr1 and Arr2 are the same length");
});

it('Function arraysSameLength([0, 1, 2], [0, 1, 2], [0, 1, 2]) returns "All arrays are the same length"', () => {
  expect(arraysSameLength([0, 1, 2], [0, 1, 2], [0, 1, 2])).eq("All arrays are the same length");
});


// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
