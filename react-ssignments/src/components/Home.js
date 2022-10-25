import { HomeDeatils } from "./Home-deatils"
export const Home = () =>{
    const postDetails = [
        {
            post:"My first Post",
            date:"Aug 2nd",
            para:"A high quality solution beautifully designed for startups"
        },
        {
            post:"My second Post",
            date:"Aug 3rd",
            para:"A high quality solution beautifully designed for startups"
        },
        {
            post:"My third Post",
            date:"Aug 4th",
            para:"A high quality solution beautifully designed for startups"
        },
        {
            post:"My fourth Post",
            date:"Aug 5th",
            para:"A high quality solution beautifully designed for startups"
        },
        {
            post:"My fifth Post",
            date:"Aug 6th",
            para:"A high quality solution beautifully designed for startups"
        }
    ]
    return(
        <>
    <div className="image-block">
        <div className="img">
        <img src="https://assets.ccbp.in/frontend/react-js/profile-img.png " alt="profile"></img>
        </div>
        <div className="img-name">
            <h4>Warden Warren</h4>
        </div>
        <div className="imgblock-para">
            <h6>Software developer at UK</h6>
        </div>
    </div>
    <div className="home-content">
        {postDetails.map(eachItem =>(<HomeDeatils postDetails={eachItem}/>))}
    </div>
   
    </>
    )
}