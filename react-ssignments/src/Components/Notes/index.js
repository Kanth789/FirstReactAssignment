import { v4 as uuid } from 'uuid';
import { useState } from "react";
import { MainConatiner, Text, TextContext,CommentList} from "./StyledComponent"
import Noteitem from '../NoteItem/Noteitem';

const NoteApp  = () =>{
    const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const onChangeName = (event) => setName(event.target.value);

  const onChangeCommentText = (event) => setCommentText(event.target.value);

  const onAddComment = (event) => {
    event.preventDefault();
    const newComment = {
      id: uuid(),
      name,
      commentText,
    };
    setCommentsList((prevCommentsList) => [...prevCommentsList, newComment]);
    setName("");
    setCommentText("");
  };
  const  renderCommentList = ()=>{
    return(
        <>
       {commentsList.map((eachComment) => (
          <Noteitem key={eachComment.id} commentDetails={eachComment} />
        ))}
        </>
    )
    }
    return(
        <>
        <MainConatiner>
            <Text font="32px" fontColor="#4c63b6" weight="600">Notes</Text>
            <TextContext>
                <input type="text"
                    placeholder="Title"
                    value={name}
                    onChange={onChangeName}>     
                </input>
                <textarea 
                  placeholder="Take a Note"
                    value={commentText}
                    onChange={onChangeCommentText}
                    rows="6">
                </textarea>
                
            </TextContext>
            <button onClick={onAddComment}>Add</button>
            <CommentList>
        {commentsList.length > 0 ? renderCommentList() : <img src='https://assets.ccbp.in/frontend/hooks/empty-notes-img.png'/>}
      </CommentList>
        </MainConatiner>
        </>
    )
}
export default NoteApp