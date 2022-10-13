const Tabs = (props) =>{
    const {TabsList,OnclickedTabApp} = props
    const {uniqueNo,name,caterogyId} = TabsList

    const OnclickedTab = () =>{
        OnclickedTabApp(caterogyId)
    }
    return(
        <div className="div1">
            <p onClick={OnclickedTab}>{name}</p>
        </div>
    )
}
export default Tabs