import {
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useContext } from 'react';
import Container from '../common/container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import { REGISTER } from '../../constants/routeNames';
import Message from '../common/Message/index';
import * as types from '../../constants/actionTypes';
import { GlobalContext } from '../../context/Provider';

const Login = ({ form, errors, onChange, onSubmit, apiError, loading }) => {
  const [networkError, setNetworkError] = useState(null);
  const { navigate } = useNavigation();
  const { authDispatch: dispatch } = useContext(GlobalContext);

  useEffect(() => {
    if (apiError?.error) {
      setNetworkError(apiError.error);
    }
  }, [apiError?.error]);

  return (
    <Container>
      <SafeAreaView>
        <Image
          source={require('../../assets/images/logo.png')}
          height={70}
          width={70}
          style={styles.logoImage}
        />
        <View>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Login into your account</Text>
          <View style={styles.form}>
            {networkError && (
              <Message
                danger
                message={networkError}
                retryFn={() => {
                  dispatch({ type: types.CLEAR_AUTH_STATE });
                  setNetworkError(null);
                }}
                onDismiss={() => setNetworkError(null)}
              />
            )}
            <Input
              style={{}}
              label="User Name"
              placeholder="Enter user name"
              onChangeText={value => {
                onChange({ name: 'userName', value });
              }}
              error={errors.userName || apiError?.userName?.msg}
            />
            <Input
              style={{}}
              label="Password"
              icon={<Text>??</Text>}
              iconPosition="right"
              placeholder="Enter password"
              secureTextEntry
              onChangeText={value => {
                onChange({ name: 'password', value });
              }}
              error={errors.password || apiError?.password?.msg}
            />
            <CustomButton
              loading={loading}
              title="Submit"
              primary
              onPress={onSubmit}
              disabled={loading}
            />
            <View style={styles.createSection}>
              <Text style={styles.infoText}>Need a new account?</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch({ type: types.CLEAR_AUTH_STATE });
                  setNetworkError(null);
                  navigate(REGISTER);
                }}>
                <Text style={styles.linkText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default Login;
