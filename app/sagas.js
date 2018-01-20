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
export const gameNoteFreq = state => state.game.gameNote.freq;

export function* playNote() {
    const freq = yield select(gameNoteFreq);
    yield call(muteOscillator);
    yield call(delay, 400);
    yield call(changeSoundingNote, freq);
    yield call(delay, 1000);
    yield call(muteOscillator);
}

export default function* rootSaga() {
    let note;
    yield takeEvery('*', function* logger(action) {
        console.log('action', action);
    });

    yield takeEvery('LISTEN_TO_THE_NOTE', playNote);
    let isAudioInited = false;

    while (true) {
        yield take(START_LISTENING_GAME);
        const isAudioInitedFromSate = yield select(getAudioIsInited);
        if (!isAudioInitedFromSate) {
            isAudioInited = yield call(initAudioCtx);
            if (isAudioInited) yield put(initAudionCtx());
        }
        if (isAudioInited) {
            note = yield call(getRandomNote);
            yield put(generateGameNote(note));
            yield call(playNote, note);
            yield take(FINISH_THE_GAME);
            yield put(submitANote(null));
        } else {
            console.log('some errors');
        }
    }
}