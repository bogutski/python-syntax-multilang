Переменные в Python могут начинаться с:
* буквы (a–z, A–Z)
* подчеркивания (`_`)

Но не могут начинаться с цифры или содержать пробелы и специальные символы, такие как `$`, `-`, `!`, и т.д.

```python
name = 'Alice'
_age = 20
```

Имена переменных **должны быть понятными** и описывать, что в них хранится. Чем понятнее — тем лучше.

С опытом вы научитесь давать осмысленные имена переменным.


#### Примеры переменных, описывающих адрес
```python
address = "123, Market street"  # адрес
city = "San Francisco"          # город
state = "CA"                    # штат
zip_code = "94107"              # почтовый индекс
```

Все переменные относятся к адресу, и это легко понять из их названий.

#### Переменные, описывающие собаку
```python
name = "Mango"
age = 2
breed = "shepherd"
color = "black"
```

Такие переменные допустимы, но более читаемым вариантом будет использование префикса:

```python
dog_name = "Mango"
dog_age = 2
dog_breed = "shepherd"
dog_color = "black"
```

Если у вас в коде будет несколько сущностей (кошка, рыба, птица), полезно в именах отражать к какому объекту относится переменная:

```python
cat_name = "Poly"
fish_color = "orange"
bird_breed = "canary"
```

#### Хорошие примеры переменных
```python
days_in_year = 365  # хорошо: понятно, что это за число

user_name = "Alice"
user_age = 28

box_price = 10.5
box_color = "blue"
box_weight = 2.4
box_type = "cardboard"
box_volume = 1.2
```

### Правила стиля

Python использует стиль `snake_case`:
* все буквы строчные
* слова разделяются подчеркиванием (`_`)

```python
zip_code = "987A-987A"
price_client = 100
distance_from_client_to_warehouse = 456
delivery_address_main = "56 Second St"
```

#### Заглавные буквы — только для констант
Константы пишут в верхнем регистре:

```python
PI = 3.14
IP = "192.168.0.10"
DATABASE_LOGIN = "admin"
```

#### Структура: сначала сущность, потом свойство
```python
phone_main = "5556677"
delivery_driver = "Andrew"
```

### Ошибки и советы в именовании переменных

#### Нельзя начинать имя с цифры
```python
12month = "December"  # ❌ ошибка
month12 = "December"  # ✅ правильно
```

#### Нельзя использовать дефис
```python
time-from-a-to-b = 10  # ❌ ошибка
time_from_a_to_b = 10  # ✅ правильно
```

#### Нельзя использовать пробел
```python
value Client = 100  # ❌ ошибка
value_client = 100  # ✅ правильно
```

#### Имя должно быть с маленькой буквы
```python
LastName = "Smith"  # ❌ в Python имена переменных с большой буквы — не принято
last_name = "Smith" # ✅ правильно
```

#### Не включайте значение переменной в её имя
```python
last_name_smith = "Smith"  # ❌ не надо дублировать значение
phone_5556677 = "5556677"  # ❌ неинформативно

last_name = "Smith"  # ✅ правильно
phone = "5556677"    # ✅ правильно
```

#### Не используйте транслит или другие языки
```python
mashina = "A1R1"  # ❌ используйте английские слова
español = "Henry" # ❌ лучше писать на английском
你好 = "Hello"     # ❌ только латиница

car = "Volvo"     # ✅ правильно
stop = "Main St"  # ✅ правильно
```

#### Значение переменной может быть любым
```python
greeting_english = "Hello"
greeting_chinese = "你好"
greeting_spanish = "Hola"
greeting_japan = "こんにちは"

smile = "😀"
```

#### Избегайте однобуквенных имен
```python
a = "Hello"          # ❌ неинформативно
q = 123              # ❌ неинформативно

first_name = "John"  # ✅ правильно
```

#### Нельзя использовать зарезервированные слова
```python
def = 5        # ❌ def — ключевое слово
class = "A"    # ❌ class — ключевое слово
None = "no"    # ❌ нельзя переопределять None
```

Полный список зарезервированных слов можно получить с помощью команды в Python:
```python
import keyword
print(keyword.kwlist)
```

Или просто введите в поисковике:
`python список ключевых слов` или `python reserved keywords list`


### Примеры хорошего именования
```python
number_of_books = 500
book_title = "Treasure Island"
month_12 = "December"
sum_of_numbers = a + b
total_number_of_lines = 20
bug_is_harmful = True
type_of_variable = "string"
```
