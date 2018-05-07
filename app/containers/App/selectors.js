import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');
const selectRoute = (state) => state.get('route');

// Location
const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

// Loading Data
const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

// CurrentUser Success
const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['postData', 'currentUser'])
);

// Messages Success
const makeSelectMessages = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['postData', 'savedMessages'])
);

// Error
const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);


export {
  selectGlobal,
  makeSelectLocation,
  makeSelectLoading,
  makeSelectCurrentUser,
  makeSelectMessages,
  makeSelectError,
};
