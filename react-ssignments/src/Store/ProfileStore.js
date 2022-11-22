import { makeAutoObservable, runInAction,autorun,observable, action,computed,reaction } from "mobx"
import Cookies from "js-cookie";
import { withTranslation } from 'react-i18next';


class ProfileStore  {
    selectedValue="1"
    getName=""
    getDesc=""
    Description= ''
    Title=''
    
    constructor() {
        makeAutoObservable(this)
        
    }
    onSearchInput=(value)=>{
        this.selectedValue = value
        console.log(this.selectedValue,"updated")
        this.setDesc(this.Description)
        this.setName(this.Title)
        
    }

    setDesc(Description){ 
        this.Description = Description
      const DataName = this.Description.find(eachItem=>eachItem.id === this.selectedValue)
      this.getDesc = DataName.desc
    }
    
    setName(Title){
        this.Title = Title
        const DataName = this.Title.find(eachItem=>eachItem.id === this.selectedValue)
        this.getName = DataName.title
    }
    
    }
    


export  default  new ProfileStore()