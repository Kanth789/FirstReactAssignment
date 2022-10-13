import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import GalleryApp from './components/Gallery/GalleryApp';
const ImageList = [
  {
    uniqueNo:1,
    ImgUrl:"https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    uniqueNo:2,
    ImgUrl:"https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    uniqueNo:3,
    ImgUrl:"https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    uniqueNo:4,
    ImgUrl:"https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    uniqueNo:5,
    ImgUrl:"https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    uniqueNo:6,
    ImgUrl:"https://images.pexels.com/photos/273935/pexels-photo-273935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    uniqueNo:7,
    ImgUrl:"https://images.pexels.com/photos/97558/pexels-photo-97558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    uniqueNo:8,
    ImgUrl:"https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }

]

class App extends Component{
  state = {
    UpdateImgUrl : ImageList[0].ImgUrl
  }
  OnClickedApp = (ImgUrl) =>{
    this.setState({UpdateImgUrl : ImgUrl})
  }
  render(){
    const{UpdateImgUrl} = this.state
    return(
      <div className='main-conatiner'>
        <div className='main'>
          <div className='img-conatiner'>
            <img src= {UpdateImgUrl}></img>
          </div>
          <div className="header">
                <h3 className="heading">Nature Photography</h3>
            </div>
            <div className="para">
                <p>Nature Photography by Rahul</p>
            </div>
          <div className='image-box'>
          {ImageList.map(eachItem=>(<GalleryApp OnClickedApp={this.OnClickedApp}ImageList={eachItem} key={eachItem.uniqueNo}/>))}
        </div>
      </div>
    </div>
    )
  }
}

export default App;
