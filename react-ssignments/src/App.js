import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route ,Switch,Redirect} from "react-router-dom" ;
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
       <Route exact path="/login" component={Login}></Route>
      <ProctetedRoute exact path="/" component={Home}></ProctetedRoute>
      <ProctetedRoute exact path="/jobs" component={JobPage}></ProctetedRoute>
      <ProctetedRoute exact path="/jobs/:id" component={ParticularJobDeatils}></ProctetedRoute>
      <Route  path="*" component={Notfound}></Route>
      <Redirect to="not-found" />
    </Switch>

 </BrowserRouter>
  );
}

export default App;
