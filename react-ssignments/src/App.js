import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {v4 as uuidv4} from 'uuid'
import Comments from './components/Comments';
const InitialCommentList = []
class App extends  Component{
  state = {
    commentList : InitialCommentList,
    name:'',
    comment:''
    
  }
  onAddComment = (event) =>{
    
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      uniqueid: uuidv4(),
      name,
      comment,
      isLiked: false,
      onclickdate:new Date(),
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      
    }))
  }
  isLikedButtonClicked = (uniqueid) =>{
    this.setState((prevState)=>({commentList:prevState.commentList.map(eachComment =>
      {
        console.log(eachComment,uniqueid)
        if(uniqueid === eachComment.uniqueid)
        {
            return {...eachComment, isLiked: !eachComment.isLiked}
        }
        else{
          return eachComment
        }
      }    
    )
  }
))}

isDeleteButtonClicked = (uniqueid) =>{
  const {commentList} = this.state
  const filterData = commentList.filter(eachComment =>eachComment.uniqueid !== uniqueid)
  this.setState({commentList:filterData})
}
  onChangeName = (event) =>{
    this.setState({name:event.target.value})
  }
  onChangeComment = (event) =>{
    this.setState({comment:event.target.value})
  }
  render(){
    const {name, comment, commentList} = this.state
    return(
      <div className='main-conatiner'>
        <div className='main'>
          <div className='header'>
            <h3 className='heading'>Comments</h3>
          </div>
          <div className='caption'>
            <p className='captionPara'>Say something about 4.0 Technologies</p>
          </div>
          <div className='form-conatiner'>
          <form className="contact-form-container" onSubmit={this.onAddComment}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <textarea
              className="input"
              value={comment}
              onChange={this.onChangeComment}
              placeholder="Enter the Comment"
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <div className='main-image'>
            <img src='https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png '></img>
          </div>
          </div>
          <hr></hr>
          <div className='counting-comment'>
            <div className='count'><span>{commentList.length}</span></div>
            <div className='counttext'><p>Comments</p></div>
          </div>
          <div className='comment-conatiner'>
            <div className='comment-main'>
             {commentList.map(eachComment =>(<Comments key={eachComment.uniqueid} commentDetails={eachComment} isLikedButtonClicked={this.isLikedButtonClicked} isDeleteButtonClicked={this.isDeleteButtonClicked}/>))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
