import { fromJS } from 'immutable';
import * as types from './constants';

const initialState = fromJS({
  isFetching: false,
  data: '',
  error: null,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return state.set('isFetching', true);
    case types.LOGIN_SUCCESS:
      return state
        .set('isFetching', false)
        .set('data', action.payload)
        .set('error', null);
    case types.LOGIN_FAILURE:
      return state.set('isFetching', false).set('error', null);
    default:
      return state;
  }
}

export default loginReducer;
