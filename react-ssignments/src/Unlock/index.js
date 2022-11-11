import { useState } from "react";
import { MainContainer, TextContainer,Text } from "./styledComponent";

const Unlock = ()=>{
    const [button,setButtonName] = useState(false)
    const OnclickedButton = () =>{
        setButtonName(prevState=>({button:!prevState.button}))
    }
    const lockImg = "https://assets.ccbp.in/frontend/hooks/lock-img.png"
    const UnlockImg = "https://assets.ccbp.in/frontend/hooks/unlock-img.png"
    const imgUrl = button ? lockImg : UnlockImg
    const buttonName = button ? "Lock" : "Unlock"
    const Paratext = button ? "You have locked" : "You have unlocked"
    return(
        <MainContainer>
            <TextContainer>
                <div className="img">
                    <img src={imgUrl}/>
                </div>
                <div className="img-text">
                    <Text>{Paratext}</Text>
                </div>
                <button onClick={OnclickedButton}>{buttonName}</button>
            </TextContainer>
        </MainContainer>
    )
}
export default Unlock