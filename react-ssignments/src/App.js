import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Notfound } from './components/Notfound';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import {LoginPageRoute} from './components/LoginPageRoute';
import { BrowserRouter,Route ,Redirect,Switch} from 'react-router-dom'; 
import ProctetedRoute from './components/ProctetedRoute';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      
      <ProctetedRoute exact path="/" component={Home}></ProctetedRoute>
      <ProctetedRoute exact path="/products" component={Products}></ProctetedRoute>
      <ProctetedRoute exact  path="/cart" component={Cart}></ProctetedRoute>
      <Route exact path="/login" component={LoginPageRoute}></Route>
      <Route  path="*" component={Notfound}></Route>
      <Redirect to="not-found" />
    </Switch>
 </BrowserRouter>
  )
}

export default App;