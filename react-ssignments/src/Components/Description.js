import ProfileStore from "../Store/ProfileStore"
import { observer } from "mobx-react"
import { makeAutoObservable, runInAction,autorun,observable, action,computed,reaction } from "mobx"
const Description = observer(()=>{
    const Profile = ProfileStore
    reaction(
        ()=>Profile.selectedValue,
        data=> Profile.setDesc(data)
    )
    return(
        <div>
             <h1>Description Component</h1>
        <p>{Profile.getDesc}</p>
        </div>
    )
})
export default Description