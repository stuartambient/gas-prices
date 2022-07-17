import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
/* import useAuth from '../components/AuthProvider'; */
import { AuthContext } from '../components/AuthProvider';

function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useContext(AuthContext);

  let from = location.state?.from?.pathname || '/';

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get('username');

    auth.signIn(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{ alignSelf: 'center' }}>
      {/*  <p>You must log in to view the page at {from}</p> */}
      <label>
        <input name="username" type="text" placeholder="admin name" />
      </label>{' '}
      <button type="submit" style={{ textShadow: 'none', fontSize: '.75rem' }}>
        Login
      </button>
    </form>
  );
}

export default Login;
