 const ErrorComponent = (props) =>{
    const {OnbuttonClicked} = props
    const Onbutton = ()=>{
        OnbuttonClicked()
    }
    return(
        <div className="error">
            <h4>Error failed to fetch</h4>
            <button onClick={Onbutton} >TRY AGAIN</button>
        </div>
    )
}
export default ErrorComponent