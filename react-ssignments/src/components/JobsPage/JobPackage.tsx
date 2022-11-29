import React from "react"
type jobPackageType ={
    jobSalary:{
        name:string,
        categoryId:string
    },
    onCheckedRadioApp:(categoryId:string)=>void
    
    
}
const JobPackage = (props:jobPackageType)=>{
    const{jobSalary,onCheckedRadioApp} = props
    const {name,categoryId} = jobSalary

    const onChecked = ()=>{
        onCheckedRadioApp(categoryId)
    }
   const renderJobPackages = () =>{
        return(
            <div className="Employee-Type">
            <div className="type1">
            <input type="radio" id="employeeType1" name="employee" value={name} onClick={onChecked}></input>
             <label>{name}</label>
            </div>
        </div>
        
        )
    }
    
    return(
        <>
       
       {renderJobPackages()}
       </>
        
       
    )
}
export default JobPackage