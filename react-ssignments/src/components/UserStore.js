import { makeObservable, runInAction,autorun,observable, action,computed } from "mobx"
import { v4 as uuid } from 'uuid';
class UserStore {
    subject=[]
    userInfo={
        
        id: uuid(),
        name:'',
        ischecked:false
    }
    constructor(){
        makeObservable(this,{
            userInfo:observable,
            totalSubject:computed,
            updatedUser:action,
            addSubject:action,
            subject:observable
        });
        autorun(this.logUserDetails);
        runInAction(this.prefetchData)
    }
    get totalSubject(){
        return this.userInfo.subject.length;
    }
    prefetchData(){
        console.log("run")
    }
    logUserDetails=()=>{
        console.log("subject length" + this.totalSubject)
    }
    updatedUser(name ){
        return this.userInfo.name = name;
    }
    addSubject(data ){
        return this.subject=[...this.subject,data]
    }
     
}

export default UserStore