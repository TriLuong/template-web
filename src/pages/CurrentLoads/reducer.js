import { fromJS } from 'immutable';
import * as types from './constants';

const initialState = fromJS({
  isFetching: false,
  currentLoads: [],
  error: null,
});

function currentLoadsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_LOAD_REQUEST:
    case types.GET_CURRENT_LOADS_REQUEST:
      return state.set('isFetching', true).set('error', null);

    case types.GET_CURRENT_LOADS_SUCCESS:
      return state
        .set('isFetching', false)
        .set('currentLoads', action.payload)
        .set('error', null);
    case types.ADD_LOAD_SUCCESS: {
      const currentLoads = [...state.get('currentLoads')];
      currentLoads.push({ ...action.payload, id: currentLoads.length + 1 });
      return state
        .set('currentLoads', currentLoads)
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

export default currentLoadsReducer;
