import React, { useContext, useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { GlobalContext } from '../context/Provider';

function AppNavContainer() {
  const contextData = useContext(GlobalContext);
  const {
    authState: { isLoggedIn },
  } = contextData;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authCompleted, setAuthCompleted] = useState(false);

  useEffect(() => {
    setAuthCompleted(false);
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        setIsAuthenticated(!!Object.keys(user));
      } catch (e) {
      } finally {
        setAuthCompleted(true);
      }
    };
    getUser();
  }, []);

  return (
    <>
      {authCompleted ? (
        <NavigationContainer>
          {isAuthenticated || isLoggedIn ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}

export default AppNavContainer;
