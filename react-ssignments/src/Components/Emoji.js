import { Component } from "react";
import EmojiConatiner from "./EmojiContainer";
import WinOrLoss from "./winorLoss";
import Navbar from "./Emoji/navbar";


class Emoji extends Component{
    state = {
        clickedEmojis: [],
        isGameEnd: false,
        topScore: 0,
      }
      getShuffledEmojisList = () => {
        const {ImagesList} = this.props
        return ImagesList.sort(() => Math.random() - 0.5)
      }
    renderEmoji = ()=>{
        const shuffledEmojiList = this.getShuffledEmojisList()
        return(
            <div className="Emoji-Conatiner">
                {
                    shuffledEmojiList.map(eachItem =>(
                    <EmojiConatiner key={eachItem.uniqueNo} emoji={eachItem} onClickEmoji={this.onClickedEmoji}/>
                     
                    )
                )
            }
            </div>
        )
    }
    onClickedEmoji = uniqueNo =>{
        const{ImagesList} = this.props
        const{clickedEmojis} = this.state
        const isPresent = clickedEmojis.includes(uniqueNo)
        if(isPresent){
            this.finishGame(clickedEmojis.length)
        }else{
            if(ImagesList.length - 1 === clickedEmojis.length)
            {
                this.finishGame(ImagesList.length)
            }
            this.setState(prevState=>({clickedEmojis:[...prevState.clickedEmojis,uniqueNo]}))
        }
    }
    finishGame = (newScore)=>{
        const {topScore} = this.state
        if (newScore > topScore) {
          this.setState({topScore: newScore})
        }
        this.setIsGameEnd(true)
      }
    
      restartGame = () => {
        this.setState({clickedEmojis: []})
        this.setIsGameEnd(false)
      }
    
      setIsGameEnd = value => {
        this.setState({isGameEnd: value})
    }
    renderWinorLoss = ()=>{
        const{ImagesList} = this.props
        const{clickedEmojis} = this.state
        const isWon = ImagesList.length === clickedEmojis.length
        return(
            <WinOrLoss
            isWon={isWon}
            onClickPlayAgain={this.restartGame}
            score={clickedEmojis.length}
          />
        )
    }
   render(){
    const {isGameEnd, clickedEmojis, topScore} = this.state
    const currentScore = clickedEmojis.length
    return(
        <div className="main-conatiner">
            <Navbar
          currentScore={currentScore}
          topScore={topScore}
          isGameEnd={isGameEnd}
        />
            <div className="emoji-body">
            {isGameEnd ? this.renderWinorLoss() : this.renderEmoji()}
            </div>
        </div>
    )
   }

}
export default Emoji