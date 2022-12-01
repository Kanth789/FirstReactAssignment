import logo from './logo.svg';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './App.css';

import Home from './Common/Home/Home';
import Login from './Common/Login/Login';
import ProctetedRoute from './Common/Protected';
import { Notfound } from './Common/NotFound/Notfound';
import ProfileApi from './JobSection/Serivce/index.api';
import JobPage from './JobSection/routes/JobPageRoute/JobPage';
import jobsListStore from './JobSection/Stores/jobsListStore';
import ParticularJobDeatils from './JobSection/routes/ParticularRoute/ParticularJobDetails';
import ProfileFixture from './JobSection/Serivce/index.fixture';

function App() {
 const JobsListStore = new jobsListStore(new ProfileApi())
  return (
    <Provider Jobvalue={JobsListStore}>
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
    </Provider>
  );
}

export default App;
