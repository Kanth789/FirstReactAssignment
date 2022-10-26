import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Notfound } from './components/Notfound';
import { TeamMatchFuntcional } from './components/TeamMatchFuntcional';
import { BrowserRouter,Route ,Routes} from "react-router-dom" 
const App = () =>{
  return (
  <BrowserRouter>
    <Routes>
      
      <Route  path="/" element={<Home/>}></Route>
      <Route path="/team-matches/:id" element={<TeamMatchFuntcional/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
    </Routes>
 </BrowserRouter>
  )  
}
export default App;