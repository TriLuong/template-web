import { fromJS } from 'immutable';
import * as types from './constants';

const initialState = fromJS({
  isFetching: false,
  currentLoads: [],
  usersOriginal: [],
  users: [],
  user: {},
  error: null,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_LOAD_REQUEST:
    case types.GET_CURRENT_LOADS_REQUEST:
    case types.GET_USERS_REQUEST:
    case types.GET_USER_REQUEST:
    case types.EDIT_USER_REQUEST:
    case types.FILTER_USERS_REQUEST:
      return state
        .set('isFetching', true)
        .set('user', {})
        .set('error', null);

    case types.FILTER_USERS_SUCCESS: {
      const users = [...state.get('usersOriginal')];
      let newUsers = [];
      if (action.payload.role === 'all') {
        newUsers = users;
      } else {
        newUsers = users.filter(item => item.role === action.payload.role);
      }

      return state
        .set('isFetching', false)
        .set('users', newUsers)
        .set('error', null);
    }

    case types.GET_USERS_SUCCESS:
      return state
        .set('isFetching', false)
        .set('users', action.payload)
        .set('usersOriginal', action.payload)
        .set('error', null);
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
    case types.GET_USER_SUCCESS: {
      const users = [...state.get('users')];
      const user = users.find(item => item.id === action.payload.id);
      return state
        .set('user', user)
        .set('isFetching', false)
        .set('error', null);
    }

    case types.ADD_USER_SUCCESS: {
      const users = [...state.get('users')];
      users.push({ ...action.payload, id: users.length + 1 });
      return state
        .set('users', users)
        .set('usersOriginal', users)
        .set('isFetching', false)
        .set('error', null);
    }

    case types.EDIT_USER_SUCCESS: {
      const users = [...state.get('users')];
      const userIndex = users.findIndex(item => item.id === action.payload.id);
      users[userIndex] = { ...action.payload };
      return state
        .set('users', users)
        .set('usersOriginal', users)
        .set('user', {})
        .set('isFetching', false)
        .set('error', null);
    }

    case types.FILTER_USERS_FAILURE:
    case types.EDIT_USER_FAILURE:
    case types.GET_USER_FAILURE:
    case types.GET_USERS_FAILURE:
    case types.GET_CURRENT_LOADS_FAILURE:
    case types.ADD_LOAD_FAILURE:
      return state.set('isFetching', false).set('error', action.payload);
    default:
      return state;
  }
}

export default loginReducer;
