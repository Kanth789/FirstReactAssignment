import React from "react"
type Checkbox = {
    checkedBox:boolean
    onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    categoryId:string
}
const FiltersGroup = (props)=>{
    const{jobsFilters,onCheckedApp,checkedBox} = props
    const {name,categoryId,checked} = jobsFilters

    const onChecked = ()=>{
        onCheckedApp(categoryId)
    }
    
   const renderJobTypes = () =>{
   
        return(
            <div className="Employee-Type">
            <div className="type1">
            <input type="checkbox" id="employeeType1" name="employee" checked={checkedBox} value={name} onClick={onChecked}></input>
             <label >{name}</label>
            </div>
        </div>
        
        )
    }
    
    return(
        <>
       
       {renderJobTypes()}
       </>
        
       
    )
}
export default FiltersGroup