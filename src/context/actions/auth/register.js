/* eslint-disable no-sequences */
import axios from '../../../helpers/axiosInterceptor';
import api from '../../../config/api';
import * as types from '../../../constants/actionTypes';

export const clearAuthState = () => dispatch => {
  dispatch({ type: types.CLEAR_AUTH_STATE });
};

export default ({ email, password, userName, firstName, lastName }) =>
  dispatch => {
    dispatch({ type: types.CREATE_USER_LOADING });
    axios
      .post(api.CREATE_USER, {
        email,
        password,
        userName,
        firstName,
        lastName,
      })
      .then(res => {
        dispatch({
          type: types.CREATE_USER_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        const errors =
          err.message && !err.response
            ? { error: err.message }
            : err.response?.data && typeof err.response.data === 'string'
            ? { error: err.response.data }
            : err.response?.data?.length
            ? err.response.data.reduce(
                (obj, item) => (
                  (obj[item.property] = {
                    msg: Object.values(item.constraints).join(', '),
                    value: item.value,
                  }),
                  obj
                ),
                {},
              )
            : null;
        dispatch({
          type: types.CREATE_USER_FAILURE,
          payload: errors ? errors : { error: 'Error creating user' },
        });
      });
  };
