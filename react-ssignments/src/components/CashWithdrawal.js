const CashWithdrawal = (props) =>{
    const {CashList,OnclickedApp} = props
    const {uniqueNo,number} = CashList
    const Onclicked = () =>{
        OnclickedApp(number)
    }
    return(
        <div className='button'>
        <button onClick={Onclicked}>{number}</button>
        
        </div>
    )
}
export default CashWithdrawal