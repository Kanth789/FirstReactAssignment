const Leftbar = (props) =>{
    const {leftbarLinks} = props
    const{uniqueId,name,icon} = leftbarLinks
    return(
       
            <div className="leftbar-link">
                
                <p>{name}</p>
            </div>
        
    )
}
export default Leftbar