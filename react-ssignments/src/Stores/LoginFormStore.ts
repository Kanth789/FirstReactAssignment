import { makeAutoObservable } from "mobx";
type loginForm = {
  username :string;
  password :string;
  error :boolean;
  error_msg :string;
}
class loginFormStore {
  username = "";
  password = "";
  error = false;
  error_msg = "";
  constructor() {
    makeAutoObservable(this);
  }
  setUserName(value:string) {
    this.username = value;
  }
  setPassword(value:string) {
    this.password = value;
  }
  setError(value:boolean) {
    this.error = value;
  }
  setErrorMsg(value:string) {
    this.error_msg = value;
  }
  
}

export default new loginFormStore();