/**
 * Gets the post from Database
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_MESSAGES } from './constants';
import { messagesLoaded, messageLoadingError } from './actions';

import request from 'utils/request';
import { makeSelectMessages } from './selectors';

/**
 * PostgreSQL data request/response handler
 */
export function* getPosts() {
  // Select message from store
  const message = yield select(makeSelectMessages());
  const requestURL = 'postgres://localhost:5432/message_board';

  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL);
    yield put(messagesLoaded(posts));
  } catch (err) {
    yield put(messageLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* postData() {
  yield takeLatest(LOAD_MESSAGES, getPosts);
}
