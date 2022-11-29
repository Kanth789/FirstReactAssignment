import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './App.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import JobPage from './components/JobsPage/JobPage';
import ProctetedRoute from './components/Protected';
import ParticularJobDeatils from './components/ParticularJob/ParticularJobDetails';
import { Notfound } from './components/NotFound/Notfound';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <ProctetedRoute exact path="/" component={Home}></ProctetedRoute>
        <ProctetedRoute exact path="/jobs" component={JobPage}></ProctetedRoute>
        <ProctetedRoute exact path="/jobs/:id" component={ParticularJobDeatils}></ProctetedRoute>
        <Route path="*" component={Notfound}></Route>
        <Redirect to="not-found" />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
