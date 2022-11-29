import { Component, useEffect } from "react";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import { BallTriangle } from 'react-loader-spinner';
import { observer, Provider } from 'mobx-react';
import {useTranslation,Trans} from 'react-i18next'
import { observable, toJS, runInAction, computed } from "mobx";
import React from "react";
import { t } from "i18next";


import './JobPage.css';


import Header from "../Header";
import Alljobs from "../AllJobs/Alljobs";
import FiltersGroup from "../FilersGroup";
import JobPackage from "../JobPackage";
import SearchBar from "../SearchBar";
import jobsListStore from "../../Stores/jobsListStore";

type Checkbox = {
  checkedBox:boolean

}
type JobTypesData = {
  name: string;
  categoryId: string
  checked: boolean
}

type JobPackageData = {
  name: string;
  categoryId: string
}


// let updatedjob: any[]  =[]
const JobPage = observer(() => {
  const {t} = useTranslation()
  useEffect(() => {
    JobsListStore.getData()
    JobsListStore.getFullData()
  }, [])
  const JobTypes :JobTypesData[] =[
    {
      name: t('Fullname'),
      categoryId: "FULLTIME",
      checked: false
    },
    {
      name:t('Partname'),
      categoryId: "PARTTIME",
      checked: false
    },
    {
      name: t('Freelancename'),
      categoryId: "FREELANCE",
      checked: false
    },
    {
      name: t("Internshipname"),
      categoryId: "INTERNSHIP",
      checked: false
    }
  
  ]
  const  JobPackages :JobPackageData[] =  [
    {
      name:t('10name'),
      categoryId: "1000000"
    },
    {
      name: t('20name'),
      categoryId: "2000000"
    },
    {
      name: t('30name'),
      categoryId: "3000000"
    },
    {
      name: t('40name'),
      categoryId: "4000000"
    }
  
  ]
  
  const JobsListStore = jobsListStore

  const onCheckedRadioApp = (categoryId:string) => {
    JobsListStore.activeJobPackage = categoryId
    JobsListStore.getFullData()
  }
  const enterSearchInput = () => {
    JobsListStore.getFullData()
  }
  const changeSearchInput = (searchInput:string) => {
    JobsListStore.setSearchValue( searchInput )
  }
  type profileDataList = {
  
    name:string, 
    profile_image_url:string,
    short_bio:string
  
  }
 
  const renderFullViewProfile = () => {
    const { profileData, apiStatus } = JobsListStore

    const { name, profile_image_url, short_bio } = profileData
    return (
      <div className="profile-job-conatiners">

        <div className="profile-job-details">
          <div className="profile-conatiner">
            <div className="logo">
              <img src={profile_image_url} />
              <h3>{name}</h3>
            </div>
            <div className="profile-content">
              <p>{short_bio}</p>
            </div>
          </div>


          <div className="jobs-conatiner">
            <SearchBar changeSearchInput={changeSearchInput} enterSearchInput={enterSearchInput} searchInput={JobsListStore.searchInput} />
          </div>
        </div>
      </div>
    )
  }

  const lengthOfList = () => {

    const { jobsList } = JobsListStore

    if (jobsList.length > 0) {
      return renderFullJobsList()
    }
    else {
      return renderNoJobsFound()
    }
  }
  const renderNoJobsFound = () => {
    return (
      <div>
        <img src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png" />
      </div>
    )
  }
  const renderFullJobsList = () => {
    const { jobsList, apiStatus } = JobsListStore
    return (
      <div className="ALlJobsList">
        {JobsListStore.jobsList.map(eachItem => {
          return <Alljobs jobData={eachItem} key={eachItem.id} />
        }
        )}
      </div>
    )
  }

  const renderLoadingView = () => (
    <div className="products-details-loader-container" >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
       
       
        visible={true}
      />
    </div>
  )
  const ClickedButton = () => {
    JobsListStore.getData()
  }
  const renderFailureView = () => (
    <div className="product-details-error-view-container">
      <button onClick={ClickedButton} type="button" className="failure-button">
        Retry
      </button>

    </div>
  )
  const renderJobFailureView = () => (
    <div className="job-failure-view">
      <img src="https://assets.ccbp.in/frontend/react-js/failure-img.png " />
    </div>
  )

  
  const { activeJobType, checkedBox, apiStatus, apiJobs } = JobsListStore
  return (
    <>
      <Header history={undefined} />
      <div className="filters-profile">
        {apiStatus === "SUCCESS" ? renderFullViewProfile() : apiStatus === "FAILURE" ? renderFailureView() : renderLoadingView()}
        <div className="filters-profile-conatiner">
          <div className="filters-conatiner">
            <hr></hr>
            <h2>Type of Employment</h2>
            {JobTypes.map(eachItem => (<FiltersGroup jobsFilters={eachItem} key={eachItem.categoryId} />))}
            <hr></hr>
            <h2>Salary Range</h2>
            {JobPackages.map(eachItem => (<JobPackage jobSalary={eachItem} key={eachItem.categoryId} onCheckedRadioApp={onCheckedRadioApp} />))}
          </div>
          <div className="profile-card">
            {apiJobs === "SUCCESS" ? lengthOfList() : apiStatus === "FAILURE" ? renderJobFailureView() : renderLoadingView()}
          </div>
        </div>
      </div>
    </>
  )
}
)
export default JobPage




// let updatedjob: any[]  =[]
// const onCheckedApp = (categoryId:string) => {
  //   const { activeJobType, checkedBox } = JobsListStore
  //   const CheckId = updatedjob.includes(categoryId) 
  //   if (!CheckId) {
  //     updatedjob.push(categoryId)
  //   }
  //   else {
  //     updatedjob = updatedjob.filter((item) => item !== categoryId)
  //   }
  //   console.log(updatedjob)
  //   JobsListStore.activeJobType = updatedjob
  //   JobsListStore.getFullData()

  // }