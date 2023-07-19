import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='Login' element={<Login />} />
        <Route exact path='Register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
