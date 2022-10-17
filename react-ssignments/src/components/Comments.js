import getGivenDateDifference from "../utils/Dateutils";

const Comments = (props) =>{
    const{commentDetails,isLikedButtonClicked,isDeleteButtonClicked} = props
    const {uniqueid,name,comment,isLiked,onclickdate} = commentDetails
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    const starImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    const onClickLiked = () =>{
         isLikedButtonClicked(uniqueid)
    }
    const onDeleted = () =>{
        isDeleteButtonClicked(uniqueid)
    }
    const Differnce = () =>{
        return  getGivenDateDifference(current , onclickdate)
        
    }
    return(
        <>
         <div className='first-part'>
                <div className='user-profile'>
                    <div className="profile">k</div>
                </div>
                <div className='user-details'>
                  <div className='user-name'>
                    <h4 className='user-name'>{name}</h4>
                    <p className='user-time'>{Differnce()}</p>
                  </div>
                  <div className='user-comment'>
                    <p className='user-comment-para'>{comment}</p>
                  </div>
                </div>
              </div>
              <div className='second-part'>
                <div className="like">
                <button type="button" className="like-icon" onClick={onClickLiked}>
                    <img src={starImgUrl} alt="like" />
                    <p>Like</p>
                </button>
              </div>
              <div className="delete">
                <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" onClick={onDeleted}></img>
              </div>
              </div>
              </>
    )
}
export default Comments