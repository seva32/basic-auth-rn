import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import Register from '../../components/Signup';
import { GlobalContext } from '../../context/Provider';
import createUser, {
  clearAuthState,
} from '../../context/actions/auth/register';
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames';

function RegisterScreen(params) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: { error, data, loading },
  } = useContext(GlobalContext);
  const { navigate } = useNavigation();

  useFocusEffect(
    useCallback(() => {
      // clear state loosing focus
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, authDispatch, error]),
  );

  useEffect(() => {
    if (
      data &&
      Object.keys(data).length &&
      !(error && Object.keys(error)?.length)
    ) {
      navigate(LOGIN);
    }
  }, [data, navigate, error]);

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    setErrors(prev => {
      if (name === 'password') {
        return {
          ...prev,
          [name]: value.length < 6 ? 'Must be more than 5 char' : null,
        };
      }
      return { ...prev, [name]: value ? null : 'Please fill this field' };
    });
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return { ...prev, userName: 'Please fill this field' };
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return { ...prev, firstName: 'Please fill this field' };
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return { ...prev, lastName: 'Please fill this field' };
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return { ...prev, email: 'Please fill this field' };
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return { ...prev, password: 'Please fill this field' };
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(prop => prop.trim().length > 0) &&
      Object.values(errors).every(prop => !prop)
    ) {
      createUser(form)(authDispatch);
    }
  };

  return (
    <Register
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      apiError={error}
      loading={loading}
    />
  );
}

export default RegisterScreen;
