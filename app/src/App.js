import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';

function App() {
  return(
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
   </BrowserRouter>
  )
  
}

export default App;