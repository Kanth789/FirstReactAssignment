import ProfileService from ".";
import { profileDataList } from "../Stores/jobsListStore";
import responseApi from "../utils/ResponseApi";
class ProfileApi implements ProfileService{
   async getProfile (token: string): Promise<profileDataList | unknown>{
    
    const response = await fetch('https://apis.ccbp.in/profile',{
        headers:{
             Authorization: `Bearer ${token}` 

        },
        method:'GET'
    });
   return responseApi(response)
   }
}
export default ProfileApi