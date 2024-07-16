// NAMEEN:
// NAMERU:Преобразовать строку и проверить является ли она палиндромом

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Функция `checkPalindrome` принимает строку `str`.

Строка может содержать пробелы в начале и в конце, а также может содержать заглавные буквы.

Перед проверкой, является ли строка палиндромом, необходимо привести строку к нижнему регистру и удалить пробелы в начале и в конце.

Функция возвращает строку, которая сообщает, является ли строка палиндромом или нет:
* если строка является палиндромом, то возвращается строка `str is a palindrome`
* если строка не является палиндромом, то возвращается строка `str is not a palindrome`

где `str` - это строка, которая была передана в функцию но уже приведена к нижнему регистру и без пробелов в начале и в конце.

Примеры запуска функции:
```javascript
checkPalindrome("rePAPER  ") // "repaper is a palindrome"
checkPalindrome("abac") // "abac is not a palindrome"
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkPalindrome(str) {
    str = str.trim().toLowerCase();
    let middle = str.length / 2
    for (let i = 0; i < middle; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return `${str} is not a palindrome`;
        }
    }
    return `${str} is a palindrome`
}

// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkPalindrome', () => {
    expect(checkPalindrome).to.be.a('function');
});

it('checkPalindrome("repaper") should return "repaper is a palindrome"', () => {
    expect(checkPalindrome("repaper")).to.equal("repaper is a palindrome");
});

it('checkPalindrome("abaa") should return "abaa is not a palindrome"', () => {
    expect(checkPalindrome("abaa")).to.equal("abaa is not a palindrome");
});

it('checkPalindrome("leVEl") should return "level is a palindrome"', () => {
    expect(checkPalindrome("leVel")).to.equal("level is a palindrome");
});

it('checkPalindrome("salut") should return "salut is not a palindrome"', () => {
    expect(checkPalindrome("salut")).to.equal("salut is not a palindrome");
});

it('checkPalindrome(" 2A3*3a2 ") should return "2a3*3a2 is a palindrome"', () => {
    expect(checkPalindrome(" 2A3*3a2 ")).to.equal("2a3*3a2 is a palindrome");
});

// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
