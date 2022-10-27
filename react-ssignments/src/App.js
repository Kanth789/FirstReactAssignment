import './App.css';

import {BrowserRouter,Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/Proctected'
import NotFound from './components/Notfound'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'

const App = () => (
   <BrowserRouter>
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
  </BrowserRouter>
)

export default App
