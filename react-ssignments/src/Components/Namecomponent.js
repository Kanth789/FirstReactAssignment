import ProfileStore from "../Store/ProfileStore"
import { observer } from "mobx-react"
import { useEffect } from "react"
import {useTranslation,Trans} from 'react-i18next'

import { makeAutoObservable, runInAction,autorun,observable, action,computed,reaction } from "mobx"
const Namecomponent = observer(()=>{
    const {t} = useTranslation()
    const Title = t('Title',{returnObjects:true})
    const Profile = ProfileStore
    
      useEffect(()=>{
        Profile.setName(Title)
    })
  
 
    return(
        <div>
             <Trans i18nKey="title"></Trans>
            <p>{Profile.getName}</p>
        </div>
    )
})
export default Namecomponent


