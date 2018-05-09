/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_MESSAGES_REQUEST,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  posts: [],
});

function messageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MESSAGES_REQUEST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('posts', []);
    case LOAD_MESSAGES_SUCCESS:
      return state
        .set('posts', action.messages)
        .set('loading', false);
    case LOAD_MESSAGES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default messageReducer;
