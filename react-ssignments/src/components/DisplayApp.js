const DisplayApp = (props) =>{
    const {AppStore} = props
    const {uniqueNo,imgUrl,name,caterogyId} = AppStore

    return(
        <div className="app1">
            <img src={imgUrl}></img>
            <p>{name}</p>
        </div>
    )
}
export default DisplayApp