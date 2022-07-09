import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
/* import useAuth from './AuthProvider'; */
import { AuthContext } from '../components/AuthProvider';

const AuthStatus = () => {
  /*   let auth = useAuth(); */
  /* let auth = useAuth(); */
  let auth = useContext(AuthContext);
  let navigate = useNavigate();

  if (!auth.admin) {
    return <p>You are not logged in</p>;
  }

  return (
    <p>
      Welcome {auth.admin}!{' '}
      <button
        onClick={() => {
          auth.signout(() => navigate('/'));
        }}
      >
        Sign out
      </button>
    </p>
  );
};

export default AuthStatus;
