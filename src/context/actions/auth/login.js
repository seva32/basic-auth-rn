/* eslint-disable no-sequences */
// 3.34
import axios from '../../../helpers/axiosInterceptor';
import api from '../../../config/api';
import * as types from '../../../constants/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({ password, userName }) => {
  return dispatch => {
    dispatch({ type: types.LOGIN_LOADING });
    axios
      .post(api.LOGIN, {
        password,
        userName,
      })
      .then(res => {
        if (res.data.access_token && res.data.user) {
          AsyncStorage.setItem('token', res.data.access_token);
          AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        }
        dispatch({
          type: types.LOGIN_SUCCESS,
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
          type: types.LOGIN_FAILURE,
          payload: errors ? errors : { error: 'Error logging in' },
        });
      });
  };
};
