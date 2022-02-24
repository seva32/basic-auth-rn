import * as types from '../../constants/actionTypes';
import initialState from '../initialStates/auth';

const auth = (state, { type, payload }) => {
  switch (type) {
    case types.LOGIN_LOADING:
    case types.CREATE_USER_LOADING:
      return { ...state, loading: true };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: payload,
      };
    case types.LOGIN_FAILURE:
    case types.CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        isLoggedIn: true,
        accessToken: payload?.access_token,
      };
    case types.CLEAR_AUTH_STATE:
      return initialState;
    default:
      return state;
  }
};

export default auth;
