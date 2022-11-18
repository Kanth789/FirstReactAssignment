import { makeAutoObservable, runInAction,autorun,observable, action,computed,reaction } from "mobx"
import Cookies from "js-cookie";

const Description = [
    {
        name:"Kiran",
        desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name:"Sandeep",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name:"Ritesh",
        desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name:"NK",
        desc:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]
const Title = [
    {
        name:"Kiran",
        title:"These are deatils of Kiran"
    },
    {
        name:"Sandeep",
        title:"These are deatils of Sandeep"
    },
    {
        name:"Ritesh",
        title:"These are deatils of Ritesh"
    },
    {
        name:"NK",
        title:"These are deatils of NK"
    }
]

class ProfileStore  {
    selectedValue=""
    getName=""
    getDesc=""
    
    constructor() {
        makeAutoObservable(this, {
            selectedValue: observable,
            
        })
        
    }
    onSearchInput=(event)=>{
        this.selectedValue = event.target.value
        console.log(this.selectedValue,"updated")
        
    }

    setDesc(data){ 
       
      const DataName = Description.find(eachItem=>eachItem.name === data)
      this.getDesc = DataName.desc
    }
    
    setName(data){
        const DataName = Title.find(eachItem=>eachItem.name === data)
        this.getName = DataName.title
    }
    
    }
    


export  default new ProfileStore()