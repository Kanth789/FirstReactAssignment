const ConfigurationController = (props) =>{
    const{OnclickedBox,CategroyList} = props
    const{name,checkBoxId,checked} =  CategroyList
    const OnclcikedCheckBox = () =>{
        OnclickedBox(checkBoxId)
    }
    return(
        <div className="nav-bar">
            <div className="nav-bar-checkBox">
              <input type="checkbox" id="Content" name="layout"  onClick={OnclcikedCheckBox}></input>
               <label>{name}</label>
               
            </div>
        </div>
    )
}

export default ConfigurationController