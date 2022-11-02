import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route ,Switch} from "react-router-dom" ;
import Home from './components/Home';
import Login from './components/Login';
import JobPage from './components/JobPage';
import ParticularJobDeatils from './components/ParticularJobDetails';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/jobs" component={JobPage}></Route>
      <Route exact path="/jobs/:id" component={ParticularJobDeatils}></Route>
    </Switch>
 </BrowserRouter>
  );
}

export default App;
