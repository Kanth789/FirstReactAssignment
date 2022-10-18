import { Component } from "react";
class EmojiConatiner extends Component{
    render()
    {
        const{emoji,onClickEmoji} = this.props
        const {emojiName, emojiUrl, uniqueNo} = emoji
        const onClickedEmojiItem = ()=>{
            onClickEmoji(uniqueNo)
        }
        return(
           <div className="emoji-items" onClick={onClickedEmojiItem}>
            <img src={emojiUrl}></img>
           </div>
        )
    }
}
export default EmojiConatiner