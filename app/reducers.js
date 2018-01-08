import { LOCATION_CHANGE } from 'react-router-redux';
export const START_LISTENING_GAME = 'STATR_LISTENING_GAME';
export const SUBMIT_USER_NOTE = 'SUBMIT_USER_NOTE';
export const SUBMIT_GAME_NOTE = 'SUBMIT_GAME_NOTE';
export const FINISH_THE_GAME = 'FINISH_THE_GAME';
import { combineReducers } from 'redux';

// const routeInitialState = {
//     location: null
// };
//
// function routeReducer(state = routeInitialState, action) {
//     switch (action.type) {
//         case LOCATION_CHANGE:
//             return {
//                 ...state,
//                 location: action.payload
//             }
//         default:
//             return state;
//     }
// }

const gameInitialState = {
    gameIsActive: false,
    userNote: null,
    gameNote: null
};

function gameReducer(state = gameInitialState, action) {
    switch (action.type) {
        case START_LISTENING_GAME:
            return Object.assign({}, state, {
                gameIsActive: true
            });
        case FINISH_THE_GAME:
            return Object.assign({}, state, {
                gameIsActive: false
            });
        case SUBMIT_USER_NOTE:
            return Object.assign({}, state, {
                userNote: action.note
            });
        case SUBMIT_GAME_NOTE:
            return Object.assign({}, state, {
                gameNote: action.note
            });
        default:
            return state;
    }
}

export default function createReducer(injectedReducers) {
    return combineReducers({
        // route: routeReducer,
        game: gameReducer,
        // ...injectedReducers
    });
}