import logo from './logo.svg';
import './App.css';

function App() {
 
    const Button = (props) => {
      const { ButtonClassName, ButtonText } = props;
      return (
        <button className={ButtonClassName}>
          {ButtonText}
        </button>
      );
    };
    
   const Element =() =>(
    <div className="App">
     <div className="text-conatiner"><h3>Social Buttons</h3></div>
     <div className="Button-conatiner">
      <Button ButtonClassName ="like-button" ButtonText="Like"></Button>
      <Button ButtonClassName ="Commnet-button" ButtonText="Comment"></Button>
      <Button ButtonClassName ="share-button" ButtonText="Share"></Button>
     </div>
    </div>
   )
  return(<Element/>)
  
}
export default App;
