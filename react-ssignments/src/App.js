import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './App.css';

import Home from './Common/Home/Home';
import Login from './Common/Login/Login';
import JobPage from './JobSection/components/JobsPage/JobPage';
import ProctetedRoute from './Common/Protected';
import ParticularJobDeatils from './JobSection/components/ParticularJob/ParticularJobDetails';
import { Notfound } from './Common/NotFound/Notfound';
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
