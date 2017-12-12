const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// reducer
const rootReducer = (state = initialState, action) => {
  if (action.type == 'NEXT_CARD') {
    return Object.assign({}, state, {
      counter: state.counter + 1
    });
  }
  if (action.type == 'PREV_CARD') {
    return Object.assign({}, state, {
      counter: state.counter + action.value
    });
  }
  return state;
}

// store
const store = createStore(rootReducer);
console.log(store.getState());

// subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// dispatching action
store.dispatch({type: 'NEXT_CARD'});
store.dispatch({type: 'PREV_CARD', value: 10});

console.log(store.getState());
