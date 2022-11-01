const PlanetsSlider = (props)=>{
   const{PlaneData} = props
   const{imgUrl,title,Para} = PlaneData
    return(
        <div className="card">
            <div className="card-img">
                <img src={imgUrl} alt="planet-img"/>
            </div>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-para">
                <p>{Para}</p>
            </div>
        </div>
    )
}

export default PlanetsSlider