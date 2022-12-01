import { makeAutoObservable,toJS } from "mobx";
import Cookies from "js-cookie";
import mockGetJobs from "../Serivce/index.api";
import ApiStatusConstants from "../constants/ProfileStatus";
import ApiStatusOfJobs from "../constants/StatusJob";
import ProfileService from "../Serivce";
import BidonSuccess from "../utils/BidonSuccess";
import Profile from "./model";


type jobsListData = {
  company_logo_url: string;
  id: string;
  employment_type: string;
  job_description: string;
  location: string;
  package_per_annum: string;
  rating: string;
  title: string;

}
export type profileDataList = {
  profile_details: any;
  name: string,
  profile_image_url: string,
  short_bio: string
  
}
type api = {
  apiStatus: string
  apiJobs: string
}

class jobsListStore {
 
  jobsList: jobsListData[] = [];
  profileData = {} as Profile
  searchInput: string = '';
  activeJobPackage: string = '';
  apiStatus = ApiStatusConstants.initial;
  apiJobs = ApiStatusOfJobs.initial;
  activeJobType: jobsListStore[] = [];
  checkedBox: boolean | undefined;
  updatedjob: any[] = []
 
  
  profileService: ProfileService;


  constructor(profileService:ProfileService) {
    makeAutoObservable(this)
    this.profileService =profileService
  }
  setApiStatus(value: string) {
    this.apiStatus = value;
  }
  setApiJobs(value: string) {
    this.apiJobs = value;
  }
  setJobPackage(data: string) {
    this.activeJobPackage = data
  }
  setJobsList(data: jobsListData[]) {
    this.jobsList = data;

  }
  setProfileData(data: profileDataList) {
    this.profileData = data
  }
  setSearchValue(value: string) {
    this.searchInput = value;
   
  }
  
  getFullData = async () => {
    console.log("Gte the profile details")
    console.log(this.activeJobType, "activeJOb")
    console.log(this.activeJobPackage, "activeJobPackage")
    console.log(this.searchInput, "searchInput")
    this.setApiJobs(ApiStatusConstants.inProgress)


    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${this.activeJobType.join()}&minimum_package=${this.activeJobPackage}&search=${this.searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(apiUrl, options)

      if (response.ok === true) {
        console.log(response)
        const data = await response.json()
        console.log(data)
        const updatedFullJobs = data.jobs.map((eachItem: jobsListData) => ({
          company_logo_url: eachItem.company_logo_url,
          id: eachItem.id,
          employment_type: eachItem.employment_type,
          job_description: eachItem.job_description,
          location: eachItem.location,
          package_per_annum: eachItem.package_per_annum,
          rating: eachItem.rating,
          title: eachItem.title
        }))
        this.setJobsList(updatedFullJobs)
        this.setApiJobs(ApiStatusOfJobs.success)

      }
    }
    catch {
      this.setApiJobs(ApiStatusOfJobs.failure)
    }
  }
 
  async getData (){
      const jwtToken = Cookies.get('jwt_token')
     const response = this.profileService.getProfile()
     console.log(response,"store")
      BidonSuccess(response,this.onSuccess,this.onFailure)  
  } 
  onSuccess = (responseData : profileDataList)=>{
    console.log(responseData,"sdjldhhsdlka")
    const updatedData = new Profile(responseData)
    console.log(updatedData,"sdjldhhsdlka")
    this.setApiStatus(ApiStatusConstants.success)
    this.profileData =updatedData 
   
  }

  onFailure = ()=>{
    this.setApiStatus(ApiStatusConstants.failure)
  }
  onCheckedApp = (categoryId: string) => {
    const CheckId = this.updatedjob.includes(categoryId)
    if (!CheckId) {
      this.updatedjob.push(categoryId)
    }
    else {
      this.updatedjob = this.updatedjob.filter((item) => item !== categoryId)
    }
    console.log(this.updatedjob)
    this.activeJobType = this.updatedjob
    this.getFullData()

  }

}



export default jobsListStore;



