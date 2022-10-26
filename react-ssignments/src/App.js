import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route ,Routes} from "react-router-dom" 
import { RegisterForm } from './components/RegisterForm';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<RegisterForm/>}></Route>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
