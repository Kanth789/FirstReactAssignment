
import { useState } from "react"
import { MainConatiner,Leftconatiner ,Text,RightConatiner, GlobalStyle} from "./styledComponent"

const  CreditCard = () =>{
    const[number,setNumber] = useState('');
    const [name,setName] = useState('');
    const OnchangeNumber = (event) => setNumber(event.target.value)
    const OnchangeName = (event)=> setName(event.target.value)
    return(
        <>
        <GlobalStyle/>
        <MainConatiner>
            <Leftconatiner color="#3b4b69">
            <RightConatiner>
                <div className="right-conatiner">
                <Text font="22px">{number}</Text>
                <Text font="20px">CARDHOLDER NAME</Text>
                <Text font="20px" text="uppercase">{name}</Text>
                </div>
            </RightConatiner>
            </Leftconatiner>
            <Leftconatiner>
                <div className="form-conatiner">
                <Text font="30px" color="black">Payment Menthod</Text>
                <input type="text" onChange={OnchangeNumber} placeholder="Card Number"></input>
                <input  type="text" onChange={OnchangeName} placeholder="Card Name"></input>
                </div>
            </Leftconatiner>
        </MainConatiner>
        </>
    )
}
export default CreditCard