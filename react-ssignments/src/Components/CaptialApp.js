const CaptialApp = (props) =>{
    const{CaptialList} = props
    const {uniqueNo,Country,Capital} = CaptialList
    return(
        
        <option value={Capital}>{Capital}</option>
        
     
    )
}
export default CaptialApp