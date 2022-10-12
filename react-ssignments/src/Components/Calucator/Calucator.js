import { Component } from "react";

class Calcualte extends Component{
    state = {searchInput:'',number:0}
    ChangeNumber = (event) =>{

        this.setState({searchInput: event.target.value});
        this.setState((prevState)=>({number:prevState.number + 1}));
        
    }
    render(){
        const {number} = this.state
        return(
            <div className="main-conatiner">
            <div className='left-conatiner'>
              <div className='heading'>
                <h3 className='header'>Calcualte the Letters you Enter</h3>
              </div>
              <div className='searchInput'>
                <label>Enter the Phrase</label>
                <input type="text"placeholder="enter the phrase" onChange={this.ChangeNumber}></input>
              </div>
              <div className='button-div'>
                <button >No of Letters:{number}</button>
              </div>
            </div>
            <div className='right-conatiner'></div>
          </div>
        )
    }
}
export default Calcualte