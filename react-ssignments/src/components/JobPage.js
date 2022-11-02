import { Component } from "react";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner';
import './JobPage.css';
import Header from "./Header";
import Alljobs from "./Alljobs";
import FiltersGroup from "./FilersGroup";
import JobPackage from "./JobPackage";
import SearchBar from "./searchBar";
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }
   const JobTypes = [
    {
      name: 'Full Time',
      categoryId: 'FULLTIME',
    },
    {
      name: 'Part Time',
      categoryId: 'PARTTIME',
    },
    {
      name: 'Freelance',
      categoryId: 'FREELANCE',
    },
    {
      name: 'Internship',
      categoryId: 'INTERNSHIP',
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
  
class JobPage extends Component{
    state ={
        profileData:[],
        jobsList :[],
        apiStatus: apiStatusConstants.initial,
        activeJobType:'',
        activeJobPackage:'',
        searchInput: '',
    }
    onCheckedApp = (categoryId) =>{
        this.setState({activeJobType:categoryId},this.getFullData)
        console.log(this.state.activeJobType)
    }
    onCheckedRadioApp = (categoryId) =>{
      this.setState({activeJobPackage:categoryId},this.getFullData)
      console.log(this.state.activeJobPackage)
    }
    enterSearchInput = () => {
      this.getFullData()
    }
    changeSearchInput = searchInput => {
      this.setState({searchInput})
    }
    componentDidMount(){
        this.getData()
        this.getFullData()
    }
    getFullData = async ()=>{
        const{jobsList,apiStatus}  = this.state
       const apiUrl="https://apis.ccbp.in/jobs"
       const jwtToken = Cookies.get('jwt_token')
        const options = {
            method:"GET",
            headers:{
                Authorization : `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch(apiUrl,options)
        if(response.ok === true)
        {
            const data =  await response.json()
            const updatedFullJobs = data.jobs.map(eachItem=>({
                company_logo_url:eachItem.company_logo_url,
                id:eachItem.id,
                employment_type:eachItem.employment_type,
                job_description:eachItem.job_description,
                location:eachItem.location,
                package_per_annum:eachItem.package_per_annum,
                rating:eachItem.rating,
                title:eachItem.title
            }))
           this.setState({jobsList:updatedFullJobs,apiStatus:apiStatusConstants.success})
           
        }
        else {
            this.setState({
              apiStatus: apiStatusConstants.failure,
            })
          }
    }
    
    getData = async ()=>{
       const{profileData,apiStatus}  = this.state
       const apiUrl="https://apis.ccbp.in/profile"
       const jwtToken = Cookies.get('jwt_token')
        const options = {
            method:"GET",
            headers:{
                Authorization : `Bearer ${jwtToken}`,
            },
        }
        const response = await fetch(apiUrl,options)
        if(response.ok === true)
        {
            const data =  await response.json()
            
            const UpdatedProfileData = data.profile_details
            
            this.setState({profileData:UpdatedProfileData, apiStatus: apiStatusConstants.success})
           
        }
        else {
            this.setState({
              apiStatus: apiStatusConstants.failure,
            })
          }
    }
    renderFullViewProfile = () =>{
        const {profileData,apiStatus} = this.state
        const{name,profile_image_url,short_bio} = profileData
        return(
            <>
            <Header/>
            <div className="profile-job-conatiners">
            <div className="profile-conatiner">
                <div className="logo">
                    <img src={profile_image_url}/>
                    <h3>{name}</h3>
                </div>
                <div className="profile-content">
                    <p>{short_bio}</p>
                </div>
            </div>
            <div className="filters-conatiner">
              {JobTypes.map(eachItem=>(<FiltersGroup jobsFilters={eachItem} key={eachItem.categoryId} onCheckedApp={this.onCheckedApp}/> ))}
              {JobPackages.map(eachItem=>(<JobPackage jobSalary={eachItem} key={eachItem.categoryId} onCheckedRadioApp={this.onCheckedRadioApp}/>))}
            </div>
            
            <div className="jobs-conatiner">
              <SearchBar changeSearchInput={this.changeSearchInput} enterSearchInput={this.enterSearchInput}/>
                {this.renderFullJobsList()}
            </div>
            </div>
            </>
        )
    }
    renderFullJobsList = ()=>{
        const{jobsList,apiStatus}  = this.state
        return(
            <>
              {jobsList.map(eachItem=>(<Alljobs jobData={eachItem} key={eachItem.id}/>))}
              </>
        )
    }
    renderLoadingView = () => (
        <div className="products-details-loader-container" testid="loader">
           <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
        </div>
      )
      ClickedButton = ()=>{
        this.getData()
      }
      renderFailureView = () => (
        <div className="product-details-error-view-container">
          
          
          
            <button onClick ={this.ClickedButton} type="button" className="failure-button">
              Retry
            </button>
         
        </div>
      )
      renderJobFailureView = () => (
        <div className="job-failure-view">
          
          <img src="https://assets.ccbp.in/frontend/react-js/failure-img.png "/>
          
            
         
        </div>
      )
      renderProfileDetails = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderFullViewProfile()
          case apiStatusConstants.failure:
            return this.renderFailureView()
          case apiStatusConstants.inProgress:
            return this.renderLoadingView()
          default:
            return null
        }
      }
      renderJobProfiles = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderFullJobsList()
          case apiStatusConstants.failure:
            return this.renderJobFailureView()
          case apiStatusConstants.inProgress:
            return this.renderLoadingView()
          default:
            return null
        }
      }
    render()
    {
        return(
            <>
            {this.renderProfileDetails()} 
            {this.renderJobProfiles()}
            </>
        )
    }
}
export default JobPage