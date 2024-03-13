import { createContext } from 'react';
import { useProvideAuth } from '../hooks/index.js';

const initialState = {
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
