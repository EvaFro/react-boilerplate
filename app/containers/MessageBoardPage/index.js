/**
 * MessageBoardPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import MessageList from 'components/MessageList';
import { makeSelectMessages, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadingMessages } from './actions';

export class MessageBoardPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.posts) {
      this.props.onLoadingPage();
    }
  }

  render() {
    const { loading, error, posts } = this.props;
    const postProps = {
      loading,
      error,
      posts,
    };

    return (
      <div>
        <MessageList {...postProps} />
      </div>
    );
  }
}


MessageBoardPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  posts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onLoadingPage: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadingPage: (e) => {
      if (e !== undefined && e.preventDefault) e.preventDefault();
      dispatch(loadingMessages());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  posts: makeSelectMessages(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'messageBoard', reducer });
const withSaga = injectSaga({ key: 'messageBoard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MessageBoardPage);
