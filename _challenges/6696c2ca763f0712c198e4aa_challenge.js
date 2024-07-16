// NAMEEN:
// NAMERU:Отформатировать контакт в записной книжке

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Длина строки записной книжки равна 50 символам.

Напишите функцию `formatContact`, которая принимает два параметра: `name`, и `phone`.

Функция должна вернуть строку, которая будет содержать в себе имя и телефон, разделенные точками.

Пример запуска функции:
```javascript
formatContact('  John   ', '  12345678901 '); // 'JOHN............................+1 (234) 567 89-01'
```

Пробелы в начале и конце обоих параметров должны быть удалены.
Имя должно быть в верхнем регистре.

Для форматирования телефона обращайтесь к каждому символу телефона по индексу. Используйте конкатенацию строк.

Возвращаемая строка должна быть длиной 50 символов.

Между именем и телефоном должны быть точки.

Сколько точек нужно поставить, чтобы длина строки была 50 символов, определяйте на основе длины имени и телефона.
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
fun
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function formatContact(name, phone) {
  const n = name.trim().toUpperCase();
  const p = phone.trim();
  const formattedPhone = `+${p[0]} (${p[1]}${p[2]}${p[3]}) ${p[4]}${p[5]}${p[6]} ${p[7]}${p[8]}-${p[9]}${p[10]}`;
  const dotCount = 50 - n.length - formattedPhone.length;
  return n + '.'.repeat(dotCount) + formattedPhone;
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function formatContact', () => {
  expect(formatContact).to.be.a('function');
});

it('formatContact("  John   ", "  12345678901 ") should return "JOHN............................+1 (234) 567 89-01"', () => {
  expect(formatContact('  John   ', '  12345678901 ')).to.be.equal(
    'JOHN............................+1 (234) 567 89-01',
  );
});

it('formatContact("  Samuel   ", "  49876541232 ") should return "SAMUEL..........................+4 (987) 654 12-32"', () => {
  expect(formatContact('  Samuel   ', '  49876541232 ')).to.be.equal(
    'SAMUEL..........................+4 (987) 654 12-32',
  );
});

it('formatContact("  Jane   ", "  32345678901 ") should return "JANE............................+3 (234) 567 89-01"', () => {
  expect(formatContact('  Jane   ', '  32345678901 ')).to.be.equal(
    'JANE............................+3 (234) 567 89-01',
  );
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
