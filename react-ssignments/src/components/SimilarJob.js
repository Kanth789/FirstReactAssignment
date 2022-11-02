const SimilarJob = (props) =>{
    const {similarData} = props
    const{company_logo_url,id,employment_type,job_description, location,package_per_annum,rating, title} = similarData
    return(
        <div className="smiliar-card">
            <div className="similar-card-header">
                <div className="similar">
                    <img src={company_logo_url}/>
                </div>
                <div className="similar-heading">
                    <h4>{title}</h4>
                    <div className="rating">
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
            <div className="similar-content">
                <h3>Description</h3>
                <p>{job_description}</p>
                <div className="similar-icons">
                    <div className="location">
                        <p>{location}</p>
                    </div>
                    <div className="work">
                        <p>{employment_type}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SimilarJob