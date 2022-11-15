import React, {  useState,useEffect } from "react"
import {observer} from 'mobx-react-lite'
const Home = ({store})=>{
    useEffect(()=>{
        
        store.subject = getTodofromSTorage()
        
        
    },[])
    const[name,setName] = useState("");
    
    const OnclickedSaved = ()=>{
        localStorage.setItem("todoStorage", JSON.stringify(store.subject));
    }
    const addSubject =()=>{
        store.addSubject(store.updatedUser)
        console.log(store.subject)
        setName('')
    }
    const  changeSearch = (event)=>{
        store.updatedUser(event.target.value)
    }
    const getTodofromSTorage = () =>{
        const gettodoElement = localStorage.getItem("todoStorage");
       
        const convertElement = JSON.parse(gettodoElement);
       
        if (convertElement === null) {
            return [];
        } else {
            
            return convertElement
    
        }
        
    }
    return(
        <div>
            <h1>{store.userInfo.name}</h1>
            <input type="text" value={store.updatedUser} onChange={changeSearch}></input>
            <button onClick={OnclickedSaved}>Save</button>
            <button onClick={addSubject}>Add Subject</button>
            {
                store.subject.map((eachItem,index)=><p key={index}>{eachItem}</p>)
            }
        </div>
    )
}
export default observer(Home)