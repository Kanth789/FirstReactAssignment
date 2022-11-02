
import { Link } from "react-router-dom";
import './Alljobs.css';
const Alljobs =(props)=>{
    const {jobData} = props
    const{company_logo_url,id,employment_type,job_description, location,package_per_annum,rating, title} = jobData
    return(
        <Link to={`/jobs/${id}`} className="nav-link">
        <div className="card">
            <div className="card-img-header">
                <div className="card-img">
                    <img src={company_logo_url}/>
                </div>
                <div className="card-header">
                    <h4>{title}</h4>
                    <div className="card-header-rating">
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
            <div className="card-icons">
                <div className="card-location-work">
                <div className="location">
                    <p>{location}</p>
                </div>
                <div className="work">
                    <p>{employment_type}</p>
                </div>
                </div>
                <div className="card-salary">
                   <p>{package_per_annum}</p>
                </div>
            </div>
            <hr></hr>
            <h4>Description</h4>
            <p>{job_description}</p>
        </div>
        </Link>
    )
}
export default Alljobs