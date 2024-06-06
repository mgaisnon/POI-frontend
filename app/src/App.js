import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import Annonce from './Pages/Annonce.js';
import Contact from './Pages/Contact.js';

function App() {
  return(
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/annonce' element={<Annonce />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
   </BrowserRouter>
  )
  
}

export default App;