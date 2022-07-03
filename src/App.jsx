import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h3>Gas Prices</h3>
      <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <NavLink to='/all-states'>All States</NavLink>
        <NavLink to='/my-state'>My State</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
