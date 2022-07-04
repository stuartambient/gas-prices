import { NavLink, Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <NavLink to='/all-states'>All States</NavLink>
      <NavLink to='/my-state'>My State</NavLink>
      <NavLink to='/admin'>Admin</NavLink>
    </nav>
  );
};

export default NavBar;
