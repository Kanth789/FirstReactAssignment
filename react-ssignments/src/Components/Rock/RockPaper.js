import { Component } from "react";
import Popup from "reactjs-popup";
import GameView from "../GameView";
import { GlobalStyle } from "./StyledComponent";
import { CustomButton } from "./StyledComponent";
import { Heading } from "./StyledComponent";
import { AiOutlineCloseCircle } from "react-icons/ai";
const ChoiceList = [
    {
        uniqueId:"rock",
        imgUrl:"https://i.ibb.co/x3VFfLp/Screenshot-from-2022-11-07-14-25-07.png"
    },
    {
        uniqueId:"paper",
        imgUrl:"https://i.ibb.co/JqLyFQ8/Screenshot-from-2022-11-07-14-25-51.png"
    },
    {
        uniqueId:"scissors",
        name:"third",
        imgUrl:"https://i.ibb.co/ZKDbFyj/Screenshot-from-2022-11-07-14-25-36.png"
    }
]


class RockPaper extends Component{
    state = {
        score:0,
        gameView:false,
        imgUrlState:'',
        GameWin:false,
        ramdomImg:''
    }
    
    OnclickedImageItem = (imgUrl,uniqueId) =>{
        const ramdom =  Math.floor(Math.random() * 3)
        const ramdomImgurl = ChoiceList[ramdom].imgUrl
        this.setState({ramdomImg:ramdomImgurl})
        const ramdomId = ChoiceList[ramdom].uniqueId
        this.setState(prevState=>({gameView:!prevState.gameView}))
        this.setState({imgUrlState:imgUrl})
        if(uniqueId === ramdomId)
        {
            this.setState({GameWin:"draw"})
            this.setState(prevState=>({score:prevState.score}))
        }
        else if(uniqueId === "rock" && ramdomId === "paper")
        {
            this.setState({GameWin:false})
            this.setState(prevState=>({score:prevState.score - 1}))
        } 
        else if(uniqueId === "paper" && ramdomId === "scissors")
        {
            this.setState({GameWin:false})
            this.setState(prevState=>({score:prevState.score - 1}))
        } 
        else{
            this.setState({GameWin:true})
            this.setState(prevState=>({score:prevState.score + 1}))
        }
    }
    OnclickedPlayAgain = () =>{
        this.setState(prevState=>({gameView:!prevState.gameView}))
        this.setState({
            gameView:false,
            imgUrlState:'',
            GameWin:false,})
    }
    renderFullGameView = () =>{
        return(
            <div className="game-view">
            {ChoiceList.map(eachItem=>(<GameView key={eachItem.uniqueId} gameItems={eachItem} OnclickedImageItem={this.OnclickedImageItem}/>))}
        </div>
        )
    }

   
    renderGameStartView = () =>{
        const{imgUrlState,GameWin,ramdomImg} = this.state
        return(
            <div className="game-start">
                <div className="imges-game-start">
                        <div className="clickedImg">
                            <img src={imgUrlState}/>
                        </div>
                        <div className="radom-img">
                            <img src={ramdomImg}/>
                        </div>
                </div>
                <div className="score-card">
                    {GameWin === "draw" ?<h3>Your Game draw</h3> : GameWin ? <h3>You Won</h3> : <h3> You LOse </h3>}
                    <CustomButton onClick={this.OnclickedPlayAgain}>Play Again</CustomButton>
                </div>
            </div>
        )
    }
    render()
    {
        const {score,gameView} = this.state
        return(
            
            
            <div className="main-conatiner">
                 <GlobalStyle />
               <div className="main">
               <div className="header">
                    <div className="header-title">
                        <h2>ROCK<br></br>PAPER<br></br>SCISSORS</h2>
                    </div>
                    <div className="score">
                        <Heading size={28}>Score</Heading>
                        <Heading size={23}>{score}</Heading>
                    </div>
                    </div> 
                    {gameView ? this.renderGameStartView() : this.renderFullGameView()}
                    <Popup
                     modal
                    trigger ={
                     <CustomButton float={"right"}>Rules</CustomButton>
                    }
                     >{close =>(
                        <>
                        <div className="img-conatiner">
                            <div className="close-icon">
                             <AiOutlineCloseCircle onClick={()=>close()}/>
                            </div>
                            
                            <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "/>
                            
                        </div>
                        </>
                     )}
                        </Popup>
                
               </div> 
            </div>
        )
    }
}
export default RockPaper