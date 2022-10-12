const GoogleSearch = (props) =>{
    const {GoogleList,onHighlightApp} = props
    const {uniqueNo,content} = GoogleList
    
    const onHighlight = () =>{
        onHighlightApp(uniqueNo)
        console.log(uniqueNo)
    }
    return(
        
            <div className="div1">
                
                <p>{content}</p>
                <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" onClick={onHighlight}></img>
            </div>
        
    )
}
export default GoogleSearch