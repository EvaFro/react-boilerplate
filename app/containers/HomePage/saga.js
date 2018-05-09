/**
 * Gets the post from Database
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { makeSelectCurrentPost } from 'containers/HomePage/selectors';
import { POST_REQUEST } from './constants';
import { changeCurrentPost, messagePostingError } from './actions';


function postData(postMessage) {
  console.log('This is my message:', postMessage);
  return axios({
    method: 'post',
    url: 'http://localhost:3000/post',
    data: postMessage,
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* makePostReq() {
  const postMessage = { messagetext: yield select(makeSelectCurrentPost()) };
  console.log('This is the select:', postMessage);

  try {
    yield call(postData, postMessage);
    // dispatch a success action to the store with the messages
    yield put(changeCurrentPost(''));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(messagePostingError(error));
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* homeWatcherSaga() {
  yield takeLatest(POST_REQUEST, makePostReq);
}
