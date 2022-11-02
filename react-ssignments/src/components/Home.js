import Header from "./Header"
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './Home.css';
const Home = () =>{
    const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
    return(
        <>
        <Header/>
        <div className="main-conatiner">
        
        <div className="Home-conatiner">
            <div className="Home-content">
                <div className="heading">
                <h1>Find The Job That Fits Your Life</h1>
                </div>
                <div className="Home-para">
                    <p>Millions of people are searching for jobs,salary information, company reviews.Find the job that fits your abilities and potential</p>
                </div>
                <div>
                    <button>Find Jobs</button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Home