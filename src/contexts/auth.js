import React, { createContext, useCallback, useState } from 'react';
import t from 'prop-types';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  });

  const login = useCallback(() => {}, []);

  const logout = useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        userInfo,
        setUserInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: t.node.isRequired
};

export { AuthProvider, AuthContext };
