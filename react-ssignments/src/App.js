import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import { BrowserRouter,Route ,Redirect,Switch} from 'react-router-dom'; 
function App() {
  return (
    <BrowserRouter>
    <Switch>
      
    
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route  path="*" component={NotFound}></Route>
      
      <Redirect to="not-found" />
    </Switch>
 </BrowserRouter>
  );
}

export default App;
