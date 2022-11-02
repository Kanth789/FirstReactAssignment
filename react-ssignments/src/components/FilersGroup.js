import React from "react"
const FiltersGroup = (props)=>{
    const{jobsFilters,onCheckedApp} = props
    const {name,categoryId} = jobsFilters

    const onChecked = ()=>{
        onCheckedApp(categoryId)
    }
   const renderJobTypes = () =>{
   
        return(
            <div className="Employee-Type">
            <div className="type1">
            <input type="checkbox" id="employeeType1" name="employee" value={name} onClick={onChecked}></input>
             <label for="employee">{name}</label>
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