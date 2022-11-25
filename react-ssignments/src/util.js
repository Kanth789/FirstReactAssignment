import jobsListStore from "./Stores/jobsListStore";
import Cookies from "js-cookie";


const FetchFullData = async (jwt_token,searchInput,onSucess,onFailure) => {
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
      const data = await response.json()

      const updatedFullJobs = data.jobs.map((eachItem) => ({
        company_logo_url: eachItem.company_logo_url,
        id: eachItem.id,
        employment_type: eachItem.employment_type,
        job_description: eachItem.job_description,
        location: eachItem.location,
        package_per_annum: eachItem.package_per_annum,
        rating: eachItem.rating,
        title: eachItem.title
      }))

     
     return onSucess(updatedFullJobs)

    }
  }
  catch {
    onFailure()
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
module.exports = FetchFullData;


const AlljobData = {
  company_logo_url:"https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.pn",
  id:"2b40029d-e5a5-48cc-84a6-b6e12d25625d",
  employment_type:"Freelance",
  job_description:"The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment", 
  location:"Delhi",
  rating:4, 
  title:"Frontend Engineer",
  package_per_annum: "10 LPA"
  }

const MoKData = (onSucess)=>{
  onSucess(AlljobData)
}

module.exports = MoKData