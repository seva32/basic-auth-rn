import * as types from '../../constants/actionTypes';
import initialState from '../initialStates/auth';

const auth = (state, { type, payload }) => {
  switch (type) {
    case types.CREATE_USER_LOADING:
      return { ...state, loading: true };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case types.CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.CLEAR_AUTH_STATE:
      return initialState;
    default:
      return state;
  }
};

export default auth;
