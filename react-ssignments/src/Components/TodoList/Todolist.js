import { ListCard ,Text} from "./TodoStyledComponent"
import { useEffect, useState } from "react";
import {AiFillDelete} from "react-icons/ai";
const Todolist = (props)=>{
   
    
    const{commentDetails,OnclcikedDeleteApp,onCheckedApp,ischecked} = props
    const{name,deleteIcon,id} = commentDetails
    const OnChecked = ()=>{
        onCheckedApp(id)

    }
    const OnclickedDelete = ()=>{
        OnclcikedDeleteApp(id)
    }
    return(
        <>
        <ListCard>
            <input type="checkbox" id={props.id}  checked={ischecked}
          onChange={OnChecked}></input>
            <Text className={ischecked ? "checkedClass" : "uncheckedClass"}>{name}</Text>
           <AiFillDelete onClick={OnclickedDelete}/>
        </ListCard>
        </>
    )
}
export default Todolist