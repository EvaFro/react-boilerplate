import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

function MessageItem(props) {
  return (
    <Item>
      {props.messageItem}
    </Item>
  );
}

MessageItem.propTypes = {
  messageItem: PropTypes.any,
};

export default MessageItem;
