Переменная в Python может **_содержать любые данные_**, и тип значения **_может изменяться_** в процессе работы программы.

Например: 
```python
any_type = "Hello"   # <-- строка (string)
any_type = 123456    # <-- число (int)
```
При создании переменной тип не указывается.
Языки, в которых тип переменной определяется во время выполнения, называются - **динамически типизированными**. 

Это значит, что типы данных существуют, но переменные не «привязаны» к какому-то одному типу навсегда.


#### Как узнать тип данных?
Чтобы узнать, какой тип данных содержится в переменной, в Python используется функция `type()`.

Например:

```python
a = 50
print(type(a))      # <class 'int'>

b = 78.5
print(type(b))      # <class 'float'>

big = 1234567890123456789012345678901234567890
print(type(big))    # <class 'int'> (в Python int может быть сколь угодно большим)

c = a + b
print(c)            # 128.5
print(type(c))      # <class 'float'>
```

```python
a = 5
b = 10

c = a < b         # 'a' меньше 'b'
print(c)          # True
print(type(c))    # <class 'bool'>

d = a > b         # 'a' больше 'b'
print(d)          # False
print(type(d))    # <class 'bool'>
```

```python
a = "Hello!"
original_type = type(a)

a = 100
type_after_changing = type(a)

print(original_type)         # <class 'str'>
print(type_after_changing)   # <class 'int'>
```

```python
a = None
print(type(a))     # <class 'NoneType'>

a = "None"         # <-- изменили значение переменной на строку
print(type(a))     # <class 'str'>

a = None           # <-- снова изменили значение переменной
print(type(a))     # <class 'NoneType'>
```

```python
new_obj = {}
print(type(new_obj))            # <class 'dict'>

arr = []
print(type(arr))                # <class 'list'>

def function_for_all():
    pass
print(type(function_for_all))   # <class 'function'>
```

В следующих лекциях мы подробно рассмотрим все основные типы данных в Python: числа, строки, списки, словари, булевы значения и многое другое. 

Вы научитесь создавать и использовать переменные разных типов, а также узнаете, как работать с ними эффективно.