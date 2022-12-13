// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from "./Pages/Signup"
import Navbar from './Components/Widgets/Navbar';
import Slider from './Components/Slider';
import News from './Components/News';
import Fir from './Components/Fir';
function App() {
  return (
    <div className="App ">
      <Navbar/>
      <Routes>
        <Route path='/signin' element={<Login/>}></Route>
        {/* <Route path='/' element={<Login/>}></Route> */}
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/home' element={<Slider/> }></Route>
        {/* <Route path='/' element={<News/> }></Route> */}
        <Route path='/fir' element={<Fir/>}></Route>
        {/* <Route path='/' element={<News/>}></Route> */}

      </Routes>
     <Home/>
    </div>
  );
}

export default App;
