import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Main from './Components/Widgets/Main';
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Navbar from './Components/Widgets/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        
      </Routes>

      {/* <Main/> */}
    </div>
  );
}

export default App;
