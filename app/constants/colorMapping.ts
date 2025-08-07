export const wordSources: Record<string, string[]> = {
    english: [
        'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt',
    ],
    russian: [
        'https://raw.githubusercontent.com/ebolblga/car-p18s/master/public/Library/ebeba.txt',
        'https://raw.githubusercontent.com/ebolblga/car-p18s/master/public/Library/russianUTF-8.txt',
        'https://raw.githubusercontent.com/ebolblga/car-p18s/master/public/Library/swears.txt',
    ],
}

export const mapping: Record<string, string> = {
    // TODO: remove junk section
    // Junk
    ' ': '',
    '.': '',
    '-': '',
    // 0
    '0': '0',
    o: '0',
    O: '0',
    о: '0',
    О: '0',
    // 1
    '1': '1',
    l: '1',
    L: '1',
    I: '1',
    // 2
    '2': '2',
    z: '2',
    Z: '2',
    // 3
    '3': '3',
    з: '3',
    З: '3',
    // 4
    '4': '4',
    h: '4',
    ч: '4',
    Ч: '4',
    // 5
    '5': '5',
    s: '5',
    S: '5',
    // 6
    '6': '6',
    G: '6',
    б: '6',
    Б: '6',
    // 7
    '7': '7',
    t: '7',
    T: '7',
    // 8
    '8': '8',
    X: '8',
    // 9
    '9': '9',
    g: '9',
    q: '9',
    д: '9',
    Д: '9',
    // a
    a: 'a',
    A: 'A',
    а: 'a',
    А: 'А',
    // b
    b: 'b',
    B: 'B',
    в: 'B',
    В: 'B',
    // c
    c: 'c',
    C: 'C',
    с: 'c',
    С: 'C',
    // d
    d: 'd',
    D: 'D',
    // e
    e: 'e',
    E: 'E',
    е: 'e',
    Е: 'e',
    // f
    f: 'f',
    F: 'F',
    // 10
    ю: '10',
    Ю: '10',
    // 11
    N: '11',
    // 12
    R: '12',
}

export const allowedLengths = [3, 4, 6, 8]
