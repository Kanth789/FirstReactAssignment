import { Component } from "react";
import LanguageFiltersData from "./LanguageFilterItem";
import RepositoryItem from "./RepositoryItem";
import {ProgressBar} from "react-loader-spinner"

const languageList = [
    {
        id :"All",
        language:'All'
    },
    {
        id :"Javscript",
        language:'Javscript'
    },
    {
        id :"Ruby",
        language:'Ruby'
    },
    {
        id :"Java",
        language:'Java'
    },
    {
        id :"CSS",
        language:'CSS'
    }

]

class GithubPopularRepos extends Component{
    state={
        statelanguageDetails:[],
        activeDiv : languageList[0].language,
        isLoading:true
    }
    componentDidMount(){
        this.getLanguages()
    }
    getLanguages = async()=>{
        const{activeDiv}= this.state
        console.log(activeDiv)
        const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeDiv}`
        console.log(apiUrl)
        const response = await fetch(apiUrl)
        if(response.ok === true)
        {
            const data = await response.json()
            const updatedLanguage = data.popular_repos.map(eachItem=>({
                name:eachItem.name ,
                forks_count:eachItem.forks_count ,
                id:eachItem.id,
                image_Url:eachItem.avatar_url,
                issues_count:eachItem.issues_count,
                stars_count:eachItem.stars_count,
            }))
            this.setState({statelanguageDetails:updatedLanguage,isLoading:false})
           
        }
        
    }
    OnLanguageSend = (language) =>{
        const{activeDiv}=this.state
        this.setState({activeDiv:language},
        this.getLanguages)
        
    }
    renderLoading = ()=>{
        <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/>
    }
    renderlist = () =>{
        const{statelanguageDetails} = this.state
        return(
            
            <>
            {statelanguageDetails.map(eachItem=>(<RepositoryItem RepoItem={eachItem} key={eachItem.id} />))}
            </>
        )
    }
    render(){
        const{statelanguageDetails,isLoading} = this.state
        return(
            <div className="main-conatiner">
                <div className="main">
                    <div className="header">
                        <h2>Popular</h2>
                    </div>
                    <div className="nav-links">
                        {languageList.map(eachItem=>(<LanguageFiltersData key={eachItem.id} languageData = {eachItem} OnLanguageSend={this.OnLanguageSend}/>))}
                    </div>
                    <div className="repository">
                    {isLoading ? this.renderLoading():this.renderlist()}
                    </div>
                </div>
            </div>
        )
    }
}

export default GithubPopularRepos