import { Component } from "react";

 class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {date:new Date()}
    }
    componentDidMount(){
        this.timerID = setInterval(
            this.tick,1000)
    }
    tick = ()=>{
        this.setState({ date : new Date()})
    }
    render(){
        const {date} = this.state
        console.log(date)
        return(
            <div className="clock-conatiner">
                <h1 className="heading">Clock</h1>
                <p className="time">{ date.toLocaleTimeString()}</p>
            </div>
        )
    }
 }
 export default Clock