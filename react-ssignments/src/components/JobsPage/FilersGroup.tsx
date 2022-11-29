import React from "react"
import {useTranslation,Trans} from 'react-i18next'
import jobsListStore from "../../Stores/jobsListStore"

type jobsFiltersType = {
   
    jobsFilters:{
        name:string,
        categoryId: string
        checked:boolean
    }
}
const FiltersGroup = (props:jobsFiltersType)=>{
    const store = jobsListStore
    const {t} = useTranslation()
    const onChecked = ()=>{
        store.onCheckedApp(props.jobsFilters.categoryId)
    }
   
   const renderJobTypes = () =>{
   
        return(
            <div className="Employee-Type"  data-testid="employeeType1" >
            <div className="type1">
            <input placeholder="input" type="checkbox" data-testid="employeeCheckBox" name="employee"  value={props.jobsFilters.name} onClick={onChecked}></input>
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