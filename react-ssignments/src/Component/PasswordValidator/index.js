import { useState } from "react"
import { GlobalStyle, MainConatiner, SecondConatiner,Text } from "./styledComponent"

const Password = () =>{
    const [password,setPassword] = useState('')
    const OnchangeInput = (event) =>[
        setPassword(event.target.value)
    ]
    return(
        <>
        <GlobalStyle/>
        <MainConatiner>
            <SecondConatiner>
                <Text font="52px"  color="white">PassWord Validator</Text>
                <Text font="22px" color="white">Check how strong and secure is your password</Text>
                <input type="password" onChange={OnchangeInput}></input>
                {password.length >= 8 ? "": <Text font="18px" color="red">*Your password must be atleast 8 characters</Text> }
            </SecondConatiner>
        </MainConatiner>
        </>
    )
}
export default Password