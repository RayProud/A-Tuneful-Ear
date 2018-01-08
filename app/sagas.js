import { delay } from 'redux-saga';
import { put, take, select, call, takeEvery, all } from 'redux-saga/effects';
import {
    START_LISTENING_GAME,
    SUBMIT_USER_NOTE,
    SUBMIT_GAME_NOTE,
    FINISH_THE_GAME,
    generateGameNote,
    generateANote
} from './actions';
import getRandomNote from './utils/noteHelper';

export default function* rootSaga() {
    yield takeEvery('*', function* logger(action) {
        console.log('action', action);
    });

    while (true) {
        yield take(START_LISTENING_GAME);
        const note = yield call(getRandomNote, '');
        yield put({type: SUBMIT_GAME_NOTE, note});
    }
}