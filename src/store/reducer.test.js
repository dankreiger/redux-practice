import React from 'react';

import reducer from './reducer';

describe('reducer', () => {
  it('has as cardNr initial state of 0', () => {
    let state;

    state = reducer(undefined, {});
    expect(state).toEqual({cardNr:0});
  });

  it('goes to cardNr 1 after calling NEXT_CARD', () => {
    let state;

    state = reducer({cardNr:0}, {type:'NEXT_CARD', val: 1});
    expect(state).toEqual({cardNr:1});
  });
});
