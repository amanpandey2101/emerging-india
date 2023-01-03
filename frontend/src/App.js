// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from "./Pages/Signup"
import Navbar from './Components/Widgets/Navbar';
import Slider from './Components/Slider';
import Heritage from './Components/Heritage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Infrastructure from "./Components/Infrastructure";
import Technology from "./Components/Technology";
import Arts from "./Components/Arts/Arts";
import Paintings from "./Components/Arts/Paintings";
import Music from "./Components/Arts/Music";
import FiveG from './Components/Technology/FiveG';
import Web3 from './Components/Technology/Web3';
import AI from './Components/Technology/AI';
import Cloud from './Components/Technology/Cloud';
import About from './Components/Widgets/About';



function App() {

  return (
    <div className= "App">
      <Navbar/>
      <Routes>
        <Route path='/signin' element={<Login/>}></Route>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/' element={<Slider/> }></Route>
        <Route path='/home' element={<Slider/> }></Route>
        <Route path='/heritage' element={<Heritage/>}></Route>
        <Route path='/infras' element={<Infrastructure/>}></Route>
        <Route path='/heritage' element={<Heritage/>}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
        <Route path='/arts' element={<Arts/>}></Route>
        <Route path='/paintings' element={<Paintings/>}></Route>
        <Route path='/music' element={<Music/>}></Route>
        <Route path='/fiveG' element={<FiveG/>}></Route>
        <Route path='/web' element={<Web3/>}></Route>
        <Route path='/ai' element={<AI/>}></Route>
        <Route path='/cloud' element={<Cloud/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Home />
    </div>
  );
}

export default App;
