import { Component, useEffect } from "react";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import { BallTriangle } from 'react-loader-spinner';
import './JobPage.css';
import Header from "./Header";
import Alljobs from "./Alljobs";
import FiltersGroup from "./FilersGroup";
import JobPackage from "./JobPackage";
import SearchBar from "./searchBar";
import jobsListStore from "../Stores/jobsListStore";
import {observer} from 'mobx-react';
import { observable, toJS, runInAction, computed } from "mobx";

        const JobTypes = [
          {
            name: 'Full Time',
            categoryId: 'FULLTIME',
            checked:false
          },
          {
            name: 'Part Time',
            categoryId: 'PARTTIME',
            checked:false
          },
          {
            name: 'Freelance',
            categoryId: 'FREELANCE',
            checked:false
          },
          {
            name: 'Internship',
            categoryId: 'INTERNSHIP',
            checked:false
          },
          
        ]
        const JobPackages = [
          {
            name: '10 LPA and above',
            categoryId: '1000000',
          },
          {
            name: '20 LPA and above',
            categoryId: '2000000',
          },
          {
            name: '30 LPA and above',
            categoryId: '3000000',
          },
          {
            name: '40 LPA and above',
            categoryId: '4000000',
          },
          
                  ]
          let  updatedjob = [];
          const  JobPage  = observer(() => {
                      useEffect(()=>{
                        JobsListStore.getData()
                        JobsListStore.getFullData()
                    },[])
            const JobsListStore = jobsListStore
   
          const onCheckedApp = (categoryId,checked) =>{
            const{activeJobType,checkedBox} = JobsListStore   
              const CheckId = updatedjob.includes(categoryId)
              if(!CheckId)
              {
                updatedjob.push(categoryId)
              }
              else{
                updatedjob=updatedjob.filter((item)=>item!==categoryId)
              }
              console.log(updatedjob)
              JobsListStore.activeJobType = updatedjob
              JobsListStore.getFullData()
              
          }
          const onCheckedRadioApp = (categoryId) =>{
            JobsListStore.activeJobPackage=categoryId
            JobsListStore.getFullData()
          }
          const enterSearchInput = () => {
            JobsListStore.getFullData()
          }
          const changeSearchInput = searchInput => {
          JobsListStore.setSearchValue({searchInput})
          }
          

          const  renderFullViewProfile = () =>{
              const {profileData,apiStatus} = JobsListStore
              
              const{name,profile_image_url,short_bio} = profileData
              return(
                  <div className="profile-job-conatiners">
                
                  <div className="profile-job-details">
                  <div className="profile-conatiner">
                      <div className="logo">
                          <img src={profile_image_url}/>
                          <h3>{name}</h3>
                      </div>
                      <div className="profile-content">
                          <p>{short_bio}</p>
                      </div>
                  </div>
                  
                  
                  <div className="jobs-conatiner">
                    <SearchBar changeSearchInput={changeSearchInput} enterSearchInput={enterSearchInput}/>
                  </div>
                  </div>
                  </div>
              )
          }
        
          const lengthOfList=()=>{
          
            const{jobsList} = JobsListStore
          
            if(jobsList.length > 0 )
            {
                return renderFullJobsList()
            }
            else{
              return renderNoJobsFound() 
            }
          }
          const renderNoJobsFound = ()=>{
                return(
                  <div>
                    <img src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"/>
                  </div>
                )
          }
          const  renderFullJobsList = ()=>{
              const{jobsList,apiStatus}  = JobsListStore
              return(
                  <div> 
                    {JobsListStore.jobsList.map(eachItem=>{
                      return <Alljobs jobData={eachItem} key={eachItem.id}/>
                    }
                  )}
                    </div>
              )
          }
        const renderLoadingView = () => (
            <div className="products-details-loader-container" testid="loader">
                        <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
              />
            </div>
          )
          const  ClickedButton = ()=>{
            JobsListStore.getData()
          }
          const renderFailureView = () => (
            <div className="product-details-error-view-container">
                <button onClick ={ClickedButton} type="button" className="failure-button">
                  Retry
                </button>
            
            </div>
          )
          const  renderJobFailureView = () => (
            <div className="job-failure-view">   
              <img src="https://assets.ccbp.in/frontend/react-js/failure-img.png "/>   
            </div>
          )
      
     console.log(JobsListStore.renderProfileDetails(renderLoadingView,renderFullViewProfile,renderFailureView),"RENDER")
      const{activeJobType,checkedBox,apiStatus,apiJobs} = JobsListStore
        return(
            <>
             <Header/>
            <div className="filters-profile">
            {apiStatus==="SUCCESS" ? renderFullViewProfile (): apiStatus ==="FAILURE" ? renderFailureView() : renderLoadingView()}
            <div className="filters-profile-conatiner">
            <div className="filters-conatiner">
              <hr></hr>
              <h2>Type of Employment</h2>
              {JobTypes.map(eachItem=>(<FiltersGroup jobsFilters={eachItem} key={eachItem.categoryId} onCheckedApp={onCheckedApp}  checkedBox={checkedBox}/> ))}
              <hr></hr>
              <h2>Salary Range</h2>
              {JobPackages.map(eachItem=>(<JobPackage jobSalary={eachItem} key={eachItem.categoryId} onCheckedRadioApp={onCheckedRadioApp}/>))}
            </div>
            <div className="profile-card"> 
            {apiJobs==="SUCCESS" ? lengthOfList() : apiStatus ==="FAILURE" ? renderJobFailureView():  renderLoadingView()}
             </div>
            </div>
            </div>
            </>
        )
    }
)
export default JobPage