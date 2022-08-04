const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let count10 = 0
    let countSlice = 0
    let arr = []
    let result = []

    while (count10 < expr.length / 10) {
        arr.push(expr.split('').slice(countSlice, (countSlice + 10)))
        count10++
        countSlice += 10
    }

    result = arr.map((item) => {
        if (item.join('').includes('*')) return ' '
        return MORSE_TABLE[item.join('').replace(/^0+/, '').replace(/11/g, '-').replace(/10/g, '.')]
    })

    return result.join('')
}

module.exports = {
    decode
}