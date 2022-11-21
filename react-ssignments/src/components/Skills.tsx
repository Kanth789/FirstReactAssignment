type SkillsTypes = {
    skills : {
        image_url:string
        name:string
    }
   
  }
const Skills =(props:SkillsTypes)=>{
    
    
    return(

                <div className="skill-icons">
                    <div className="icon">
                        <img src={props.skills.image_url}/>
                        <p>{props.skills.name}</p>
                    </div>
                </div>
         
    )
}
export default Skills