import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Notfound } from './components/Notfound';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import {LoginPageRoute} from './components/LoginPageRoute';
import { BrowserRouter,Route ,Routes} from "react-router-dom" 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route  path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
      <Route path="/login" element={<LoginPageRoute/>}></Route>
    </Routes>
 </BrowserRouter>
  )
}

export default App;
