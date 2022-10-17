const UserHistory = (props)=>{
    const {IncomeList} = props
    const {Title,Count,type} = IncomeList
    return(
        <div className="div1">
            <div className="title-name">
                <h4>{Title}</h4>
            </div>
            <div className="title-Amount">
                <h4>{Count}</h4>
            </div>
            <div className="title-Type">
                <h4>{type}</h4>
            </div>
            <div className="title-Delete">
                <img src=""></img>
            </div>
        </div>
    )
}

export default UserHistory