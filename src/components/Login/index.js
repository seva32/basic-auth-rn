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
import { REGISTER } from '../../constants/routeNames';

const Login = () => {
  const { navigate } = useNavigation();
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
            <Input
              //   value={username}
              //   onChangeText={onChangeUsername}
              style={{}}
              label="Username"
              placeholder="Enter username"
              // error={'Required field'}
            />
            <Input
              //   value={password}
              //   onChangeText={onChangePassword}
              style={{}}
              label="Password"
              icon={<Text>??</Text>}
              iconPosition="right"
              placeholder="Enter password"
              secureTextEntry
              // error={'Required field'}
            />
            {/* <CustomButton title="Submit" loading={true} disabled={true} primary /> */}
            <CustomButton title="Submit" primary />
            <View style={styles.createSection}>
              <Text style={styles.infoText}>Need a new account?</Text>
              <TouchableOpacity onPress={() => navigate(REGISTER)}>
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
