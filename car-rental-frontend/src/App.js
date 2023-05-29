
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';




function App() {
  return (
    <div className='App'>

      <BrowserRouter>
      <Navbar/>
        <div className='pages'>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
