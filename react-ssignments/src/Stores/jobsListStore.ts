import { makeAutoObservable } from "mobx";
import Cookies from "js-cookie";
const apiStatusOfJobs = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
 type jobsListData = {
  company_logo_url: string;
  id: string;
  employment_type: string;
  job_description: string;
  location: string;
  package_per_annum: string;
  rating: string;
  title:string;

}
type profileDataList = {
  
  name:string, 
  profile_image_url:string,
  short_bio:string

}
type api = {
  apiStatus:string
  apiJobs:string
}

class jobsListStore {
  jobsList: jobsListData[] = [];
  profileData = {} as profileDataList
  searchInput: string='';
  activeJobPackage: string='';
  apiStatus = apiStatusConstants.initial;
  apiJobs = apiStatusOfJobs.initial;
  activeJobType :jobsListStore[]=[];
  checkedBox:boolean | undefined;
  updatedjob: any[]  =[]

  constructor() {
    makeAutoObservable(this);
  }
  setApiStatus(value:string) {
    this.apiStatus = value;
  }
  setApiJobs(value:string) {
    this.apiJobs = value;
  }
  setJobPackage(data:string) {
    this.activeJobPackage = data
  }
  setJobsList(data: jobsListData[]) {
    this.jobsList = data;

  }
  setProfileData(data: profileDataList) {
    this.profileData = data
  }
  setSearchValue(value:string) {
    this.searchInput = value;
  }
  
  getFullData = async () => {
    console.log("Gte the profile details")
    console.log(this.activeJobType, "activeJOb")
    console.log(this.activeJobPackage, "activeJobPackage")
    console.log(this.searchInput, "searchInput")
    this.setApiStatus(apiStatusConstants.inProgress)


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
        const updatedFullJobs = data.jobs.map((eachItem:jobsListData) => ({
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
        this.setApiStatus(apiStatusConstants.success)

      }
    }
    catch {
      this.setApiStatus(apiStatusConstants.failure)
    }
  }
  getData = async () => {
    console.log("Gte the profile details")
    const apiUrl = "https://apis.ccbp.in/profile"
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
        const data = await response.json()

        const UpdatedProfileData = data.profile_details

        this.setProfileData(UpdatedProfileData)
        this.setApiJobs(apiStatusOfJobs.success)

      }
    }
    catch {
      this.setApiJobs(apiStatusOfJobs.success)
    }
  }

  renderProfileDetails = (renderLoadingView: { (): JSX.Element; (): any; }, renderFullViewProfile: { (): JSX.Element; (): any; }, renderFailureView: { (): JSX.Element; (): any; }) => {
    console.log(this.apiStatus)
    switch (this.apiStatus) {
      case apiStatusConstants.success:
        return renderFullViewProfile()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      default:
        return null
    }
  }

  renderJobProfiles = (renderLoadingView: { (): JSX.Element; (): any; }, lengthOfList: { (): JSX.Element; (): any; }, renderJobFailureView: { (): JSX.Element; (): any; }) => {

    console.log(this.apiJobs)
    switch (this.apiJobs) {

      case apiStatusOfJobs.success:

        return lengthOfList()
      case apiStatusOfJobs.failure:

        return renderJobFailureView()
      case apiStatusOfJobs.inProgress:
        return renderLoadingView()
      default:
        return null
    }
  }
   onCheckedApp = (categoryId:string) => {
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



export default new jobsListStore();