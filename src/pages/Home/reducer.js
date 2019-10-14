import { fromJS } from 'immutable';
import dataCurrent from './dataCurrent';
import * as types from './constants';

const initialState = fromJS({
  isFetching: false,
  data: dataCurrent,
  error: null,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_LOAD_REQUEST:
      return state.set('isFetching', true).set('error', null);
    case types.ADD_LOAD_SUCCESS: {
      const data = state.get('data');
      data.push(action.payload);
      // console.log('reducer', data);
      return state
        .set('data', data)
        .set('isFetching', false)
        .set('error', null);
    }
    case types.ADD_LOAD_FAILURE:
      return state.set('isFetching', false).set('error', action.payload);
    default:
      return state;
  }
}

export default loginReducer;
