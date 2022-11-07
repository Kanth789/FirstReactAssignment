import { Component } from "react";
const fontByOption = [
    {
      optionId: '8',
      displayText: '8',
    },
    {
      optionId: '16',
      displayText: '16',
    },
    {
        optionId: '32',
        displayText: '32',
      },
      {
        optionId: '64',
        displayText: '64',
      },
  ]
class MemeGenerator extends Component{
    state ={
        imgUrl:'',
        topText:'',
        bottomText:'',
        activeOption : fontByOption[0].optionId, 
        generate:false
    }
    onSubmitForm = (event) =>{
        event.preventDefault()
    }
    OnchangeimgUrl= (event)=>{
        this.setState({imgUrl:event.target.value})
    }
    OnToptext = (event) =>{
        this.setState({topText:event.target.value})
    }
    OnBottomtext = (event) =>{
        this.setState({bottomText:event.target.value})
    }
    OnclickedGenerate = () =>{
        this.setState(prevState=>({generate:!prevState.generate}))
    }
    updateActiveOptionId = (activeOption) =>{
        this.setState({activeOption})
    }
    changeSortby = () =>{
        return(
            <>
            {this.renderImageConatiner()}
            </>
        )
    }
    renderFormConatiner = () =>{
        const{activeOption} = this.state
        const onChangeSortby = event => {
            const {changeSortby} = this.changeSortby
            this.updateActiveOptionId(event.target.value)
          }
        return(
            <div className="div1">
                        <h2>Meme Generator</h2>
                        <div className="form">
                            <label>Image URL</label>
                            <input type="text" onChange={this.OnchangeimgUrl} placeholder="Enter the image Url"></input>
                            <label>Top Text</label>
                            <input type="text" onChange = {this.OnToptext} placeholder="Enter the Top Text"></input>
                            <label>Bottom Text</label>
                            <input type="text" onChange = { this.OnBottomtext}  placeholder="Enter the Bottom text"></input>
                            <select value={activeOption} onChange={this.onChangeSortby}>
                                {fontByOption.map(eachItem =>(<option key={eachItem.optionId} value={eachItem.optionId}>{eachItem.displayText}</option>))}
                            </select>
                            <button onClick={this.OnclickedGenerate}>Generate</button>
                            </div>
                    </div>
        )
    }

    renderImageConatiner = () =>{
        const{topText,bottomText,imgUrl,activeOption}  = this.state
        console.log(activeOption)
        return(
            <div className="div2">
                <div className="img-conatiner">
                    <img src={imgUrl}/>
                    <h2>{topText}</h2>
                    <h2>{bottomText}</h2>
                
                </div>
            </div>
        )
    }
    render()
    {
        const{generate} = this.state
        return(
            <div className="main-conatiner">
                <div className="main">
                    {this.renderFormConatiner()}
                    {generate ? this.renderImageConatiner() : ""}
                </div>
            </div>
        )
    }
}

export default MemeGenerator