const Password = (props) =>{
    const{PropPassword,isShowButton,onDeleteApp} = props
    const{uniqueNo,website,username,password} = PropPassword
    console.log(isShowButton,'isShowButton')
    const passwordShow = isShowButton ? password : "*".repeat(password.length)
    const OnDelete = () =>{
        onDeleteApp(uniqueNo)
    }
   
    return(
        
        <div className="div1">
            <div className="logo">
                <div className="logo-circle">{username[0].toUpperCase()}</div>
            </div>
            <div className="div-content">
                <div className="user-name">
                    <h4>{website}</h4>
                    <h5>{username}</h5>
                    <p>{passwordShow}</p>
                    
                </div>
            </div>
            <div className='delete'>
                <img src='https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png ' onClick={OnDelete}/>
              </div>
        </div>
    )
}

export default Password