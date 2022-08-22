import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CookiesWrapper } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <CookiesWrapper doNotTrack="dummy text" trackMe="dummy text" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
