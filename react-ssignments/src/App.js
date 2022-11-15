import logo from './logo.svg';
import './App.css';
import UserStore from './components/UserStore';
import Home from './components/Home';
import About from './components/TodoItem';
function App() {
  const store = new  UserStore()
  return (
    <div className="App">
      <Home store={store}/>
      
    </div>
  );
}

export default App;
