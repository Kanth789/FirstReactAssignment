import ProfileStore from "../Store/ProfileStore"
import { observer } from "mobx-react"
import { useEffect } from "react"
import { makeAutoObservable, runInAction,autorun,observable, action,computed,reaction } from "mobx"
const Namecomponent = observer(()=>{
    const Profile = ProfileStore
    reaction(
          ()=>Profile.selectedValue,
          data=> Profile.setName(data)
      )
      useEffect(()=>{
        Profile.selectedValue="Kiran"
    },[])
    return(
        <div>
            <h1>Title Component</h1>
            <p>{Profile.getName}</p>
        </div>
    )
})
export default Namecomponent