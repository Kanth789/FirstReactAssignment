import { profileDataList } from "../Stores/jobsListStore";

interface ProfileService {
    getProfile:(token:string)=>Promise<profileDataList | unknown>
}

export default ProfileService