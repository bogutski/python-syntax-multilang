// NAMEEN:The first variable. The number
// NAMERU:Первая переменная. Число

/*
INSTRUCTIONENSTART
Create a variable named `price` and assign the number `123` to it.
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную с именем `price` и присвойте ей число `123`.
INSTRUCTIONRUEND
*/

/*
HINTENSTART
```python
price = 123
```
HINTENEND
*/

/*
HINTRUSTART
```python
price = 123
```
HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
price = 123
// SOLUTIONEND


// OPENTESTSSTART
class TestClass(object):
  def test_1(self):
    assert 'price' in globals(), "The variable 'price' should be defined"

  def test_2(self):
    assert price == 123, "The value of 'price' should be 123"
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
