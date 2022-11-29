import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MdWork } from "react-icons/md";
import React from "react";


import './Similar.css'


type SimilarDataTypes ={
    similarData : {
    company_logo_url:string,
    id:string,
    employment_type:string,
    job_description:string, 
    location:string,
    package_per_annum:string,
    rating:string, 
    title:string
    }
    OnclickedSimilar:(id:string)=>void
  }
const SimilarJob = (props:SimilarDataTypes) =>{
    const {similarData,OnclickedSimilar} = props
    const{company_logo_url,id,employment_type,job_description, location,package_per_annum,rating, title} = similarData
    const OnclickedSimilarJob = ()=>{
        OnclickedSimilar(id)
    }
    return(
        <Link to={`/jobs/${id}`} className="nav-link">
        <div className="smiliar-card" onClick={OnclickedSimilarJob}>
           
            <div className="similar-card-header">
                <div className="similar">
                    <img src={props.similarData.company_logo_url}/>
                </div>
                <div className="similar-heading">
                    <h4>{props.similarData.title}</h4>
                    <div className="rating">
                    <AiFillStar color="gold"   size="17px"/>
                        <p>{props.similarData.rating}</p>
                    </div>
                </div>
            </div>
            <div className="similar-content">
                <h3>Description</h3>
                <p>{props.similarData.job_description}</p>
                <div className="similar-icons">
                    <div className="location">
                    <ImLocation color="white"   size="17px"/>
                        <p>{props.similarData.location}</p>
                    </div>
                    <div className="work">
                    <MdWork color="white" size="17px"/>
                        <p>{props.similarData.location}</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}
export default SimilarJob