import ToggleContext from "../ToggleContext"
import './Notfound.css'
const Notfound = () =>{
    return(
    <ToggleContext.Consumer>
        {
            value=>{
                const{showtoggleButton} = value
            
    return(
        <div className="Notfound-conatiner">
            {showtoggleButton ? <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"/> : <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"/>}
        </div>
    )
}
}
    </ToggleContext.Consumer>
    )
}

export default Notfound