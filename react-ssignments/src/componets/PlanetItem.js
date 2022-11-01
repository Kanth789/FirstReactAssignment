import { Component } from "react";
import PlanetsSlider from "./PlanetsSlider";
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PlanetList =[
    {
        uniqueNo:1,
        imgUrl:"https://cdn.pixabay.com/photo/2011/12/13/14/28/earth-11009__340.jpg",
        title:"Earth",
        Para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
    },
    {
        uniqueNo:2,
        imgUrl:"https://cdn.pixabay.com/photo/2011/12/13/14/30/mars-11012__340.jpg",
        title:"Mars",
        Para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
    },
    {
        uniqueNo:3,
        imgUrl:"https://cdn.pixabay.com/photo/2017/04/04/14/26/pluto-2201446__340.png",
        title:"Pluto",
        Para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
    },
    {
        uniqueNo:4,
        imgUrl:"https://cdn.pixabay.com/photo/2012/04/10/17/38/saturn-26618__340.png",
        title:"Saturn",
        Para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
    },
    {
        uniqueNo:5,
        imgUrl:"https://t4.ftcdn.net/jpg/03/15/10/39/240_F_315103961_zSmHxPA9SpfEHwWRLTwVOP4xLBQblh8b.jpg",
        title:"Neptune",
        Para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
    }
]
class PlanetItem extends Component{
    render(){
        const settings = {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        return(
            <div className="silder-conatiner">
                <div className="header">
                    <h2>PLANETS</h2>
                </div>
                <div className="card-conatiner">
                 <Slider {...settings}>
                    {PlanetList.map(eachItem=>(<PlanetsSlider PlaneData={eachItem} key={eachItem.uniqueNo}/>))}
                    </Slider>
                </div>
                
            </div>
        )
    }
}
export default PlanetItem