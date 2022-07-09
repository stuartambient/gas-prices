import { useState, createContext } from 'react';
import { fakeAuthProvider } from '../utilities/auth';

// change let to const and remove null
export const AuthContext = createContext();

/* export function useAuth() {
  return useContext(AuthContext);
} */

const AuthProvider = ({ children }) => {
  let [admin, setAdmin] = useState('');

  let signIn = (newUsr, callback) => {
    return fakeAuthProvider.signIn(() => {
      setAdmin(newUsr);
      callback();
    });
  };

  let signout = callback => {
    return fakeAuthProvider.signout(() => {
      setAdmin(null);
      callback();
    });
  };

  let value = { admin, signIn, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
