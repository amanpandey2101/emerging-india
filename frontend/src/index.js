import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Login from './Pages/Login';
import DashBoard from './Pages/Dashboard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<App/>}></Route>
      <Route path='/dashboard' element={<DashBoard/>}></Route>
      {/* <Route path='/signin' element={<Login/>}></Route> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
