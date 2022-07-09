import { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';
/* import useAuth from '../components/AuthProvider'; */

const RequireAuth = ({ children }) => {
  /* let auth = useAuth(); */
  /* let auth = useAuth(); */
  let auth = useContext(AuthContext);
  let location = useLocation();

  if (!auth.admin) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
