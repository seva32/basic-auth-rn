import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

import { GlobalContext } from '../context/Provider';

function AppNavContainer() {
  const contextData = useContext(GlobalContext);
  const {
    authState: { isLoggedIn },
  } = contextData;

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default AppNavContainer;
