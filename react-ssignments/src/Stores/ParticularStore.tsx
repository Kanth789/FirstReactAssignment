import { makeAutoObservable } from "mobx";
import Cookies from "js-cookie";

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class ParticularStore {
    JobDetails={};
    similarJobDetails=[];
    skillsData =[];
    apiStatus=apiStatusConstants.initial;
    lifeAtCompnay = []
 
  constructor() {
    makeAutoObservable(this);
  }
  setApiStatus(value) {
    this.apiStatus = value;
  }
  setskillsData(data) {
    this.skillsData = data;   
  }
  setJobDetails(data){
    this.JobDetails = data
  }
  setlifeAtCompnay(value) {
    this.lifeAtCompnay = value;
  }
  setsimilarJobDetails(value) {
    this.similarJobDetails = value;
  }
  setFormattedData = data => ({
    company_logo_url:data.company_logo_url,
    id:data.id,
    company_website_url:data.company_website_url,
    employment_type:data.employment_type,
    job_description:data.job_description,
    location:data.location,
    package_per_annum:data.package_per_annum,
    rating:data.rating,
    title:data.title
  })
  setLifeatCompany = data => ({
       
    description:data.description,
    image_url:data.image_url
   })
  getParticularJob = async(id) =>{

    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
        method:"GET",
        headers:{
            Authorization : `Bearer ${jwtToken}`,
        },
    }
    const response = await fetch(apiUrl,options)
    console.log(response)
    if(response.ok === true)
    {
        const data = await response.json()
        console.log(data)
        const updatedFullJobs =this.setFormattedData(data.job_details)
        const updatedsimilarJobDetails = data.similar_jobs.map(eachItem=>({
                company_logo_url:eachItem.company_logo_url,
                id:eachItem.id,
                job_description:eachItem.job_description,
                location:eachItem.location,
                package_per_annum:eachItem.package_per_annum,
                rating:eachItem.rating,
                title:eachItem.title
        }))
        const UpdatedskillsData = data.job_details.skills.map(
            eachItem => ({
                image_url :eachItem.image_url,
                name:eachItem.name
            })
          )
          const UpadtedlifeAtCompnay = this.setLifeatCompany(data.job_details.life_at_company)

        this.setlifeAtCompnay(UpadtedlifeAtCompnay)
        this.setJobDetails(updatedFullJobs)
        this.setskillsData(UpdatedskillsData)
        this.setsimilarJobDetails(updatedsimilarJobDetails)
        this.setApiStatus(apiStatusConstants.success)
       
    }
    else {
        this.setApiStatus(apiStatusConstants.failure)
    }
}
 


}



export default new ParticularStore();