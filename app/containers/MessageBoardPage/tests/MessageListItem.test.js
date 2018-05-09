import React from 'react';
import { shallow } from 'enzyme';

import MessageItem from 'components/MessageItem';

describe('<MessageItem />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<MessageItem />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<MessageItem />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<MessageItem id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<MessageItem attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
