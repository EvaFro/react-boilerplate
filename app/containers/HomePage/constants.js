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

export const POST_REQUEST = 'boilerplate/Home/POST_REQUEST';
export const POST_SUCCESS = 'boilerplate/Home/POST_SUCCESS';
export const POST_ERROR = 'boilerplate/Home/POST_ERROR';
export const CHANGE_POST_MESSAGE = 'boilerplate/Home/CHANGE_POST_MESSAGE';
