const SubmitFeedBack = (props) =>{
    const {ImageList,OnsubmitedApp} = props
    const Onsubmited = () =>{
        OnsubmitedApp()
    }
    return(
        
        <div className="img1">
            <img src={ImageList.imgUrl} onClick={Onsubmited}></img>
            <p>{ImageList.name}</p>
        </div>
        
    )
}

export default SubmitFeedBack