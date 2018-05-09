import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

// Loading Data
const makeSelectPosting = () => createSelector(
  selectHome,
  (homeState) => homeState.get('posting')
);

// Messages Success
const makeSelectCurrentPost = () => createSelector(
  selectHome,
  (homeState) => homeState.get('currentPost')
);

// Error
const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);


export {
  selectHome,
  makeSelectPosting,
  makeSelectCurrentPost,
  makeSelectError,
};
