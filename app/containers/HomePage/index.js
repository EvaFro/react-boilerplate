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
import messages from './messages';
// import reducer from './reducer';

import Form from './Form';
import TextArea from './TextArea';
import Button from './Button';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h3>
          <FormattedMessage {...messages.instructions} />
        </h3>
        <Form>
          <TextArea
            id="post"
            type="text"
            placeholder="Textbox..."
            value={this.props.post}
            onChange={this.props.onChangePost}
          />
          <Button onClick={this.onSubmitForm()}>Post</Button>
        </Form>
      </div>
    );
  }
}

HomePage.propTypes = {
  // onSubmitForm: PropTypes.func,
  post: PropTypes.string,
  onChangePost: PropTypes.func,
};
