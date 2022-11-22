import ProfileStore from "../Store/ProfileStore"
import { observer } from "mobx-react"
import { useEffect } from "react"
import {useTranslation,Trans} from 'react-i18next'
import { makeAutoObservable, runInAction,autorun,observable, action,computed,reaction } from "mobx"
const Description = observer(()=>{
    const {t} = useTranslation()
    const Description = t('Description',{returnObjects:true})
    const Profile = ProfileStore
   
    useEffect(()=>{
        Profile.setDesc(Description)
    })
   
    return(
        <div>
             <Trans i18nKey="description"></Trans>
           
        <p>{Profile.getDesc}</p>
        </div>
    )
})
export default Description
