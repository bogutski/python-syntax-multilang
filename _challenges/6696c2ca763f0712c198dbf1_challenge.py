// NAMEEN:Increase by 5
// NAMERU:Увеличение на 5

/*
INSTRUCTIONENSTART
Create a variable `count` and assign it the value `20`.
Then increment the existing value of the `count` variable by `5`.
To do this, write the command:

```python
count = 20
count = count + 5
```
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Создайте переменную `count` и присвойте ей значение `20`:

```python
count = 20
```

Затем запишите команду, увеличивающую имеющееся значение переменной count на `5`:
```python
count = count + 5
```

Итого, в итоге должно получиться так:
```python
count = 20
count = count + 5
```
INSTRUCTIONRUEND
*/

/*
HINTENSTART

HINTENEND
*/

/*
HINTRUSTART

HINTRUEND
*/

/*
INITIALSOLUTIONSTART

INITIALSOLUTIONEND
*/

// SOLUTIONSTART
count = 20
count = count + 5
// SOLUTIONEND

// OPENTESTSSTART
class TestClass(object):
    def test_1(self):
        """'count' variable contains a value"""
        assert count is not None, "Expected 'count' to not be None"

    def test_2(self):
        """The data type of the 'count' variable is number"""
        assert isinstance(count, (int, float)), "Expected 'count' to be a number"

    def test_3(self):
        """The 'count' variable contains 25"""
        assert count == 25, "Expected 'count' to be 25"
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
