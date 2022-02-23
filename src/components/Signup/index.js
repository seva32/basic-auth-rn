import React, { useState, useEffect } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Container from '../common/container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import { LOGIN } from '../../constants/routeNames';
import Message from '../common/Message/index';

const Register = ({ form, errors, onChange, onSubmit, apiError, loading }) => {
  const [networkError, setNetworkError] = useState(null);
  const { navigate } = useNavigation();

  useEffect(() => {
    if (apiError?.error) {
      setNetworkError(apiError.error);
    }
  }, [apiError?.error]);

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        height={70}
        width={70}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Create a free account</Text>
        <View style={styles.form}>
          {networkError && (
            <Message
              danger
              message={networkError}
              retryFn={() => console.log('wowo')}
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
            label="First Name"
            placeholder="Enter first name"
            onChangeText={value => {
              onChange({ name: 'firstName', value });
            }}
            error={errors.firstName || apiError?.firstName?.msg}
          />
          <Input
            style={{}}
            label="Last Name"
            placeholder="Enter last name"
            onChangeText={value => {
              onChange({ name: 'lastName', value });
            }}
            error={errors.lastName || apiError?.lastName?.msg}
          />
          <Input
            style={{}}
            label="Email"
            placeholder="Enter email"
            onChangeText={value => {
              onChange({ name: 'email', value });
            }}
            error={errors.email || apiError?.email?.msg}
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
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Register;
