import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { MdWork } from "react-icons/md";
import {observer} from 'mobx-react';

import './Alljobs.css';
import React from "react";
 type jobDataItems = {
    jobData : {
        company_logo_url:string,
        id:string,
        employment_type:string,
        job_description:string,
         location:string,
         package_per_annum:string,
         rating:string, 
         title:string
    }
   
    
}
const Alljobs =(props:jobDataItems)=>{
   
   
    return(
        <Link to={`/jobs/${props.jobData.id}`} className="nav-link">
        <div className="card">
            <div className="card-img-header">
                <div className="card-img">
                    <img src={props.jobData.company_logo_url}/>
                </div>
                <div className="card-header">
                    <h4>{props.jobData.title}</h4>
                    <div className="card-header-rating">
                        <AiFillStar color="gold"   size="17px"/>
                        <p>{props.jobData.rating}</p>
                    </div>
                </div>
            </div>
            <div className="card-icons">
                <div className="card-location-work">
                <div className="location">
                    <ImLocation color="white"   size="17px"/>
                    <p>{props.jobData.location}</p>
                </div>
                <div className="work">
                    <MdWork color="white"   size="17px"/>
                    <p>{props.jobData.employment_type}</p>
                </div>
                </div>
                <div className="card-salary">
                   <p>{props.jobData.package_per_annum}</p>
                </div>
            </div>
            <hr></hr>
            <h4>Description</h4>
            <p>{props.jobData.job_description}</p>
        </div>
        </Link>
    )
}
export default Alljobs