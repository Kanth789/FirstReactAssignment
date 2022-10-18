import { Component } from "react";


class Stopwatch extends Component{
    state = {
        timeInSeconds :0
    }
    inMinutes = () =>{
        const{timeInSeconds}  = this.state
        const mintues = Math.floor(timeInSeconds / 60)
        if(mintues < 10)
        { 
            return `0${mintues}`
        }
        return mintues
    }
    inSeconds = () =>{
        const{timeInSeconds}  = this.state
        const seconds = Math.floor(timeInSeconds % 60)
        if(seconds < 10)
        { 
            return `0${seconds}`
        }
        return seconds
    }
    OnStart = ()=>{
            this.timerID = setInterval(this.runClock,1000)
    }
    runClock = ()=>{
        this.setState(prevState =>({timeInSeconds:prevState.timeInSeconds + 1}))
    }
    OnStop = ()=>{
        clearInterval(this.timerID)
    }
    OnReset = () =>{
        this.setState({timeInSeconds:0})
        // clearInterval(this.timerID)
        this.OnStop()
    }
render(){
    const displayTime = `${this.inMinutes()}:${this.inSeconds()}`
    return(
        <>
        <div className="main-conatiner">
            <div className="main">
                <div className="header">
                    <h3 className="heading">Stopwatch</h3>
                </div>
                <div className="box">
                    <div className="timer-img">
                        <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"/>
                        <p>Timer</p>
                    </div>
                    <div className="timer">
                        <h2>{displayTime}</h2>
                    </div>
                    <div className="button">
                        <button className="btn1" onClick={this.OnStart}>Start</button>
                        <button className="btn2"onClick={this.OnStop}>Stop</button>
                        <button  className="btn3" onClick={this.OnReset}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-conatiner2">
            <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-sm-bg.png"></img>
        </div>
        </>
    )
}
}
export default Stopwatch