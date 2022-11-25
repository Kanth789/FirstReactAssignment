import React from "react"
import {useTranslation,Trans} from 'react-i18next'
type jobsFiltersType = {
    onCheckedApp:(categoryId:string)=>void,
    jobsFilters:{
        name:string,
        categoryId: string
        checked:boolean
    }
}
const FiltersGroup = (props:jobsFiltersType)=>{
    const {t} = useTranslation()
    const onChecked = ()=>{
        props.onCheckedApp(props.jobsFilters.categoryId)
    }
   
   const renderJobTypes = () =>{
   
        return(
            <div className="Employee-Type"  data-testid="employeeType1" >
            <div className="type1">
            <input type="checkbox" id="employeeType1" name="employee"  value={props.jobsFilters.name} onClick={onChecked}></input>
             <label >{props.jobsFilters.name}</label>
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