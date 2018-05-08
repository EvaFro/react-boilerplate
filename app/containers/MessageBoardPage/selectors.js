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
  makeSelectMessages,
  makeSelectError,
};
