import { Link } from 'react-router-dom'

export const HomeDeatils = (props) =>{
    const{blogsData} = props
    const{title,imageUrl,avatarUrl,author,topic,id} = blogsData
    return(
        <Link to={`/blogs/${id}`} className="item-link">
        <div className="div-1">
            <div className="part1">
                <img src={imageUrl}/>
            </div>
            <div className="part2">
                <p>{title}</p>
                <h5>{topic}</h5>
                <div className="avatar">
                    <img src={avatarUrl}/>
                    <h6>{author}</h6>
                </div>
            </div>
        </div>
        <hr></hr>
        </Link>
    )
}