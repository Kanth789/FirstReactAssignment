const GameView = (props) =>{
    const {gameItems,OnclickedImageItem} = props
    const {uniqueId,imgUrl,name} = gameItems
    const OnclickedItem = () =>{
        OnclickedImageItem(imgUrl,uniqueId)
    }
    return(
            <div className="first-line-img">
            <div className={`img1 ${name}`} onClick={OnclickedItem}>
                <img src={imgUrl}/>
                </div>
                                    
            </div>                 
    )
}
export default GameView