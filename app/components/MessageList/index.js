import React from 'react';
import PropTypes from 'prop-types';

import UnsortedList from './UnsortedList';
import Wrapper from './Wrapper';
import MessageItem from '../MessageItem';

function MessageList({ loading, error, posts }) {
  let content = (<div></div>);

  // If we have posts, render them
  if (posts.length > 0) {
    content = posts.map((item) => (
      <MessageItem key={`post-item-${item}`} messageItem={item} />
    ));
  } else if (loading) {
    content = (<MessageItem messageItem={'Loading. Please wait...'} />);
  } else if (error !== false) {
    content = (<MessageItem messageItem={'Something went wrong, please try again!'} />);
  } else {
    // Otherwise render a single component
    content = (<MessageItem messageItem={'Sorry, No messages posted yet.'} />);
  }

  return (
    <Wrapper>
      <UnsortedList>
        {content}
      </UnsortedList>
    </Wrapper>
  );
}

MessageList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  posts: PropTypes.any,
};

export default MessageList;
