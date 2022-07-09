import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllStates from './pages/AllStates';
import MyState from './pages/MyState';
import SharedLayout from './pages/SharedLayout';
import { AuthContext } from './components/AuthProvider';
import RequireAuth from './pages/RequireAuth';
import Admin from './pages/Admin';
import Login from './pages/Login';
import './App.css';

function App() {
  const { admin, setAdmin } = useContext(AuthContext);
  console.log(admin);

  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route path='/all-states' element={<AllStates />} />
        <Route path='/my-state' element={<MyState />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/admin'
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
