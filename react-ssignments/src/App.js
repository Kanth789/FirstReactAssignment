import logo from './logo.svg';
import './App.css';
import ShowHide from './components/ShowHide/ShowHide';
function App() {
  const buttonDetailsList = [
    {
      unqieNo : 1,
      ButtonName: "Show/Hide FirstName",
      content : "Kiran"
    },
    {
      unqieNo : 2,
      ButtonName: "Show/Hide LastName",
      content : "Kanth"
    }
  ]
  const Element = () =>(
    <>
    <div className='main-conatiner'>
      <h2>Show Hide Details</h2>
      <div className='main'>
      {buttonDetailsList.map(eachItem =>(
      <ShowHide buttonDetails={eachItem} key={eachItem.unqieNo}></ShowHide>
      ))}</div>
      </div>
    </>
  )
  return<Element/>
}

export default App;
