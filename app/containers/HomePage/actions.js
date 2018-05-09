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
  POST_REQUEST,
  POST_ERROR,
  CHANGE_POST_MESSAGE,
} from './constants';

/**
 * Load the messages, this action starts the request saga
 */
export function postingMessage() {
  return {
    type: POST_REQUEST,
  };
}

/**
 * Dispatched when the messages are changed
 */

export function changeCurrentPost(text) {
  return {
    type: CHANGE_POST_MESSAGE,
    text,
  };
}

/**
 * Dispatched when loading the messages fails
 */
export function messagePostingError(error) {
  return {
    type: POST_ERROR,
    error,
  };
}

