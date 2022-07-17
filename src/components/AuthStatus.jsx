import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
/* import useAuth from './AuthProvider'; */
import { AuthContext } from '../components/AuthProvider';
import Login from '../pages/Login';

const AuthStatus = () => {
  /*   let auth = useAuth(); */
  /* let auth = useAuth(); */
  let auth = useContext(AuthContext);
  let navigate = useNavigate();

  if (!auth.admin) {
    return (
      <>
        <div style={{ color: 'red', alignSelf: 'center' }}>
          You are not logged in
        </div>
        <Login />
      </>
    );
  }

  return (
    <div style={{ color: 'white', alignSelf: 'center' }}>
      Welcome {auth.admin}!{' '}
      <button
        style={{ textShadow: 'none', fontSize: '.75rem' }}
        onClick={() => {
          auth.signout(() => navigate('/'));
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default AuthStatus;
