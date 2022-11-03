import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route ,Switch} from "react-router-dom" ;
import Home from './components/Home';
import Login from './components/Login';
import JobPage from './components/JobPage';
import ProctetedRoute from './components/Protected';
import { Notfound } from './components/Notfound';
import ParticularJobDeatils from './components/ParticularJobDetails';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      
      <ProctetedRoute exact path="/" component={Home}></ProctetedRoute>
      <Route exact path="/login" component={Login}></Route>
      <ProctetedRoute exact path="/jobs" component={JobPage}></ProctetedRoute>
      <ProctetedRoute exact path="/jobs/:id" component={ParticularJobDeatils}></ProctetedRoute>
      <Route  path="*" component={Notfound}></Route>
    </Switch>

 </BrowserRouter>
  );
}

export default App;
