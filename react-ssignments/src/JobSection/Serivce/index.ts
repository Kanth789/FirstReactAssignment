import { profileDataList } from "../Stores/jobsListStore";

interface ProfileService {
    getProfile:()=>Promise<profileDataList | unknown>
}

export default ProfileService