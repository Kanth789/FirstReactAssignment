import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './App.css';

import Home from './Common/Home/Home';
import Login from './Common/Login/Login';
import JobPage from './JobSection/routes/JobPageRoute/JobPage';
import ProctetedRoute from './Common/Protected';
import ParticularJobDeatils from './JobSection/routes/ParticularRoute/ParticularJobDetails';
import { Notfound } from './Common/NotFound/Notfound';
import { Provider } from 'mobx-react';
import jobsListStore from './JobSection/Stores/jobsListStore';
import LoginFormStore from './JobSection/Stores/LoginFormStore';
import ParticularStore from './JobSection/Stores/ParticularStore';
import ProfileApi from './JobSection/Serivce/util.api';

function App() {
 const JobsListStore = new jobsListStore(new ProfileApi())
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <ProctetedRoute exact path="/" component={Home}></ProctetedRoute>
        <Provider Jobvalue={JobsListStore}><ProctetedRoute exact path="/jobs" component={JobPage}></ProctetedRoute></Provider>
        <ProctetedRoute exact path="/jobs/:id" component={ParticularJobDeatils}></ProctetedRoute>
        <Route path="*" component={Notfound}></Route>
        <Redirect to="not-found" />
      </Switch>

    </BrowserRouter>
   
  );
}

export default App;
