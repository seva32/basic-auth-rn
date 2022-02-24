import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/Provider';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/login';

function Login(params) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: { error, loading },
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (!form.userName || !form.password) {
      setErrors(prev => {
        return {
          ...prev,
          password: !form.password ? 'Must be more than 5 char' : null,
          userName: !form.userName ? 'Please fill this field' : null,
        };
      });
    }
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    setErrors(prev => {
      if (name === 'password') {
        return {
          ...prev,
          [name]: value.length < 6 ? 'Must be more than 5 char' : null,
        };
      }
      return {
        ...prev,
        [name]: value && value !== '' ? null : 'Please fill this field',
      };
    });
  };

  return (
    <LoginComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
      apiError={error}
      loading={loading}
    />
  );
}

export default Login;
