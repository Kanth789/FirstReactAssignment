import { BsFillStarFill } from "react-icons/bs";
import {BiGitRepoForked} from "react-icons/bi";
import {GoIssueOpened} from "react-icons/go";
const RepositoryItem = (props)=>{
    const{RepoItem} = props
    const{name,id,forks_count,image_Url,issues_count,stars_count} = RepoItem
    return(
        <div className="RepositoryItem-card">
            <div className="card-img">
                <img src={image_Url} alt="card-img"/>
            </div>
            <div className="card-title">
                <h3>{name}</h3>
                <div className="stars">
                    <BsFillStarFill className="star-icon"/>
                    <p>{stars_count} stars</p>
                </div>
                <div className="forks">
                <BiGitRepoForked className="fork-icon"/>
                 <p>{forks_count} forks</p>
                </div>
                <div className="issues">
                 <GoIssueOpened className="open-icon"/>
                 < p>{issues_count} open issues</p>
                </div>
            </div>
        </div>
    )
}
export default RepositoryItem