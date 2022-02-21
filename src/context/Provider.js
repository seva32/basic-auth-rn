import React, { createContext, useReducer } from 'react';

import authReducer from './reducers/auth';
import authInitialState from './initialStates/auth';

import contactsReducer from './reducers/contacts';
import contactsInitialState from './initialStates/contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactsState,
        authDispatch,
        contactsDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
