export const LatestMatch = (props) =>{
    const {latestDetailsprop} = props
    const {competing_team,competing_team_logo,date,first_innings,latestId,man_of_the_match,match_status,result,second_innings,umpires,venue} = latestDetailsprop    
    return(
        <div className="Latest-matches-div">
            <div className="part1">
                <h4>{competing_team}</h4>
                <h6>{date}</h6>
                <p>{venue}</p>
                <p>{result}</p>
            </div>
            <div className="part2">
                <img src={competing_team_logo} alt="team-logo"/>
            </div>
            <div className="part3">
                <h5>First Innings</h5>
                <p>{first_innings}</p>
                <h5>Second Innings</h5>
                <p>{second_innings}</p>
                <h5>Man Of The Match</h5>
                <p>{man_of_the_match}</p>
                <h5>Umpires</h5>
                <p>{umpires}</p>
            </div>
        </div>
    )
}