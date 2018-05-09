/**
 * Gets the post from Database
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { LOAD_MESSAGES } from './constants';
import { messagesLoaded, messageLoadingError } from './actions';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(LOAD_MESSAGES, workerSaga);
}

function getAllPosts() {
  return axios({
    method: 'get',
    url: 'http://localhost:3000/messages',
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(getAllPosts);
    const messages = response.data.message;
    // dispatch a success action to the store with the messages
    yield put(messagesLoaded(messages));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(messageLoadingError(error));
  }
}
