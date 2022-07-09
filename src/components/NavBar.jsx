import { NavLink, Outlet } from 'react-router-dom';
import AuthStatus from './AuthStatus';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <NavLink to='/all-states'>All States</NavLink>
      <NavLink to='/my-state'>My State</NavLink>
      <NavLink to='/admin'>Admin Area</NavLink>
      <AuthStatus />
      <Outlet />
    </nav>
  );
};

export default NavBar;
