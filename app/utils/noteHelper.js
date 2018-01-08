const notesList = {
    0: {
        name: 'C',
        freq: 261.63
    },
    1: {
        name: 'C#',
        freq: 277.18
    },
    2: {
        name: 'D',
        freq: 293.66
    },
    3: {
        name: 'D#',
        freq: 311.13
    },
    4: {
        name: 'E',
        freq: 329.63
    },
    5: {
        name: 'F',
        freq: 349.23
    },
    6: {
        name: 'F#',
        freq: 369.99
    },
    7: {
        name: 'G',
        freq: 392
    },
    8: {
        name: 'G#',
        freq: 415.3
    },
    9: {
        name: 'A',
        freq: 440
    },
    10: {
        name: 'A#',
        freq: 466.16
    },
    11: {
        name: 'B',
        freq: 493.88
    },
    12: {
        name: 'C',
        freq: 523.25
    }
};

const getRandomNote = () => {
    console.log('sdf');
    return notesList[parseInt((Math.random()*13))];
};

export default getRandomNote;