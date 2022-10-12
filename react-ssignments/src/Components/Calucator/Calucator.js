import { Component } from "react";

class Calcualte extends Component{
    state = {searchInput:''}
    ChangeNumber = (event) =>{

        this.setState({searchInput: event.target.value});
        // this.setState((prevState)=>({number:prevState.number + 1}));
        
    }
    render(){
        const {searchInput} = this.state
        return(
            <div className="main-conatiner">
                <div className="box">
            <div className='left-conatiner'>
              <div className='heading'>
                <h3 className='header'>Calcualte the Letters you Enter</h3>
              </div>
              <div className='searchInput'>
                <label>Enter the Phrase</label>
                <input type="text"placeholder="enter the phrase" onChange={this.ChangeNumber}></input>
              </div>
              <div className='button-div'>
                <button >No of Letters:{searchInput.length}</button>
              </div>
            </div>
            <div className='right-conatiner'>
                <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"></img>
            </div>
          </div>
          </div>
        )
    }
}
export default Calcualte