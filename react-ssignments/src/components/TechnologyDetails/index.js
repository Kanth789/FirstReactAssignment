const TechnologyDetails = (props) =>{
    const {technology} = props

    return(
        
        <div className={technology.className}>
    
       
        <div className="div1">
            <div className="one">
                <h4>{technology.heading}</h4>
            </div>
            <div className="tow">
                <p>{technology.Para}</p>
            </div>
            <div className="Three">
                <img src={technology.imgUrl}></img>
            </div>
        </div>    
        </div>
   
   
    
    
    )
}
export default TechnologyDetails