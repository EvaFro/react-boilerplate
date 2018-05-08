/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  SAVE_POST,
  CHANGE_POST,
} from './constants';

/**
 * Changes the input field of the form
 */
export function changePost(post) {
  return {
    type: CHANGE_POST,
    post,
  };
}

/**
 * Saves the input field of the form to database
 */
export function savePost() {
  return {
    type: SAVE_POST,
  };
}
