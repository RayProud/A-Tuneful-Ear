import { combineReducers } from 'redux';
import * as consts from './actions';

const gameInitialState = {
    gameIsActive: false,
    userNote: false,
    gameNote: false,
    audioIsInited: false
};

function gameReducer(state = gameInitialState, action) {
    switch (action.type) {
        case consts.START_LISTENING_GAME:
            return Object.assign({}, state, {
                gameIsActive: true
            });
        case consts.FINISH_THE_GAME:
            return Object.assign({}, state, {
                gameIsActive: false
            });
        case consts.SUBMIT_USER_NOTE:
            return Object.assign({}, state, {
                userNote: action.note
            });
        case consts.SUBMIT_GAME_NOTE:
            return Object.assign({}, state, {
                gameNote: action.note
            });
        case consts.INIT_AUDIO_CTX:
            return Object.assign({}, state, {
                audioIsInited: true
            });
        default:
            return state;
    }
}

export default function createReducer() {
    return combineReducers({
        game: gameReducer
    });
}
