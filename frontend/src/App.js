// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Main from './Components/Widgets/Main';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from "./Pages/Signup"
import Navbar from './Components/Widgets/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      {/* <Login/> */}
        {/* <Signup/> */}
      
      <Routes>

        <Route path='/signin' element={<Login/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Signup/>}></Route>
      </Routes>
    <Home/>
      {/* <Main/> */}
    </div>
  );
}

export default App;
