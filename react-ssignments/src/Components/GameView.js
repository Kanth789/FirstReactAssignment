const GameView = (props) =>{
    const {gameItems,OnclickedImageItem} = props
    const {uniqueId,imgUrl} = gameItems
    const OnclickedItem = () =>{
        OnclickedImageItem(imgUrl,uniqueId)
    }
    return(
            <div className="first-line-img">
            <div className="img1" onClick={OnclickedItem}>
                <img src={imgUrl}/>
                </div>
                                    
            </div>                 
    )
}
export default GameView