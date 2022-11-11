import { useState } from "react";
import { MainContainer, TextContainer,Text, StyleButton } from "./styledComponent";

const Unlock = ()=>{
    const [button,setterFun] = useState(false)
    const OnclickedButton = () =>{
        setterFun((prevState)=>!button)
        console.log(button)
        
    }
    const lockImg = "https://assets.ccbp.in/frontend/hooks/lock-img.png"
    const UnlockImg = "https://assets.ccbp.in/frontend/hooks/unlock-img.png"
   
    return(
        <MainContainer>
            <TextContainer>
                <div className="img">
                    <img src={button ? lockImg : UnlockImg}/>
                </div>
                <div className="img-text">
                    <Text>{button ? "You have locked" : "you have unlocked"}</Text>
                </div>
                <StyleButton onClick={OnclickedButton} >{button ? "Lock" : "Unlock"}</StyleButton>
            </TextContainer>
        </MainContainer>
    )
}
export default Unlock