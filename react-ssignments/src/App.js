import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import i18n from "i18next";
import {useTranslation,Trans} from 'react-i18next'

function App() {
  const {t} = useTranslation()
  return (
    <div className="App">
     
      <Home />
    </div>
  );
}

export default App;
