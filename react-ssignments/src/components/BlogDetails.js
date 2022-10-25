import { Component } from 'react'
import Loader from 'react-loader-spinner'
import { TailSpin } from 'react-loader-spinner'


export class BlogItemDetails extends Component {
  state = { blogsData: {}, isLoading: true }

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {id} = this.props
    console.log(id.id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id.id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      topic: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({ blogsData: updatedData, isLoading: false })
    
  }

  renderBlogItemDetails = () => {
    const{blogsData} = this.state
   
    const{title,imageUrl,avatarUrl,author,topic,id} = blogsData

    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{topic}</p>
      </div>
    )
  }

  render() {
    const { isLoading } = this.state
   
    return (
      <div className="blog-container">
        {isLoading ? (<TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />)
          
         : 
          

            this.renderBlogItemDetails() 
        }
      </div>
    )
  }
}
