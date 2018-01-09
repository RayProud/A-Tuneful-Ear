import { delay } from 'redux-saga';
import { put, take, select, call, takeEvery, all } from 'redux-saga/effects';
import {
    START_LISTENING_GAME,
    FINISH_THE_GAME,
    generateGameNote,
    submitANote,
    initAudionCtx
} from './actions';
import {
    getRandomNote,
    initAudioCtx,
    changeSoundingNote,
    muteOscillator
} from './utils/noteHelper';
export const getAudioIsInited = state => state.game.audioIsInited;



export default function* rootSaga() {
    yield takeEvery('*', function* logger(action) {
        console.log('action', action);
    });
    let isAudioInited = false;

    while (true) {
        yield take(START_LISTENING_GAME);
        const isAudioInitedFromSate = yield select(getAudioIsInited);
        if (!isAudioInitedFromSate) {
            isAudioInited = yield call(initAudioCtx);
            if (isAudioInited) yield put(initAudionCtx());
        }
        if (isAudioInited) {
            const note = yield call(getRandomNote);
            yield put(generateGameNote(note));
            yield call(changeSoundingNote, note.freq);
            yield call(delay, 1000);
            yield call(muteOscillator);
            yield take(FINISH_THE_GAME);
            yield put(submitANote(null));
        } else {
            console.log('some errors');
        }
    }
}