export const START_LISTENING_GAME = 'STATR_LISTENING_GAME';
export const SUBMIT_USER_NOTE = 'SUBMIT_USER_NOTE';
export const SUBMIT_GAME_NOTE = 'SUBMIT_GAME_NOTE';
export const FINISH_THE_GAME = 'FINISH_THE_GAME';
export const GENERATE_A_NOTE = 'GENERATE_A_NOTE';

export function startListeningGame() {
    return {
        type: START_LISTENING_GAME
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