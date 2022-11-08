const Leftbar = (props) =>{
    const {leftbarLinks} = props
    const{name} = leftbarLinks
   
    return(
       
            <div className="leftbar-link">
                
                <p>{name}</p>
            </div>
        
    )
}
export default Leftbar