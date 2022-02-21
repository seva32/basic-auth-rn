import {
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Container from '../common/container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import { LOGIN } from '../../constants/routeNames';

const Register = ({ form, errors, onChange, onSubmit }) => {
  const { navigate } = useNavigation();

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
          <Input
            style={{}}
            label="User Name"
            placeholder="Enter user name"
            onChangeText={value => {
              onChange({ name: 'userName', value });
            }}
            error={errors.userName}
          />
          <Input
            label="First Name"
            placeholder="Enter first name"
            onChangeText={value => {
              onChange({ name: 'firstName', value });
            }}
            error={errors.firstName}
          />
          <Input
            style={{}}
            label="Last Name"
            placeholder="Enter last name"
            onChangeText={value => {
              onChange({ name: 'lastName', value });
            }}
            error={errors.lastName}
          />
          <Input
            style={{}}
            label="Email"
            placeholder="Enter email"
            onChangeText={value => {
              onChange({ name: 'email', value });
            }}
            error={errors.email}
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
            error={errors.password}
          />
          <CustomButton title="Submit" primary onPress={onSubmit} />
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
