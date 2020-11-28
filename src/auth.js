import { useState, useContext, createContext } from 'react';

const AuthService = {
  isAuthenticated: false,

  signIn(cb) {
    AuthService.isAuthenticated = true;
    cb();
  },
  signOut(cb) {
    AuthService.isAuthenticated = false;
    cb();
  },
};

export const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

export function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signIn = (user, cb) => {
    return AuthService.signIn(() => {
      setUser(user);
      cb();
    });
  };

  const signOut = (cb) => {
    return AuthService.signOut(() => {
      setUser(null);
      cb();
    });
  };

  return { user, setUser, signIn, signOut };
}
