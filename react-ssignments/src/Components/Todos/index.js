import { v4 as uuid } from 'uuid';
import { useEffect, useState } from "react";
import {AiFillDelete} from "react-icons/ai";
import { MainConatiner ,Text, TodolistConatiner} from './StyledComponent';
import Todolist from '../TodoList/Todolist';
const Todoview = ()=>{
    useEffect(()=>{
        
        getTodofromSTorage()
        
        console.log(commentsList)
    },[])
    const [name, setName] = useState("");
   
    const [commentsList, setCommentsList] = useState([]);

    const onChangeName = (event) => setName(event.target.value);
    const onAddComment = (event) => {
        event.preventDefault();
        const newComment = {
          id: uuid(),
          name,
          ischecked:false
        };
        setCommentsList((prevCommentsList) => [...prevCommentsList, newComment]);
    
        setName("");
      };
    const OnclcikedDeleteApp = (id)=>{
    
    const updatedTodoList = commentsList.filter(
      eachItem => eachItem.id !== id,
    )
    console.log(updatedTodoList)
    setCommentsList(updatedTodoList)
    }
    const getTodofromSTorage = () =>{
        const gettodoElement = localStorage.getItem("todoStorage");
       
        const convertElement = JSON.parse(gettodoElement);
       
        if (convertElement === null) {
            return [];
        } else {
            
            setCommentsList(convertElement)
    
        }
        
    }
  
    const onSaveButton = ()=> {
        localStorage.setItem("todoStorage", JSON.stringify(commentsList));
        
    }
  const onCheckedApp=(id)=>{
    setCommentsList(prevCommentsList=>(prevCommentsList.map(eachComment=>{
        if(id===eachComment.id){
            return {...eachComment, ischecked:!eachComment.ischecked}
        }
        return eachComment
    })))
  }
    return(
        <MainConatiner>
        <Text font="32px">Todo List</Text>
        <Text font="32px">Create a list</Text>
        <input   placeholder="Title"
                    value={name}
                    onChange={onChangeName}>
                    
        </input>
         <TodolistConatiner>
         {commentsList.map((eachComment) => (
          <Todolist key={eachComment.id} onCheckedApp={onCheckedApp} commentDetails={eachComment} id={eachComment.id} ischecked={eachComment.ischecked} OnclcikedDeleteApp={OnclcikedDeleteApp} />
        ))}
         </TodolistConatiner>
        <button onClick={onAddComment}>Add</button>
        <button onClick={onSaveButton}>Save</button>
        </MainConatiner>
    )
}
export default Todoview