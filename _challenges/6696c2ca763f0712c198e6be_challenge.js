// NAMEEN:
// NAMERU:Редактирование контакта в адресной книги. Объект

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `addressBook` принимает 4 параметра: `name`, `lastName`, `phone`, `email`. Все параметры - строки.

Функция должна вернуть объект со следующей структурой:
* `name` - перевести в верхний регистр, необходимо удалить пробелы в начале и в конце строки
* `lastName` - перевести в верхний регистр, необходимо удалить пробелы в начале и в конце строки
* `phone` - необходимо удалить пробелы в начале и в конце строки, первый символ должен быть `+` (добавить при отсутствии)
* `email` - необходимо удалить пробелы в начале и в конце строки, перевести в нижний регистр

Пример запуска функции:
```javascript
addressBook("John", "  Doe", "1234567890", "Jonny@email.com")
// {name: "JOHN", lastName: "DOE", phone: "+1234567890", email: "jonny@email.com"}

addressBook("  ALICE", " Wong ", "+1234567890 ", "wong@email.COM")
// {name: "ALICE", lastName: "WONG", phone: "+1234567890", email: "wong@email.ccom"}
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function addressBook(name, lastName, phone, email) {
    phone = phone.trim()
    if (phone[0] !== '+') {
        phone = `+${phone}`
    }
    return {
        name: name.trim().toUpperCase(),
        lastName: lastName.trim().toUpperCase(),
        phone: phone,
        email: email.trim().toLowerCase(),
    }
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function addressBook', () => {
    expect(addressBook).to.be.a('function');
});

it('addressBook("John", "  Doe", "1234567800", "  john@email.com  ") should return {name: "JOHN", lastName: "DOE", phone: "+1234567800", email: "john@email.com"}', () => {
    expect(addressBook("John", "  Doe", "1234567800", "  john@email.com  ")).eql({
        name: "JOHN",
        lastName: "DOE",
        phone: "+1234567800",
        email: "john@email.com"
    });
});

it('addressBook("  ALICE", " Wong ", "1234567890 ", "wongAlice@email.com") should return {name: "ALICE", lastName: "WONG", phone: "+1234567890", email: "wongalice@email.com"}', () => {
    expect(addressBook("  ALICE", " Wong ", "1234567890 ", "wongAlice@email.com")).eql({
        name: "ALICE",
        lastName: "WONG",
        phone: "+1234567890",
        email: "wongalice@email.com"
    });
});

it('addressBook("Alice ", "Wong ", "+1234567890 ", "Alice@email.com") should return {name: "ALICE", lastName: "WONG", phone: "+1234567890", email: "alice@email.com"}', () => {
    expect(addressBook("Alice ", "Wong ", "+1234567890 ", "Alice@email.com")).eql({
        name: "ALICE",
        lastName: "WONG",
        phone: "+1234567890",
        email: "alice@email.com"
    });
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
