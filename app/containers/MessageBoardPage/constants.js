/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_MESSAGES_REQUEST = 'boilerplate/MessageBoard/LOAD_MESSAGES_REQUEST';
export const LOAD_MESSAGES_SUCCESS = 'boilerplate/MessageBoard/LOAD_MESSAGES_SUCCESS';
export const LOAD_MESSAGES_ERROR = 'boilerplate/MessageBoard/LOAD_MESSAGES_ERROR';
