import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes,Route,BrowserRouter, Navigate} from 'react-router-dom'
import Login from './Pages/Login';
import DashBoard from './Pages/Dashboard'

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = localStorage.getItem("token");
root.render(
  <>
    <BrowserRouter>
    <Routes>
      {user && <Route path="/dashboard" exact element={<DashBoard />} />}
      <Route path='*' element={<App/>}></Route>
      <Route path='/dashboard' element={<Navigate replace to="/signin" />}></Route>
      {/* <Route path='/signin' element={<Login/>}></Route> */}
    </Routes>
    </BrowserRouter>
  </>
);

reportWebVitals();
