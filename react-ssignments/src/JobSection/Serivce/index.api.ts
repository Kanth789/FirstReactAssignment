import Cookies from "js-cookie";
import ProfileService from ".";
import { profileDataList } from "../Stores/jobsListStore";
import responseApi from "../utils/ResponseApi";
class ProfileApi implements ProfileService{
   async getProfile (): Promise<profileDataList | unknown>{
    const jwtToken = Cookies.get('jwt_token')
    const response = await fetch('https://apis.ccbp.in/profile',{
        headers:{
             Authorization: `Bearer ${jwtToken}` 

        },
        method:'GET'
    });
    console.log(response,"util")
   return responseApi(response)
   
   }
}
export default ProfileApi