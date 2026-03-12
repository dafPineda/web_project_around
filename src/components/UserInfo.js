export default class UserInfo{
    constructor({name, work, photoLink}){
        this._userName = document.querySelector(name)
        this._userWork = document.querySelector(work)
        this._userPhoto = photoLink
    }
    getUserInfo(){
        return({
            name:this._userName.textContent,
            work:this._userWork.textContent,
            photo:this._userPhoto
        })
    }
    setUserInfo({name, work}){
        this._userName.textContent=name
        this._userWork.textContent=work
    }
    setUserPhoto(link){
        this._userPhoto = link
    }
}