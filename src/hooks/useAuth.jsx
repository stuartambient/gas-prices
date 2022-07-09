import AuthContext from '../components/AuthProvider';
import { useContext } from 'react';

function useAuth() {
  console.log('AuthContext: ', AuthContext);
  return useContext(AuthContext);
}

export default useAuth;
