import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllStates from './pages/AllStates';
import MyState from './pages/MyState';
import Login from './pages/Login';
import SharedLayout from './pages/SharedLayout';
import './App.css';

function App() {
  const [admin, setAdmin] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='admin' element={<Login setAdmin={setAdmin} />} />
          <Route path='all-states' element={<AllStates />} />
          <Route path='my-state' element={<MyState />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
