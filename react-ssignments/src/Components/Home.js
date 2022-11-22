import ProfileStore from "../Store/ProfileStore"
import { observer } from "mobx-react"
import Namecomponent from "./Namecomponent"
import Description from "./Description"
import i18n from "i18next";
const lngs = {
    en:{
      nativeName:'English'
    },
    te:{
      nativeName:'Telugu'
    }
  };
  const array = [
    {
        id: "1",
        name: "Kiran"
    },
    {
        id: "2",
        name: "Sandeep"
    },
    {
        id: "3",
        name: "Ritesh"
    },
    {
        id: "4",
        name: "Nokhalal"
    },
  ]
const Home = observer(()=>{
    const Profile = ProfileStore
    
    const onChange = (event) =>{
      Profile.onSearchInput(event.target.value)
    }
    return(
        <div className="Main-conatiner">
            <div>
        {Object.keys(lngs).map((lng)=>(
          <button type='submit' key={lng} onClick={()=> i18n.changeLanguage(lng)} disabled={i18n.reslovedLanguage === lng}>{lngs[lng].nativeName}</button>
        ))}
      </div>
           <label >Choose a User:</label>

            <select name="users"  onChange={onChange} >
                {array.map(item=>{
          return  <option value={item.id} id="1">{item.name}</option>

                })}
           
            </select> 
           
            <Namecomponent/>
            <Description/>
        </div>
        
    )
})
export default Home