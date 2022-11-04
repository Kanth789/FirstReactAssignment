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
  
  addCartItem = product => {
    const {cartList} = this.state
    const productObject = cartList.find(
      eachCartItem => eachCartItem.id === product.id,
    )

    if (productObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity

            return {...eachCartItem, quantity: updatedQuantity}
          }

          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...cartList, product]

      this.setState({cartList: updatedCartList})
    }
  }


 

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  deleteCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )

    this.setState({cartList: updatedCartList})
  }


  render(){
    const{cartList}= this.state
  return (
    <BrowserRouter>
    <CartContext.Provider value={{
         cartList,
         addCartItem:this.addCartItem,
         deleteCartItem:this.deleteCartItem,
         incrementCartItemQuantity: this.incrementCartItemQuantity,
         decrementCartItemQuantity: this.decrementCartItemQuantity,
         removeAllCartItems: this.removeAllCartItems,
         
         
         }}>
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