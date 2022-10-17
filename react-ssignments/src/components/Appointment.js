import { format } from "date-fns"

const Appointemnt = (props) =>{
    const {AppointemntDetails,isStarButtonClicked} = props
    const{unqiueNo,title,date,isStarred} = AppointemntDetails
    
    const Onclicked = () =>{
        isStarButtonClicked(unqiueNo)
    }
    
    const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    :'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    return(
       
        
        <div className="div1">
           <div className="part1">
            <div className="title-heading">
                <h5>{title}</h5>
            </div>
            <div className="star">
                <button type="button" className="star-icon" onClick={Onclicked}>
                    <img src={starImgUrl}></img>
                </button>
            </div>
            </div> 
            <div className="part2">
                <div className="fixed-date">
                    <h5>{format(new Date(),'dd/MMM/yyyy')}</h5>
                    <h5>{format(new Date(),'EEEE')}</h5>
                </div>
            </div>
        </div>
        
    )
}
export default Appointemnt