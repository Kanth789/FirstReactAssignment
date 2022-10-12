import logo from './logo.svg';
import './App.css';
import { Component } from "react";
import Destination from './components/Destination/Destination';

  const placeDeatils = [
    {
      uniqeNo :1,
      imgUrl: "https://i.ibb.co/6nC5rVV/Taj-Mahal-in-India-Kristian-Bertel-jpg.webp",
      placeName :"India"
    },
    {
      uniqeNo:2,
      imgUrl:"https://i.ibb.co/kxLzXHp/eiffel-tower.jpg",
      placeName : "France"
    },
    {
      uniqeNo :1,
      imgUrl: "https://i.ibb.co/6nC5rVV/Taj-Mahal-in-India-Kristian-Bertel-jpg.webp",
      placeName :"America"
    },
    {
      uniqeNo:2,
      imgUrl:"https://i.ibb.co/kxLzXHp/eiffel-tower.jpg",
      placeName : "Itlay"
    },
    {
      uniqeNo :1,
      imgUrl: "https://i.ibb.co/6nC5rVV/Taj-Mahal-in-India-Kristian-Bertel-jpg.webp",
      placeName :"China"
    },
    {
      uniqeNo:2,
      imgUrl:"https://i.ibb.co/kxLzXHp/eiffel-tower.jpg",
      placeName : "Japan"
    },


  ]
 
  
  class App extends Component{
    state = {
        searchInput:''
    }
    onChangetext = event =>{
        this.setState({
        searchInput : event.target.value
      })
    }
    render(){
        const {searchInput} = this.state
        const searchResults = placeDeatils.filter((eachUser)=> eachUser.placeName.toLowerCase().includes(searchInput.toLowerCase()),)
        return(
            <div className='main-conatiner'>
            <div className="header">
                <h4 className="heading">Destination Search</h4>
            </div>
            <div className="searchInput">
                    <input type="search" onChange = {this.onChangetext}className="input-tag"></input>
                    
                  </div>
            <div className='main'>
            { searchResults.map(eachItem=>
            (<Destination placeDeatils={eachItem} hey={eachItem.uniqeNo}/>
            ))}
            </div>
          </div>
        )
    }
}

  
  


export default App;
