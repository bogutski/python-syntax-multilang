// NAMEEN:
// NAMERU:Проверка надежности паролей

/*
INSTRUCTIONENSTART

INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Напишите функцию `checkPasswordStrength`, которая принимает массив строк (паролей) и массив строк (запрещенных слов).

Функция должна проверять надежность каждого пароля и возвращать массив с оценками `strong` или `weak` для каждого пароля.

Правила для пароля:
* Пароль не может быть меньше шести символов.
* Пароль не может состоять только из строчных или только из заглавных букв.
* Пароль не может полностью или частично совпадать с любым из запрещенных слов.


Примеры запуска функции:
```javascript
console.log(checkPasswordStrength([ 'iliketoCoDe', 'teaMAKEsmehappy', 'abracaDabra', 'pasSword', 'blackcoffeeISthebest'], ['coffee', 'coding', 'happy']))
// [ 'strong', 'weak', 'strong', 'strong', 'weak' ]

console.log(checkPasswordStrength(['12345', 'YUIOYES', 'qwertyuiop'], ['ty', 'xyz']))
// [ 'weak', 'weak', 'weak' ]

console.log(checkPasswordStrength([
      'WPVCX0hbZF', 'igGNgvK5OG',
      'D22Czf66ow', 'GEOwIzFjhR',
      'i9t6fmUTOX', 'wOyuKmT0NF',
      'TcJRDJH5hK', 'JCWytHZFku',
      'Pha6T6twc6', 'WoSVFVDKmK',
      'IMFc41arCc', 'cmEa8Yt6YX',
      'bVMCxZGOSi', 'vvchWGQbof'
    ],
    ['149174', 'fhaoigha', 'CX0hbZ', 'GNgvK5', 'VF', 'ggj4Rw6ZHk', 'V6fn3Ev2kw', '5vslIFZoza', 'mWxsQwIUc8', 'T6fTSxOGTj']))

// [
//   'weak',   'weak',
//   'strong', 'strong',
//   'strong', 'strong',
//   'strong', 'strong',
//   'strong', 'weak',
//   'strong', 'strong',
//   'strong', 'strong'
// ]
```
INSTRUCTIONRUEND
*/

/*
INITIALSOLUTIONSTART
function checkPasswordStrength(){

}
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
function checkPasswordStrength(passwords, commonWords) {
    let res = []

    const commonWordsCheck = (word => {
        for(let str of commonWords) {
            if(word.includes(str)) return true
        }
        return false
    })

    for(let word of passwords) {
        if(word.length < 6 ||
            word.toLowerCase() === word ||
            word.toUpperCase() === word ||
            commonWordsCheck(word)) {
            res.push('weak')
        }else {
            res.push('strong')
        }
    }

    return res
}
// SOLUTIONEND


// OPENTESTSSTART
it('Created function checkPasswordStrength', () => {
  expect(checkPasswordStrength).to.be.a('function');
});

it('checkPasswordStrength([ "iliketoCoDe", "teaMAKEsmehappy", "abracaDabra", "pasSword", "blackcoffeeISthebest"], ["coffee", "coding", "happy"]) should return [ "strong", "weak", "strong", "strong", "weak" ]', function() {
    expect(checkPasswordStrength([ 'iliketoCoDe', 'teaMAKEsmehappy', 'abracaDabra', 'pasSword', 'blackcoffeeISthebest'], ['coffee', 'coding', 'happy'])).to.deep.equal([ 'strong', 'weak', 'strong', 'strong', 'weak' ]);
});

it('checkPasswordStrength(["12345", "YUIOYES", "qwertyuiop"], ["ty", "xyz"]) should return [ "weak", "weak", "weak" ]', function() {
    expect(checkPasswordStrength(['12345', 'YUIOYES', 'qwertyuiop'], ['ty', 'xyz'])).to.deep.equal([ 'weak', 'weak', 'weak' ]);
});

it('checkPasswordStrength(["WPVCX0hbZF", "igGNgvK5OG", "D22Czf66ow", "GEOwIzFjhR", "i9t6fmUTOX", "wOyuKmT0NF", "TcJRDJH5hK", "JCWytHZFku", "Pha6T6twc6", "WoSVFVDKmK", "IMFc41arCc", "cmEa8Yt6YX", "bVMCxZGOSi", "vvchWGQbof"], ["149174", "fhaoigha", "CX0hbZ", "GNgvK5", "VF", "ggj4Rw6ZHk", "V6fn3Ev2kw", "5vslIFZoza", "mWxsQwIUc8", "T6fTSxOGTj"]) should return [ "weak", "weak", "strong", "strong", "strong", "strong", "strong", "strong", "strong", "weak", "strong", "strong", "strong", "strong" ]', function() {
    expect(checkPasswordStrength([
        'WPVCX0hbZF', 'igGNgvK5OG',
        'D22Czf66ow', 'GEOwIzFjhR',
        'i9t6fmUTOX', 'wOyuKmT0NF',
        'TcJRDJH5hK', 'JCWytHZFku',
        'Pha6T6twc6', 'WoSVFVDKmK',
        'IMFc41arCc', 'cmEa8Yt6YX',
        'bVMCxZGOSi', 'vvchWGQbof'
    ], ['149174', 'fhaoigha', 'CX0hbZ', 'GNgvK5', 'VF', 'ggj4Rw6ZHk', 'V6fn3Ev2kw', '5vslIFZoza', 'mWxsQwIUc8', 'T6fTSxOGTj'])).to.deep.equal([
        'weak', 'weak', 'strong', 'strong', 'strong', 'strong',
        'strong', 'strong', 'strong', 'weak', 'strong', 'strong',
        'strong', 'strong'
    ]);
});

it('checkPasswordStrength(["short", "alllowercase", "ALLUPPERCASE"], ["forbidden"]) should return [ "weak", "weak", "weak" ]', function() {
    expect(checkPasswordStrength(["short", "alllowercase", "ALLUPPERCASE"], ["forbidden"])).to.deep.equal([ "weak", "weak", "weak" ]);
});

it('checkPasswordStrength(["StrongPass1", "AnotherStr0ng"], ["weak"]) should return [ "strong", "strong" ]', function() {
    expect(checkPasswordStrength(["StrongPass1", "AnotherStr0ng"], ["weak"])).to.deep.equal([ "strong", "strong" ]);
});

it('checkPasswordStrength(["MixItUp", "Numb3r5", "Symbo!s"], ["Symbo"]) should return [ "strong", "strong", "weak" ]', function() {
    expect(checkPasswordStrength(["MixItUp", "Numb3r5", "Symbo!s"], ["Symbo"])).to.deep.equal([ "strong", "strong", "weak" ]);
});

it('checkPasswordStrength(["MyPass", "YourPass", "OurPass"], ["My", "Your"]) should return [ "weak", "weak", "strong" ]', function() {
    expect(checkPasswordStrength(["MyPass", "YourPass", "OurPass"], ["My", "Your"])).to.deep.equal([ "weak", "weak", "strong" ]);
});

it('checkPasswordStrength(["Password1", "password2", "PASSWORD3"], ["Password"]) should return [ "weak", "weak", "weak" ]', function() {
    expect(checkPasswordStrength(["Password1", "password2", "PASSWORD3"], ["Password"])).to.deep.equal([ "weak", "weak", "weak" ]);
});

it('checkPasswordStrength(["SafePass", "unsafePASS"], ["unsafe"]) should return [ "strong", "weak" ]', function() {
    expect(checkPasswordStrength(["SafePass", "unsafePASS"], ["unsafe"])).to.deep.equal([ "strong", "weak" ]);
});
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND
