// NAMEEN:Print all words in a sentence in reverse order
// NAMERU:Вывести все слова в предложении в обратном порядке

/*
INSTRUCTIONENSTART
Instructions EN
INSTRUCTIONENEND
*/

/*
INSTRUCTIONRUSTART
Instructions RU
INSTRUCTIONRUEND
*/

/*
HINTENSTART
Hint EN
HINTENEND
*/

/*
HINTRUSTART
Hint RU
HINTRUEND
*/

/*
INITIALSOLUTIONSTART
def reverse_words(arr):
INITIALSOLUTIONEND
*/

// SOLUTIONSTART
def reverse_words(arr):
    tmp = arr.split(" ")
    return " ".join(tmp[::-1])
// SOLUTIONEND


// OPENTESTSSTART
class TestClass(object):
    def test_1(self):
        """reverse_words correctly reverses 'hello localcoding'"""
        assert reverse_words('hello localcoding') == 'localcoding hello', \
            "Expected reversed result to be 'localcoding hello'"

    def test_2(self):
        """reverse_words correctly reverses 'what we will do in the templates'"""
        assert reverse_words('what we will do in the templates') == 'templates the in do will we what', \
            "Expected reversed result to be 'templates the in do will we what'"
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND