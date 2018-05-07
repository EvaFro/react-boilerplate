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
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  postData: {
    currentUser: false,
    savedMessages: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['postData', 'savedMessages'], false);
    case LOAD_MESSAGES_SUCCESS:
      return state
        .setIn(['postData', 'savedMessages'], action.messages)
        .set('loading', false)
        .setIn(['postData', 'currentUser'], action.username);
    case LOAD_MESSAGES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
