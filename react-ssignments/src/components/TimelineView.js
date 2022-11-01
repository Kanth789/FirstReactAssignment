import { Component } from "react";
import CourseTimelineCard from "./CourseTimelineCard";
import ProjectTimelineCard from "./ProjectTimelineCard";
import {Chrono} from 'react-chrono'
const timelineItems =[
    {
        id:1,
        categoryId:'course',
        duration : "10days",
        title:'10 DECEMBER 2020',
        courseTitle :'Static Website',
        description  :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
        projectTitle: "Tourist Website",
        tagsList : [
                        {
                          id:1,
                          tagItem:'HTML Elements'
                        },
                        {
                            id:2,
                            tagItem:' Elements'
                        },
                        {
                            id:3,
                            tagItem:'css '
                        },
                        {
                            id:4,
                            tagItem:'javascript '
                        },
                        {
                            id:5,
                            tagItem:'CCBP'
                        }
                ],
        imageUrl:"https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&w=300",
        projectUrl : ""
    },
    {
        id:1,
        categoryId:'project',
        title:'10 DECEMBER 2020',
        courseTitle :'Static Website',
        description  :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
        duration : "10days",
        projectTitle: "Tourist Website",
        tagsList : [
                        {
                          id:1,
                          tagItem:'HTML Elements'
                        },
                        {
                            id:2,
                            tagItem:' Elements'
                        },
                        {
                            id:3,
                            tagItem:'css '
                        },
                        {
                            id:4,
                            tagItem:'javascript '
                        },
                        {
                            id:5,
                            tagItem:'CCBP'
                        }
                ],
        imageUrl:"https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&w=300",
        
        projectUrl : ""
    },
    {
        id:1,
        categoryId:'course',
        title:'10 DECEMBER 2020',
        courseTitle :'Static Website',
        description  :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
        duration : "10days",
        projectTitle: "Tourist Website",
        tagsList : [
                        {
                          id:1,
                          tagItem:'HTML Elements'
                        },
                        {
                            id:2,
                            tagItem:' Elements'
                        },
                        {
                            id:3,
                            tagItem:'css '
                        },
                        {
                            id:4,
                            tagItem:'javascript '
                        },
                        {
                            id:5,
                            tagItem:'CCBP'
                        }
                ],
        imageUrl:"https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&w=300",
      
        projectUrl : ""
    },
    {
        id:1,
        categoryId:'course',
        duration : "10days",
        title:'10 DECEMBER 2020',
        courseTitle :'Static Website',
        description  :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
        projectTitle: "Tourist Website",
        tagsList : [
                        {
                          id:1,
                          tagItem:'HTML Elements'
                        },
                        {
                            id:2,
                            tagItem:' Elements'
                        },
                        {
                            id:3,
                            tagItem:'css '
                        },
                        {
                            id:4,
                            tagItem:'javascript '
                        },
                        {
                            id:5,
                            tagItem:'CCBP'
                        }
                ],
        imageUrl:"https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&w=300",
       
        projectUrl : ""
    },
    {
        id:1,
        categoryId:'project',
        title:'10 DECEMBER 2020',
        courseTitle :'Static Website',
        description  :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
        duration : "10days",
        projectTitle: "Tourist Website",
        tagsList : [
                        {
                          id:1,
                          tagItem:'HTML Elements'
                        },
                        {
                            id:2,
                            tagItem:' Elements'
                        },
                        {
                            id:3,
                            tagItem:'css '
                        },
                        {
                            id:4,
                            tagItem:'javascript '
                        },
                        {
                            id:5,
                            tagItem:'CCBP'
                        }
                ],
        imageUrl:"https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&w=300",
      
        projectUrl : ""
    },
    {
        id:1,
        categoryId:'course',
        title:'10 DECEMBER 2020',
        courseTitle :'Static Website',
        description  :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, .",
        duration : "10days",
        projectTitle: "Tourist Website",
        tagsList : [
                        {
                          id:1,
                          tagItem:'HTML Elements'
                        },
                        {
                            id:2,
                            tagItem:' Elements'
                        },
                        {
                            id:3,
                            tagItem:'css '
                        },
                        {
                            id:4,
                            tagItem:'javascript '
                        },
                        {
                            id:5,
                            tagItem:'CCBP'
                        }
                ],
        imageUrl:"https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&w=300",
       
        projectUrl : ""
    },
    
]
class TimelineView extends Component{
    render(){
        return(
            <div className="main-conatiner">
                <div className="main">
                    <div className="header">
                        <h6>MY JOURNEY OF</h6>
                        <h2>CCBP 4.0</h2>
                    </div>
                   
                    <div className="cards-conatiner">
                        
                        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItems} theme={{  
    secondary: "white",  
  }}>
                        
                        
                         {
                            timelineItems.map(eachItem => {
                                if(eachItem.categoryId === "course")
                                {
                                       return <CourseTimelineCard courseCard={eachItem} key={eachItem.id}/>
                                }else{
                                return <ProjectTimelineCard courseCard={eachItem} key={eachItem.id}/>
                                }
                            })
                        
                        }
                    
                        
                        
                          
                          
                          </Chrono>
                     
                       
                    </div>
                   
                </div>
            </div>
        )
    }
}


export default TimelineView
