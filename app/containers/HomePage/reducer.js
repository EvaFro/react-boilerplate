/*
 * HomeReducer
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
  CHANGE_POST,
  SAVE_POST,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  post: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_POST:
      return state
        .set('post', action.post);
    case SAVE_POST:
      return state
        .set('post', '');
    default:
      return state;
  }
}

export default homeReducer;
