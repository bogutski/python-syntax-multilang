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
def test_reverse_words_1():
    assert (reverse_words('hello localcoding') == 'localcoding hello')

def test_reverse_words_2():
    assert (reverse_words('what we will do in the templates') == 'templates the in do will we what')
// OPENTESTSEND

// HIDDENTESTSSTART

// HIDDENTESTSEND