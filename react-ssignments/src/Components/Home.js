import ProfileStore from "../Store/ProfileStore"
import { observer } from "mobx-react"
const Home = observer(()=>{
    const Profile = ProfileStore
    
    return(
        <div className="Main-conatiner">
           <label for="users">Choose a User:</label>

            <select name="users"  onChange={Profile.onSearchInput}>
            <option value="Kiran" id="bb95e51b-b1b2-4d97-bee4-1d5ec2b96751">Kiran</option>
            <option value="Sandeep" id= "d6019453-f864-4a2f-8230-6a9642a59466">Sandeep</option>
            <option value="Ritesh"  id="bb95e51b-b1b2-4d97-bee4-1d5ec2b96751">Ritesh</option>
            <option value="NK" id="d6019453-f864-4a2f-8230-6a9642a59466">NK</option>
            </select> 
        </div>
    )
})
export default Home