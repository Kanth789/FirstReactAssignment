import { Component } from "react"
import Loader from 'react-loader-spinner'
import { HomeDeatils } from "./HomeDetails"
import { TailSpin } from 'react-loader-spinner'
    
   export class  Home extends Component {
    state ={
        blogsData:[],
        isLoading: true
    }
        componentDidMount(){
            this.getBlogsData()
        }
        getBlogsData = async()=>{
            const response = await fetch('https://apis.ccbp.in/blogs')
            const data = await response.json()
            const updatedData = data.map(eachItem=>({
                id:eachItem.id,
                title:eachItem.title,
                imageUrl:eachItem.image_url,
                avatarUrl:eachItem.avatar_url,
                author:eachItem.author,
                topic:eachItem.topic,
            }))
            this.setState({blogsData:updatedData, isLoading: false})
        }
        render(){
            const {blogsData} = this.state
            const {isLoading} = this.state
        return(
        <>
        <div className="image-block">
            <div className="img">
            <img src="https://assets.ccbp.in/frontend/react-js/profile-img.png " alt="profile"></img>
            </div>
            <div className="img-name">
                <h4>Warden Warren</h4>
            </div>
            <div className="imgblock-para">
                <h6>Software developer at UK</h6>
            </div>
        </div>
        <div className="home-content">
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
            :(blogsData.map(eachItem =>(<HomeDeatils blogsData={eachItem} key={eachItem.id}/>)))
            }
            </div>
    
    </>
    )
        }
}


