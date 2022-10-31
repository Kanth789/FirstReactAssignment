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
        description  :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
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
        projectTitle :"responsive webiste",
        projectUrl : ""
    },
    {
        id:1,
        categoryId:'project',
        title:'Static Website',
        courseTitle :'Static Website',
        description  :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        duration : "10days",
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
        projectTitle :"responsive webiste",
        projectUrl : ""
    },
    {
        id:1,
        categoryId:'course',
        title:'Static Website',
        courseTitle :'Static Website',
        description  :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        duration : "10days",
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
        projectTitle :"responsive webiste",
        projectUrl : ""
    },
    {
        id:1,
        categoryId:'course',
        duration : "10days",
        title:'10 DECEMBER 2020',
        courseTitle :'Static Website',
        description  :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
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
        projectTitle :"responsive webiste",
        projectUrl : ""
    },
    {
        id:1,
        categoryId:'project',
        title:'Static Website',
        courseTitle :'Static Website',
        description  :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        duration : "10days",
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
        projectTitle :"responsive webiste",
        projectUrl : ""
    },
    {
        id:1,
        categoryId:'course',
        title:'Static Website',
        courseTitle :'Static Website',
        description  :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        duration : "10days",
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
        projectTitle :"responsive webiste",
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
                        
                        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItems}>
                        
                        
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
