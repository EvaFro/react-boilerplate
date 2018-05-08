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
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
} from './constants';

/**
 * Load the messages, this action starts the request saga
 */
export function loadMessages() {
  return {
    type: LOAD_MESSAGES,
  };
}

/**
 * Dispatched when the messages are loaded by the request saga
 */
export function messagesLoaded(messages) {
  return {
    type: LOAD_MESSAGES_SUCCESS,
    messages,
  };
}

/**
 * Dispatched when loading the messages fails
 */
export function messageLoadingError(error) {
  return {
    type: LOAD_MESSAGES_ERROR,
    error,
  };
}

