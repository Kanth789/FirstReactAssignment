import { Component, useEffect } from "react";
import {Link} from 'react-router-dom';
import Cookies from'js-cookie';
import { TailSpin } from 'react-loader-spinner';
import { BiLinkExternal } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MdWork } from "react-icons/md";
import {observer} from 'mobx-react';
import React from "react";

import './Particular.css';

import ParticularStore from "../../Stores/ParticularStore";
import SimilarJob from "../SmiliarJob/SimilarJob";
import Skills from "./Skills";
import Header from "../Header";


type ParticularStoreData = {
    company_website_url:string,
    company_logo_url:string,
    id:string,
    employment_type:string,
    job_description:string,
    location:string,
    package_per_annum:string,
    rating:string,
    title:string
  
  }
const  ParticularJobDeatils = observer((props: { match: any; })=>{
   const ParticularJob = ParticularStore
    useEffect(()=>{
        const { match } = props
        const { params } = match
        const { id } = params
        ParticularJob.getParticularJob(id)
    },[])
   
  
   const  OnclickedSimilar = (id: any) =>{
    ParticularJob.getParticularJob(id)
        
    }
    const renderFullJobDetails = () =>{
        const{JobDetails,apiStatus,skillsData,similarJobDetails,lifeAtCompnay} = ParticularJob
        const{company_website_url,company_logo_url,id,employment_type,job_description,location,package_per_annum,rating,title} = JobDetails
        return(
            <>
            <Header history={undefined}/>
            <div className="job-similar">
            <div className="Job-Details">
                <div className="card">
            <div className="card-img-header">
                <div className="card-img">
                    <img src={company_logo_url}/>
                </div>
                <div className="card-header">
                    <h4>{title}</h4>
                    <div className="card-header-rating">
                    <AiFillStar color="gold"   size="17px"/>
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
            <div className="card-icons">
                <div className="card-location-work">
                <div className="location">
                <ImLocation color="white"   size="17px"/>
                    <p>{location}</p>
                </div>
                <div className="work">
                <MdWork color="white"   size="17px"/>
                    <p>{employment_type}</p>
                </div>
                </div>
                <div className="card-salary">
                   <p>{package_per_annum}</p>
                </div>
            </div>
            <hr></hr>
            <div className="descripition-div">
            <h4>Description</h4>
            
            <div className="visit-link">
             
            <p>Visit</p>
            < BiLinkExternal onClick={() => window.open(company_website_url,"_self")} />
            </div>
            
            
            </div>
            <p>{job_description}</p>
            <div className="skill-conatiner">
                <h3>Skills</h3>
                <div className="skills-cards">
                {skillsData.map(eachItem=>(<Skills skills={eachItem}/>))}
                </div>
            </div>
            <div className="life-at-compny">
                <h3>Life at Company</h3>
                <div className="life-at-company-desc">
                {/* <p>{lifeAtCompnay.description}</p>
                <img src={lifeAtCompnay.image_url}/> */}
                </div>
            </div>
        </div>
            </div>
            <div className="similar-jobs-conatiner">
                <h3>Similar Jobs</h3>
                <div className="similar-job-cards">
                {similarJobDetails.map(eachItem=>(<SimilarJob similarData={eachItem} key={eachItem.id} OnclickedSimilar={OnclickedSimilar}/>))}
                </div>
            </div>
            </div>
            </>
        )
    }
    
        return(
            
        <>
        {renderFullJobDetails()}
        </>
        )
    }
)

export default ParticularJobDeatils