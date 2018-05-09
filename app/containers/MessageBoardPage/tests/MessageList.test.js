import React from 'react';
import { shallow } from 'enzyme';

import MessageList from 'components/MessageList';

describe('<MessageList />', () => {
  it('should render an <ul> tag', () => {
    const renderedComponent = shallow(<MessageList />);
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<MessageList />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<MessageList id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<MessageList attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
