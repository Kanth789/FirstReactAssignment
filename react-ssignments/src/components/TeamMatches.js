/* eslint-disable jsx-a11y/alt-text */
import { Component } from "react";
import { TailSpin } from 'react-loader-spinner'
import { TeamMatchFuntcional } from "./TeamMatchFuntcional";
import { LatestMatch } from "./LatestMatch";
import { MatchCard } from "./MatchCard";
export class TeamMatches extends Component{
    state = {
        matchDetails:{},
        latestDetails:{},
        RecentDetails:{},
        isLoading:true
    }
    componentDidMount() {
        this.getMatchDetails()
      }
    
      getMatchDetails = async () => {
        const {id} = this.props
        console.log(id.id)
        const response = await fetch(`https://apis.ccbp.in/ipl/${id.id}`)
        const data = await response.json()
        console.log(data)
        const latestData = data.latest_match_details
        const recentData = data.recent_matches
        console.log(recentData)
        const updatedData = {
         
          imageUrl: data.team_banner_url,
         
        
         updatedlatestDetails : {
            competing_team :latestData.competing_team,
            competing_team_logo:latestData.competing_team_logo,
            date:latestData.date,
            first_innings:latestData.first_innings,
            id : latestData.id,
            man_of_the_match : latestData.man_of_the_match,
            match_status:latestData.match_status,
            result:latestData.result,
            second_innings:latestData.second_innings,
            umpires:latestData.umpires,
            venue:latestData.venue
        },

         updatedRecentDetails : recentData.map(eachItem => ({
            competing_team :eachItem.competing_team,
            competing_team_logo:eachItem.competing_team_logo,
            date:eachItem.date,
            first_innings:eachItem.first_innings,
            id : eachItem.id,
            man_of_the_match : eachItem.man_of_the_match,
            match_status:eachItem.match_status,
            result:eachItem.result,
            second_innings:eachItem.second_innings,
            umpires:eachItem.umpires,
            venue:eachItem.venue
        })),
    }
        this.setState({ matchDetails: updatedData,  isLoading: false })
        
      }
    
    renderMatchDetailsData = ()=>{
        const {matchDetails} = this.state
        const {updatedlatestDetails} = matchDetails
        return(
            <div className="main">
            <div className="banner">
                <img src={matchDetails.imageUrl}/>
            </div>
            <LatestMatch latestDetailsprop={updatedlatestDetails} />
            {this.renderRecentMatchesList()}
            </div>
        )

    }
    renderRecentMatchesList =()=>{
        const {matchDetails} = this.state
        const {updatedRecentDetails} = matchDetails
        return(
            <div className="recent-matches">
                {updatedRecentDetails.map(eachItem=>(
                <MatchCard RecentDetailsprop={eachItem} key={eachItem.id}/>))}
                
            </div>
        )
    }
    render(){
        const {matchDetails,isLoading} = this.state
        return(
            <div className="Match-Details-Conatiner">
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
            this.renderMatchDetailsData() 
        }
            </div>
        )
    }
}