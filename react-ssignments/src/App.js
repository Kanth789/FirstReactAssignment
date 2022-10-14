import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const UsersList = [
  {
    uniqueNo:1,
    imgUrl:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=900&t=st=1665740400~exp=1665741000~hmac=bb3d886592a51912a08092718dfdb223959b471b5c0ef2115b394407810a6ad7",
    Name:"Kiran",
    Role:"Intern",
    Para:"This is an assignment of review app "
  },
  {
    uniqueNo:2,
    imgUrl:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=900&t=st=1665740431~exp=1665741031~hmac=b3d713e636689bc6a672aafc96a65d5c51389f89d69e470b67a70d99536ffb6f",
    Name:"Kanth",
    Role:"SOftware",
    Para:"This is an assignment of review app "
  },
  {
    uniqueNo:3,
    imgUrl:"https://img.freepik.com/free-photo/positive-young-caucasian-male-with-pleasant-friendly-smile-shows-white-teeth-rejoices-new-stage-life-wears-casual-striped-sweater-round-spectacles-stands-alone-against-pink-wall_273609-14966.jpg?w=900&t=st=1665740441~exp=1665741041~hmac=017a72eb0453c9116e344f29ceea558b7425f7720dc0f5d7c0325c6c723b5619",
    Name:"Reddy",
    Role:"UI/UX",
    Para:"This is an assignment of review app "
  },
  {
    uniqueNo:4,
    imgUrl:"https://img.freepik.com/free-photo/confident-businessman-posing-outside_74855-1551.jpg?w=900&t=st=1665740450~exp=1665741050~hmac=a1edd335e14b8c77b51e76b54449d2f27988f90eafe39be5e4b166c47b04fe40",
    Name:"Raheem",
    Role:"Automative",
    Para:"This is an assignment of review app "
  },
  {
    uniqueNo:5,
    imgUrl:"https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=900&t=st=1665740466~exp=1665741066~hmac=36d3660418f4e50b850d5820c59ee625b4950960b1b17afd3540bafeaacdca0f",
    Name:"khan",
    Role:"FullStack",
    Para:"This is an assignment of review app "
  },
  {
    uniqueNo:6,
    imgUrl:"https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?w=900&t=st=1665740483~exp=1665741083~hmac=768872f7666c1255ee16815a077a17ecfa3dd13e307108c1763f03577640154f",
    Name:"Pathan",
    Role:"Intern",
    Para:"This is an assignment of review app "
  }
]

class App extends Component{
  state = {
    num : 0,
    
  }
  OnRightArrow = () =>{
    if(this.state.num < UsersList.length - 1 ){
    this.setState((prevState)=>({num:prevState.num  +  1}))
  }
}
  OnleftArrow = () =>{

    if(this.state.num > 0){
      this.setState((prevState)=>({num:prevState.num - 1}))
      
    }
  }
   

  render(){
    const {num,isDisplay} = this.state
    return(
      <div className='main-conatiner'>
        <div className='main'>
          <div className='header'>
            <h3 className='heading'>Reviews</h3>
          </div>
          <div className='img-conatiner'>
            <img src={UsersList[num].imgUrl}></img>
          </div>
          <div className='user'>
            <h4 className='userName'>{UsersList[num].Name}</h4>
          </div>
          <div className='arrow'>
            <div>
              <img src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png " onClick={this.OnleftArrow} />
            </div>
            <div>
              <img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" onClick={this.OnRightArrow}/>
            </div>
          </div>
          <div className='rolediv'>
            <p className='role'>{UsersList[num].Role}</p>
          </div>
          <div className='para'>
            <p className='paraofuser'>{UsersList[num].Para}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
