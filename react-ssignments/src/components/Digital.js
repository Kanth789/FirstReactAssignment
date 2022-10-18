/* eslint-disable jsx-a11y/alt-text */
import { Component } from "react";

class Digital extends Component{
    state={
        isTimeRunning :false,
        timerLimit : 25,
        currentRunningSeconds : 0,
        
    }
    increment=() =>{
        this.setState(prevState =>({timerLimit: prevState.timerLimit  + 1}))
    }
    decrement = ()=>{
        const{timerLimit} = this.state
        if(timerLimit > 1){
        this.setState(prevState =>({timerLimit:prevState.timerLimit - 1}))
        }else{
            alert("Can't decrease the time")
        }
    }
    renderTimerControl = () =>{
        const{isTimeRunning} = this.state
        const playImgUrl = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png '
        const stopImgUrl = 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
        const resetImgUrl = 'https://assets.ccbp.in/frontend/react-js/reset-icon-img.png '
        const startStopImg = isTimeRunning ? stopImgUrl : playImgUrl
        const startStopText = isTimeRunning ? 'Pause':'Start'
        return(
            <div className="Timer-control-container">
                <div className="start-stop">
                    <button onClick={this.OnclickStartStop}>
                        <img src={startStopImg}/>
                    </button>
                    <h2>{startStopText}</h2>
                </div>
                <div className="reset">
                    <button onClick={this.OnclickReset}>
                        <img src={resetImgUrl}></img>
                    </button>
                    <h2>Reset</h2>
                </div>
            </div>
          )
    }
    OnclickStartStop = () =>{
        const {isTimeRunning,timerLimit,currentRunningSeconds} = this.state
        this.setState(prevState=>({isTimeRunning:!prevState.isTimeRunning}))
        const isTimeCompleted = currentRunningSeconds === timerLimit * 60
        if(isTimeCompleted)
        {
            this.setState({isTimeRunning: false})
            this.clearTimer()
        }
         if(isTimeRunning)
        {
            this.clearTimer()
            this.setState({isTimeRunning:false})
        }else{
            this.IntervalId = setInterval(()=>{this.timerCountDown()},1000)
        }
        

    }
    OnclickReset = () =>{
        this.setState({
            isTimeRunning:false,
            timerLimit:25,
            currentRunningSeconds:0
        })
        this.clearTimer()
    }
    timerCountDown = () =>{
        const {isTimeRunning,timerLimit,currentRunningSeconds} = this.state
        const isTimeCompleted = currentRunningSeconds === timerLimit * 60
        if(isTimeCompleted)
        {
            alert("Reset the time ")
            this.setState({isTimeRunning:false,currentRunningSeconds:0})
            this.clearTimer()
        }else{
            this.setState(prevState =>({currentRunningSeconds:prevState.currentRunningSeconds  +  1}))
        }

    }
    clearTimer = () =>{
            clearInterval(this.IntervalId)
    }
    renderSetTimer = ()=>{
        const {timerLimit,currentRunningSeconds} =  this.state
        const isButtonDisabled = currentRunningSeconds > 0
        return(
            <div className="set-Timer">
                <div className="set-Timer-header">
                    <h3 className="heading">Set Timer Limit</h3>
                </div>
                <div className="set-timer-tabs">
                <div className="set-timer-decrement">
                    <button onClick={this.decrement} disabled={isButtonDisabled}>-</button>
                </div>
                <div className="set-timer-decrement">
                    <h3>{timerLimit}</h3>
                </div>
                <div className="set-timer-decrement">
                    <button onClick={this.increment} disabled={isButtonDisabled}>+</button>
                </div>
                </div>
            </div>
        )
    }
    convertTimerToMinute = () =>{
        const{timerLimit,currentRunningSeconds} = this.state
        const timeInseconds = timerLimit * 60 - currentRunningSeconds
        const minutes = Math.floor(timeInseconds / 60)
        const seconds = Math.floor(timeInseconds % 60)
        const minutesInString = minutes > 9  ? minutes : `0${minutes}`
        const secondInString = seconds > 9  ? seconds : `0${seconds}`
       return `${minutesInString}:${secondInString}`
    }
  render(){
    const {isTimeRunning} =  this.state
    const timerStatus = isTimeRunning ? "Running" : "Paused" 
    return(
        <div className="main-conatiner">
            <div className="main">
                <div className="header">
                <h1 className="heading">Digital Timer</h1>
                </div>
                <div className="display-timer">
                <div className="display-backgound"></div>
                    <div className="display-onTime">

                        <div className="display-onTime-Text">
                           <h2>{this.convertTimerToMinute()}</h2> 
                           <p>{timerStatus}</p>
                        </div>
                        <div className="display-functions">
                            {this.renderTimerControl()}
                            {this.renderSetTimer()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Digital