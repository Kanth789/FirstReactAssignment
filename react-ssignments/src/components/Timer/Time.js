import { useState, useEffect } from "react"
import { MainConatiner ,Text} from "./StyledComponent"

const Timer = ()=>{
    const [number, setNumber] = useState(0)
    useEffect (()=>{
        const Time = setInterval(()=>{
            setNumber(number=>number + 1)
        },1000);
        return()=>{
            clearInterval(Time)
        };
    },[]);
    return(
        <MainConatiner>
            <Text font="32px">{number}</Text>
        </MainConatiner>
    )
}
export default Timer