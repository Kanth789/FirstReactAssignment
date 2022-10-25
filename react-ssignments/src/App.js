import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import { Header } from './component/Header';
import { Home } from './component/Home';
import { About } from './component/About';
import { Contact } from './component/Contact';
import { NotFound } from './component/NotFound';

 const App = () =>{
  return (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route  path="/about" element={<About/>}></Route>
      <Route  path="/contact" element={<Contact/>}></Route>
      <Route  path="/" element={<Home/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
 </BrowserRouter>
  )  
}
export default App
