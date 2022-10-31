import { Component } from "react";
import Cookies from'js-cookie';
import { TailSpin } from 'react-loader-spinner';
import VaccinationCoverage from "./VaccinationCoverage";
import VaccinationByGender from "./VaccinationByGender";
import VaccinationByAge from "./VaccinationByAge";
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }
class CowinDashboard extends Component{
    state={
        stateVaccinationCoverageData:[],
        stateVaccinationByGenderData:[],
        stateVaccinationByAge:[],
        apiStatus: apiStatusConstants.initial,
    }
    componentDidMount(){
        this.getDetails()
    }
    getDetails = async()=>{
        const{stateVaccinationCoverageData,stateVaccinationByGenderData,stateVaccinationByAge,apiStatus} = this.state
        const apiUrl="https://apis.ccbp.in/covid-vaccination-data"
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
            console.log(data)
            const UpdatedVaccinationCoverage= data.last_7_days_vaccination.map(
                eachItem => ({
                    dose_1:eachItem.dose_1,
                    dose_2:eachItem.dose_2,
                    vaccine_date:eachItem.vaccine_date
                })
              )
              const UpdatedVaccinationByGender= data.vaccination_by_age.map(
                eachItem => ({
                    age:eachItem.age,
                    count:eachItem.count,
                    
                })
              )
              const UpadtedVaccinationByAge= data.vaccination_by_gender.map(
                eachItem => ({
                    
                    count:eachItem.count,
                    gender:eachItem.gender
                    
                })
              )
            this.setState({stateVaccinationCoverageData:UpdatedVaccinationCoverage,stateVaccinationByGenderData:UpdatedVaccinationByGender,stateVaccinationByAge:UpadtedVaccinationByAge, apiStatus: apiStatusConstants.success})
            
           
        }
        else {
          this.setState({
            apiStatus: apiStatusConstants.failure,
          })
        }
    }
    renderFailureView = () => (
        <div className="products-error-view-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
            alt="products failure"
            className="products-failure-img"
          />
          <h1 className="product-failure-heading-text">
            Oops! Something Went Wrong
          </h1>
          <p className="products-failure-description">
            We are having some trouble processing your request. Please try again.
          </p>
        </div>
      )
      renderLoadingView = () => (
        <div className="products-loader-container">
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
      renderDataList =()=>{
        return(
            <div className="main-conatiner">
                <div className="main">
                    <div className="header">
                        <img src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"/>
                        <h4>co-WIN</h4>
                    </div>
                    <div className="heading">
                        <h3>coWIN Vaccination in India</h3>
                    </div>
                    <div className="vaccination-coverage"></div>
                </div>
            </div>
        )
      }
      renderAllItem = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderDataList()
          case apiStatusConstants.failure:
            return this.renderFailureView()
          case apiStatusConstants.inProgress:
            return this.renderLoadingView()
          default:
            return null
        }
      }
    render(){
        const{stateVaccinationCoverageData,stateVaccinationByGenderData,stateVaccinationByAge,apiStatus} = this.state
        return(
            <div className="main-conatiner">
                <div className="main">
                    <div className="header">
                        <img src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png" alt="header-img"/>
                        <h4>co-WIN</h4>
                    </div>
                    <div className="heading">
                        <h3>coWIN Vaccination in India</h3>
                    </div>
                    <div className="vaccination-coverage">
                        <h3>VaccinationCoverage</h3>
                        <VaccinationCoverage VaccinationCoverage = {stateVaccinationCoverageData}/>
                    </div>
                    <div className="vaccination-ByGender">
                    <h3>VaccinationByGender</h3>
                        <VaccinationByGender  VaccinationByGender ={stateVaccinationByGenderData}/>
                    </div>
                    <div className="vaccination-ByAge">
                            <h3>VaccinationByAge</h3>
                        <VaccinationByAge  VaccinationByAge={stateVaccinationByAge}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default CowinDashboard