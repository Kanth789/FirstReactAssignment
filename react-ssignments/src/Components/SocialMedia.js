const SocialMedia = (props) =>{
    const{leftbarLinks} = props
    const{altName,imgUrl} = leftbarLinks
    return(
        
                  
                  <div className="socail-media-link">
                    <div className="icon">
                      <img src={imgUrl} alt={altName}/>
                    </div>
                    
                  </div>
              
    )
}
export default SocialMedia