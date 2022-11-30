import { profileDataList } from "../jobsListStore";

class Profile{
    name:string;
    profile_image_url:string;
    short_bio:string

    constructor(data:profileDataList){
        this.name = data.profile_details.name;
        this.profile_image_url = data.profile_details.profile_image_url;
        this.short_bio = data.profile_details.short_bio;

    }
}
export default Profile