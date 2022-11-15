import React from "react"
import {observer} from 'mobx-react-lite'
const About = ({store})=>{
    return(
        <div>
            <h1>About</h1>
            <p>{store.userInfo.name}</p>
        </div>
    )
}
export default observer(About)