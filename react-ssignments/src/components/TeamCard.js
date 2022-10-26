import { Link } from 'react-router-dom'

export const TeamCard = (props) =>{
    const {teamsData} = props
    const{id,name,team_Img} = teamsData
    console.log(id)
    return(
        <Link to={`/team-matches/${id}`} className="item-link">
        <div className="team-card">
            <div className="team-card-img">
                <img src={team_Img} alt="team-logo"/>
            </div>
            <div className="team-card-content">
                <h5>{name}</h5>
            </div>
        </div>
        </Link>
    )
}