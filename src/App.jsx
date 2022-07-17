import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllStates from './pages/AllStates';
import MyState from './pages/MyState';
import SharedLayout from './pages/SharedLayout';
import RequireAuth from './pages/RequireAuth';
import Admin from './pages/Admin';
import Login from './pages/Login';
import ApiUpdate from './pages/ApiUpdate';

import './App.css';

function App() {
  const [endPoint, setEndpoint] = useState('');
  const [state, setState] = useState('');
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/all-states" element={<AllStates />} />
        <Route path="/my-state" element={<MyState />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin setEndpoint={setEndpoint} setState={setState} />
            </RequireAuth>
          }
        >
          <Route
            path="/admin/api-update"
            element={
              <RequireAuth>
                <ApiUpdate endPoint={endPoint} state={state} />
              </RequireAuth>
            }
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
