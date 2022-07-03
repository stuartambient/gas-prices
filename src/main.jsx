import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllStates from './pages/AllStates';
import MyState from './pages/MyState';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='all-states' element={<AllStates />} />
          <Route path='my-state' element={<MyState />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
