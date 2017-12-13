import React from 'react';
import App from './App';

describe(App, () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders correctly', () => {
    expect(toJson(app)).toMatchSnapshot();
  });
});
