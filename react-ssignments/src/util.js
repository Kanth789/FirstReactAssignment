import jobsListStore from "./Stores/jobsListStore";
import Cookies from "js-cookie";


const getData = async () => {
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
      this.setApiJobs(jobsListStore.apiStatusOfJobs.success)

    }
  }
  catch {
    this.setApiJobs(jobsListStore.apiStatusOfJobs.success)
  }
}

module.exports = getData;


const JobTypes =[
  {
    name: "Full Time",
    categoryId: "FULLTIME",
    checked: false
  },
  {
    name: "Part Time",
    categoryId: "PARTTIME",
    checked: false
  },
  {
    name: "Freelance",
    categoryId: "FREELANCE",
    checked: false
  },
  {
    "name": "Internship",
    categoryId: "INTERNSHIP",
    checked: false
  }

]

module.exports = JobTypes;