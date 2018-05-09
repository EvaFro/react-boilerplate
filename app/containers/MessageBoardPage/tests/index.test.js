import React from 'react';
import { shallow } from 'enzyme';

import MessageBoardPage from '../index';

describe('<MessageBoardPage />', () => {
  it('should never re-render the component', () => {
    const renderedComponent = shallow(
      <MessageBoardPage />
    );
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
