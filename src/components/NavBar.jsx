import { useContext } from 'react';
import { useNavigate, NavLink, Outlet, Navigate } from 'react-router-dom';
import AuthStatus from './AuthStatus';
import RequireAuth from '../pages/RequireAuth';

const NavBar = () => {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          lineHeight: '1.6rem',
          fontSize: '1.2rem',
          /* flexDirection: 'column', */
        }}
      >
        <NavLink
          to="/all-states"
          id="all-states"
          style={{
            color: 'white',
            margin: '.5rem 0',
            borderRadius: '5px',
            boxShadow: '5px 10px yellow',
          }}
        >
          All States
        </NavLink>
        <NavLink
          to="/my-state"
          style={{
            color: 'white',
            margin: '.5rem 0',
            borderRadius: '5px',
            boxShadow: '5px 10px yellow',
          }}
        >
          My State
        </NavLink>
        <NavLink
          to="/admin"
          style={{
            color: 'white',
            alignSelf: 'center',
            borderRadius: '5px',
            boxShadow: '5px 10px yellow',
          }}
        >
          Admin Area
        </NavLink>
        <AuthStatus style={{ color: 'white' }} />
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
