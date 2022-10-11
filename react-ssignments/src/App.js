import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile/index';
function App() {
  
   const userDetailsList = [
   {
    uniqueNo:1,
    imageUrl:"https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
    name:"Kiran Kanth",
    role:"Intern",
   },
   {
    uniqueNo:2,
    imageUrl:"https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
    name:"Kiran Kanth",
    role:"Intern",
   },
   {
    uniqueNo:3,
    imageUrl:"https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
    name:"Kiran Kanth",
    role:"Intern",
   },
  ]
  const Element = () =>(
    <><h1 className='App'>UserList</h1>
    <ul>{userDetailsList.map(eachItem => (
      <UserProfile userDetailsList={eachItem} key={eachItem.uniqueNo} />
    ))}</ul></>
  )
  return<Element/>
}

export default App;
