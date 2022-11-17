import { makeObservable, runInAction,autorun,observable, action,computed,reaction } from "mobx"

class ProfileStore  {
    selectedValue=""
    constructor(value) {
        makeObservable(this, {
            selectedValue: observable,
            onSearchInput:action
        })
        
    }
    onSearchInput=(event)=>{
        this.selectedValue = event.target.value
        console.log(this.selectedValue)

    }
}

export  default new ProfileStore()