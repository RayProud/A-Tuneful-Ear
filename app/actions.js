export const START_LISTENING_GAME = 'STATR_LISTENING_GAME';
export const SUBMIT_USER_NOTE = 'SUBMIT_USER_NOTE';
export const SUBMIT_GAME_NOTE = 'SUBMIT_GAME_NOTE';
export const FINISH_THE_GAME = 'FINISH_THE_GAME';
export const GENERATE_A_NOTE = 'GENERATE_A_NOTE';
export const INIT_AUDIO_CTX = 'INIT_AUDIO_CTX';
export const LISTEN_TO_THE_NOTE = 'LISTEN_TO_THE_NOTE';


export function startListeningGame() {
    return {
        type: START_LISTENING_GAME
    };
}

export function listenToTheNote() {
    return {
        type: LISTEN_TO_THE_NOTE
    };
}

export function submitANote(note) {
    return {
        type: SUBMIT_USER_NOTE,
        note
    };
}

export function finishTheGame() {
    return {
        type: FINISH_THE_GAME
    };
}

export function generateGameNote(note) {
    return {
        type: SUBMIT_GAME_NOTE,
        note
    };
}

export function initAudionCtx() {
    return {
        type: INIT_AUDIO_CTX
    };
}
