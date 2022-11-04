import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Notfound } from './components/Notfound';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import {LoginPageRoute} from './components/LoginPageRoute';
import { BrowserRouter,Route ,Redirect,Switch, withRouter} from 'react-router-dom'; 
import ProctetedRoute from './components/ProctetedRoute';
import ProductItemDetails from './components/ProductItemDetails';
import CartContext from './components/CartContext';
import { Component } from 'react';
class App extends Component{
  state = {
    cartList:[]
  }
  addCartItem = (product) => {
    this.setState(prevState =>({
      cartList:[...prevState.cartList,product],
    }))
  }
  deleteCartItem = () =>{}
  render(){
    const{cartList}= this.state
  return (
    <BrowserRouter>
    <CartContext.Provider value={{cartList,
         addCartItem:this.addCartItem,
         deleteCartItem:this.deleteCartItem}}>
        <Switch>
          
          <ProctetedRoute exact path="/" component={Home}></ProctetedRoute>
          <ProctetedRoute exact path="/products" component={Products}></ProctetedRoute>
          <ProctetedRoute exact  path="/cart" component={Cart}></ProctetedRoute>
          <Route exact path="/login" component={LoginPageRoute}></Route>
          <Route path="/products/:id" component={withRouter(ProductItemDetails)} />
          <Route  path="*" component={Notfound}></Route>
          
          <Redirect to="not-found" />
        </Switch>
    </CartContext.Provider>
 </BrowserRouter>
  )
    }
}

export default App;