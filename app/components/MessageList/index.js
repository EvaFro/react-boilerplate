import React from 'react';
import PropTypes from 'prop-types';

import UnsortedList from './UnsortedList';
import Wrapper from './Wrapper';
import MessageItem from '../MessageItem';

function MessageList(props) {
  let content = (<div>Sorry, No messages posted yet.</div>);

  // If we have posts, render them
  if (props.posts) {
    content = props.posts.map((item) => (
      <MessageItem key={`post-item-${item.id}`} messageItem={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<MessageItem />);
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
  posts: PropTypes.array,
};

export default MessageList;
