import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {v4 as uuidv4} from 'uuid'
import Appointemnt from './components/Appointment';
import { format, compareAsc } from 'date-fns'
const InitialAppointment = []

class App extends Component{
  state = {
    AppointmentList : InitialAppointment,
    title:'',
    date:'',
    isShowStarred: false
  }
  onchangeTitle = (event) =>{
    this.setState({title:event.target.value})
  }
  onChangeDate = (event) =>{
    this.setState({date:new Date(event.target.value)})
   
  }
  onAddAppointment = (event) =>{
    event.preventDefault()
    const{title,date}= this.state
    const newAppointment = {
      unqiueNo: uuidv4(),
      title,
      date,
      isStarred:false,
    }
    this.setState(prevState=>({
      AppointmentList :[...prevState.AppointmentList,newAppointment],
      title:'',
      date:'',
    }))
  }
  isStarButtonClicked = (unqiueNo) =>{
    this.setState((prevState)=>({AppointmentList:prevState.AppointmentList.map(eachAppointment=>{
      if(unqiueNo === eachAppointment.unqiueNo)
      {
        return{...eachAppointment,isStarred: !eachAppointment.isStarred}
      }
      else{
        return eachAppointment
      }
    }
    )
  }
  ))}
  onClickedPara = () =>{
    this.setState((prevState)=>({isShowStarred:!prevState.isShowStarred}))
  }
  onClickedStarred =()=>{
    const {isShowStarred,AppointmentList} = this.state
    if(isShowStarred === true){
      const filterData = AppointmentList.filter(eachAppointment =>eachAppointment.isStarred === true)
      return filterData
    }
    else{
      return AppointmentList
    }
  }
  render(){
    const {title,date,AppointmentList} = this.state
   
    return(
      <div className='main-container'>
        <div className='main'>
          <div className='header'>
            <h2 className='heading'>Add Appointemnt</h2>
          </div>
          <div className='form-conatiner'>
            <form className='contact-form' onSubmit={this.onAddAppointment}>
              <label>Title</label>
              <input 
                  value={title} 
                  className="input" 
                  placeholder='Enter the title' 
                  onChange={this.onchangeTitle}
              />
              <label>Date</label>
              <input type="date" 
                    className='input' 
                    placeholder='Enter the Date' 
                    value={date} 
                    onChange={this.onChangeDate}
              />
              <button type='submit' className='button'>Add</button>
            </form>
            <div className='main-image'>
            <img src='https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png  '></img>
          </div>
          </div>
          <hr></hr>
          <div className='second-conatiner'>
            <div className='second'>
            <div className='second-header'>
                <div className='heading'>
                  <h4>Appointemnts</h4>
                </div>
                <div className='starred'>
                  <div className='para' onClick={this.onClickedPara} >
                    <p>Starred</p>
                  </div>
                </div>
              </div>
              <div className='divs-conatiner'>
            {this.onClickedStarred().map(eachAppointment=>(<Appointemnt key={eachAppointment.unqiueNo} AppointemntDetails={eachAppointment} isStarButtonClicked={this.isStarButtonClicked}/>))}
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
