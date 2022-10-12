const GoogleSearch = (props) =>{
    const{GoogleList} = props
    return(
        
            <div className="div1">
                <p>{GoogleList.content}</p>
                <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"></img>
            </div>
        
    )
}
export default GoogleSearch