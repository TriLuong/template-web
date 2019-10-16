import { fromJS } from 'immutable';
import { IS_CONNECTING, IS_END_CONNECTING } from './constants';

// The initial state of the App
export const initialState = fromJS({
  isFetching: false,
});

function loaderReducer(state = initialState, action) {
  switch (action.type) {
    case IS_CONNECTING:
      return state.set('isFetching', true);
    case IS_END_CONNECTING:
      return state.set('isFetching', false);

    default:
      return state;
  }
}

export default loaderReducer;
