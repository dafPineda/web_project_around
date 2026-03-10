export default class UserInfo{
    constructor({name, work}){
        this._userName = document.querySelector(name)
        this._userWork = document.querySelector(work)
    }
    getUserInfo(){
        return({
            name:this._userName.textContent,
            work:this._userWork.textContent
        })
    }
    setUserInfo({name, work}){
        this._userName.textContent=name
        this._userWork.textContent=work
    }
}