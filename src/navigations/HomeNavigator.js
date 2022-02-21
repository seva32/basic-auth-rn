import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';
import ContactCreate from '../screens/ContactCreate';
import Settings from '../screens/Settings';

import {
  CONTACT_LIST,
  CONTACT_CRAETE,
  CONTACT_DETAILS,
  SETTINGS,
} from '../constants/routeNames';

const HomeStack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
      <HomeStack.Screen name={CONTACT_CRAETE} component={ContactCreate} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
