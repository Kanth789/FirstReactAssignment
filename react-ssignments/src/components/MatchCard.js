/* eslint-disable jsx-a11y/alt-text */
export const MatchCard = (props) =>{
    const {RecentDetailsprop} = props
    const {competing_team,competing_team_logo,match_status,result} = RecentDetailsprop
    
    return(
        <div className="match-card">
            <div className="match-card-img">
                <img src={competing_team_logo}/>
            </div>
            <div className="match-card-team-name">
                <h5>{competing_team}</h5>
            </div>
            <div className="match-card-team-result">
               <p>{result}</p>
            </div>
            <div className="match-card-winorloss">
            {match_status === 'Won' ?<h5 className="green" >{match_status}</h5>: <h5 className="red">{match_status}</h5>}
            </div>
        </div>
    )
}