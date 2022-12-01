import ProfileService from ".";
import { profileDataList } from "../Stores/jobsListStore";
import resloveTime from "../utils/resloveTime";
import profileJson from '../fixtures/getProfile.json'



class ProfileFixture  implements ProfileService{
    getProfile () : Promise<profileDataList>{
        console.log(profileJson,"ghvvvvvvvvvvvvvvvh")
        return resloveTime(profileJson)
    }
}

export default ProfileFixture




