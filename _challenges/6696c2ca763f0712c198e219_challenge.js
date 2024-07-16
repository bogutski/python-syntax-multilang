// NAMEEN:
// NAMERU:Сравнение на равенство и неравенство

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `n1` и присвойте ей значение число 1.

Создайте переменную с именем `n2` и присвойте ей значение строка '1'.

Создайте переменную `isStrictEqual` и присвойте ей результат сравнения (строгое равенство) переменной `n1`
и переменной `n2`.

Создайте переменную `isEqual` и присвойте ей результат сравнения (нестрогое равенство) переменной `n1`
и переменной `n2`.

Создайте переменную `isStrictNotEqual` и присвойте ей результат сравнения (строгое неравенство) переменной `n1`
и переменной `n2`.

Создайте переменную `isNotEqual` и присвойте ей результат сравнения (нестрогое неравенство) переменной `n1`
и переменной `n2`.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
const n1 = 1;
const n2 = "1";
const isStrictEqual = n1 === n2;
const isEqual = n1 == n2;
const isStrictNotEqual = n1 !== n2;
const isNotEqual = n1 != n2;
// SOLUTIONEND


// OPENTESTSSTART
it("the `n1` variable exists and has a value", () => {
  expect(n1).not.undefined;
});

it("the variable `n1` is of type number", () => {
  expect(n1).a("number");
});

it("the `n1` variable is 1", () => {
  expect(n1).eq(1);
});

it("the variable `n2` exists and has a value", () => {
  expect(n2).not.undefined;
});

it("the variable `n2` is of type string", () => {
  expect(n2).a("string");
});

it("the `n2` variable is `1`", () => {
  expect(n2).eq("1");
});

it("the variable `isStrictEqual` exists and has a value", () => {
  expect(isStrictEqual).not.undefined;
});

it("the variable `isStrictEqual` is of type boolean", () => {
  expect(isStrictEqual).a("boolean");
});

it("the `isStrictEqual` variable is false", () => {
  expect(isStrictEqual).false;
});

it("the variable `isEqual` exists and has a value", () => {
  expect(isEqual).not.undefined;
});

it("the variable `isEqual` is of type boolean", () => {
  expect(isEqual).a("boolean");
});

it("the `isEqual` variable is true", () => {
  expect(isEqual).true;
});

it("the variable `isStrictNotEqual` exists and has a value", () => {
  expect(isStrictNotEqual).not.undefined;
});

it("the variable `isStrictNotEqual` is of type boolean", () => {
  expect(isStrictNotEqual).a("boolean");
});

it("the `isStrictNotEqual` variable is true", () => {
  expect(isStrictNotEqual).true;
});

it("the variable `isNotEqual` exists and has a value", () => {
  expect(isNotEqual).not.undefined;
});

it("the variable `isNotEqual` is of type boolean", () => {
  expect(isNotEqual).a("boolean");
});

it("the `isNotEqual` variable is false", () => {
  expect(isNotEqual).false;
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
