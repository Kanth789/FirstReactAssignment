import { Component } from "react";
import { TailSpin } from 'react-loader-spinner'
import { TeamCard } from "./TeamCard";
import ErrorComponent from "./ErrorComponent";
import { Notfound } from "./Notfound";
export class Home extends Component{
    state = {
        teamsData : [],
        isLoading: true,
        view : 'Loading'


    }
    componentDidMount(){
        this.renderTeamCards()
    }

    renderTeamCards = async()=>{
        try{
        const response = await fetch('https://apis.ccbp.in/ipl')
        const data = await response.json()
        const teams = data.teams
    
        const updatedData = teams.map(eachItem =>({
            id: eachItem.id,
            name:eachItem.name,
            team_Img:eachItem.team_image_url,
        }))
        
        this.setState({teamsData:updatedData,isLoading:false,view:"success"})
    }
    catch(error)
    {
        const {isLoading} = this.state
      this.setState({isLoading:false,view:"failure"})
      
    }
}
OnbuttonClicked = ()=>{
    this.renderTeamCards()
} 
    
   
    render(){

        const {teamsData,isLoading,view} = this.state
        return(
            <div className="main-conatiner">
                <div className="main">
                    <div className="header">
                        <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "/>
                        <h2>IPL Dashboard</h2>
                    </div>
                    <div className="list-Conatiner">
                        { 
                        view === "success" ? (teamsData.map(eachItem =>(<TeamCard teamsData={eachItem} key={eachItem.id}/>))):view === "failure" ? (<ErrorComponent OnbuttonClicked={this.OnbuttonClicked}/>): (<TailSpin
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            />)
                    }
                    </div>
                </div>
            </div>
        )
    }
}