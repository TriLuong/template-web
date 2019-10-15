import { fromJS } from 'immutable';
import * as types from './constants';

const initialState = fromJS({
  isFetching: false,
  data: [],
  error: null,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_LOAD_REQUEST:
    case types.GET_CURRENT_LOADS_REQUEST:
      return state.set('isFetching', true).set('error', null);

    case types.GET_CURRENT_LOADS_SUCCESS:
      return state
        .set('isFetching', false)
        .set('data', action.payload)
        .set('error', null);
    case types.ADD_LOAD_SUCCESS: {
      const data = [...state.get('data')];
      data.push(action.payload);
      return state
        .set('data', data)
        .set('isFetching', false)
        .set('error', null);
    }

    case types.GET_CURRENT_LOADS_FAILURE:
    case types.ADD_LOAD_FAILURE:
      return state.set('isFetching', false).set('error', action.payload);
    default:
      return state;
  }
}

export default loginReducer;
