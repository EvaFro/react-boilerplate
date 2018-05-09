import { createSelector } from 'reselect';

const selectMessageBoard = (state) => state.get('messageBoard');

// Loading Data
const makeSelectLoading = () => createSelector(
  selectMessageBoard,
  (messageBoardState) => messageBoardState.get('loading')
);

// Messages Success
const makeSelectMessages = () => createSelector(
  selectMessageBoard,
  (messageBoardState) => messageBoardState.get('posts')
);

// Error
const makeSelectError = () => createSelector(
  selectMessageBoard,
  (messageBoardState) => messageBoardState.get('error')
);


export {
  selectMessageBoard,
  makeSelectLoading,
  makeSelectMessages,
  makeSelectError,
};
