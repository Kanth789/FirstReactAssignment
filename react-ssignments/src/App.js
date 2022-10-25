import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Route ,Routes} from "react-router-dom" 
import { Header } from './components/Header';
import { Home } from './components/Home';
import { BlogDetailsRoute } from './components/BlogDetailsRoute';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Notfound } from './components/Notfound';

 const App = () =>{
  return (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route  path="/about" element={<About/>}></Route>
      <Route  path="/contact" element={<Contact/>}></Route>
      <Route  path="/blogs/:id" element={<BlogDetailsRoute/>}></Route>
      <Route  path="/" element={<Home/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
    </Routes>
 </BrowserRouter>
  )  
}
export default App;

