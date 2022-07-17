import { useState } from 'react';

import { Link, Outlet } from 'react-router-dom';

const Admin = ({ setEndpoint, setState }) => {
  const [stateParam, setStateParam] = useState('');

  const handleApiUpdate = name => {
    if (name === 'byState' && stateParam.length === 2) {
      setEndpoint(name);
      setState(stateParam);
    }

    if (name !== 'byState') {
      setEndpoint(name);
    }

    return;
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        width: '100vw',
        height: '50vh',
        flexDirection: 'column',
      }}
    >
      <Link
        to="/admin/api-update"
        name="allStates"
        onClick={e => handleApiUpdate(e.target.name)}
        style={{ fontSize: '1rem', color: 'white' }}
      >
        Update all states
      </Link>
      <Link
        to="/admin/api-update"
        name="byState"
        onClick={e => handleApiUpdate(e.target.name)}
        style={{ fontSize: '1rem', color: 'white' }}
      >
        Update all by state{' '}
        <input
          type="text"
          size="2"
          maxLength="2"
          value={stateParam}
          onChange={e => setStateParam(e.target.value)}
        />
      </Link>

      <Outlet />
    </div>
  );
};

export default Admin;
