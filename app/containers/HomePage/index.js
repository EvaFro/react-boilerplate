/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';


import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import messages from './messages';
import Form from './Form';
import TextArea from './TextArea';
import Button from './Button';
import { changeCurrentPost, postingMessage } from './actions';
import { makeSelectCurrentPost, makeSelectPosting, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { currentPost, onChangePost, onSubmitForm, error, posting } = this.props;

    console.log('This is currentPost:', currentPost);
    console.log('This is posting:', posting);
    console.log('This is error:', error);

    return (
      <div>
        <h3>
          <FormattedMessage {...messages.instructions} />
        </h3>
        <Form>
          <TextArea
            id="currentPost"
            type="text"
            placeholder="Textbox..."
            value={currentPost}
            onChange={onChangePost}
          />
          <Button onClick={onSubmitForm}>Post</Button>
        </Form>
      </div>
    );
  }
}

HomePage.propTypes = {
  currentPost: PropTypes.string,
  onChangePost: PropTypes.func,
  onSubmitForm: PropTypes.func,
  posting: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangePost: (e) => dispatch(changeCurrentPost(e.target.value)),
    onSubmitForm: (e) => {
      if (e !== undefined && e.preventDefault) e.preventDefault();
      dispatch(postingMessage());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  currentPost: makeSelectCurrentPost(),
  posting: makeSelectPosting(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
