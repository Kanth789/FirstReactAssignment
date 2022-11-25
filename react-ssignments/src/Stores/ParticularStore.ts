import { makeAutoObservable } from "mobx";
import Cookies from "js-cookie";

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
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
type SimilarDataTypes ={
  company_logo_url:string,
  id:string,
  employment_type:string,
  job_description:string, 
  location:string,
  package_per_annum:string,
  rating:string, 
  title:string
}
type SkillsTypes = {
  image_url:string
  name:string
}
type api = {
  apiStatus:string
  apiJobs:string
}
type lifeAtCompnay = {
  description:string,
  image_url:string
}
class ParticularStore {
    JobDetails={} as ParticularStoreData;
    similarJobDetails:SimilarDataTypes[]=[]
    skillsData :SkillsTypes[]=[];
    apiStatus=apiStatusConstants.initial;
    lifeAtCompnay : lifeAtCompnay[] =[]
 
  constructor() {
    makeAutoObservable(this);
  }
  setApiStatus(value:string) {
    this.apiStatus = value;
  }
  setskillsData(data:SkillsTypes[]) {
    this.skillsData = data;   
  }
  setJobDetails(data:ParticularStoreData){
    this.JobDetails = data
  }
  setlifeAtCompnay(value:lifeAtCompnay[]) {
    this.lifeAtCompnay = value;
  }
  setsimilarJobDetails(value:SimilarDataTypes[]) {
    this.similarJobDetails = value;
  }
  setFormattedData = (data:ParticularStoreData) => ({
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
  setLifeatCompany = (data:lifeAtCompnay) => ({
       
    description:data.description,
    image_url:data.image_url
   })
  getParticularJob = async(id: any) =>{

    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
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
        const data = await response.json()
      
        const updatedFullJobs =this.setFormattedData(data.job_details)
        const updatedsimilarJobDetails = data.similar_jobs.map((eachItem:ParticularStoreData)=>({
                company_logo_url:eachItem.company_logo_url,
                id:eachItem.id,
                job_description:eachItem.job_description,
                location:eachItem.location,
                package_per_annum:eachItem.package_per_annum,
                rating:eachItem.rating,
                title:eachItem.title
        }))
        const UpdatedskillsData = data.job_details.skills.map(
            (eachItem:SkillsTypes) => ({
                image_url :eachItem.image_url,
                name:eachItem.name
            })
          )
          const UpadtedlifeAtCompnay = this.setLifeatCompany(data.job_details.life_at_company)

        // this.setlifeAtCompnay(UpadtedlifeAtCompnay)
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