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

export function getRandomNote() {
    return notesList[parseInt((Math.random()*13))];
};

export function initAudioCtx() {
    if (typeof window == 'undefined') {
        return false;
    }

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    window.ctx = new AudioContext();
    window.oscillator = window.ctx.createOscillator();
    window.gainNode = window.ctx.createGain();
    window.oscillator.connect(window.gainNode);
    window.gainNode.connect(window.ctx.destination);
    window.gain = window.gainNode.gain;
    window.oscillator.start(0);
    window.gain.value = 0;

    return true;
}

export function changeSoundingNote(storeFreq) {
    if (typeof window == 'undefined') {
        return false;
    }

    window.gain.value = 0;
    window.oscillator.frequency.value = storeFreq;
    window.gain.value = 1;

    return true;
};

export function muteOscillator() {
    window.gain.value = 0;
};
