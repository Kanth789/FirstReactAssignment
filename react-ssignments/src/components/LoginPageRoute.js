import { useHistory } from "react-router-dom";
import { LoginPage } from "./LoginPage";

function LoginPageRoute(){
    const history = useHistory()
    
    
  
    return <LoginPage history={history}/>
}

export {LoginPageRoute}