import logo from './logo.svg';
import './App.css';

function App() {
  const Para = (props) => {
    const {ParaClassName , ParaText,ParaImg} = props;
    return(
      <div className='Para-div'>
       
       <p className={ParaClassName}> <img src={ParaImg}/>{ParaText}</p>
       </div>
    );
  };
  const Element = ()=>(
    <div className="App">
      <div className='notifi'>
    <div className='Heading'>
      <h3>Notifications</h3>
    </div>
    <div className='Notificaions'>
      <Para ParaClassName="Infromation-class" ParaText = "Information" ParaImg ="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" w></Para>
      <Para ParaClassName="Success-class" ParaText="Success"  ParaImg ="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"></Para>
      <Para ParaClassName="Warning-class" ParaText="Warning"  ParaImg ="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"></Para>
      <Para ParaClassName="Danger-class" ParaText="Danger"  ParaImg ="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"></Para>
    </div>
  </div>
  </div>
  )
  return(<Element/>);
}

export default App;
