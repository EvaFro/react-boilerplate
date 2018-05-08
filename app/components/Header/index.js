import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import H1 from './H1';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.title} />
        </H1>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/messages">
            <FormattedMessage {...messages.messages} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
