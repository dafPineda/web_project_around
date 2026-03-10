import Popup from "../../components/Popup";

export default class PopupWithConfirmation extends Popup{
    constructor(popupSelector, handleDelete){
        super(popupSelector)
        this._handleDelete = handleDelete
    }
    open(){
        super.open()
    }
    setEventListeners(){
        super.setEventListeners('submit', evt=>{
            evt.preventDefault()
            this._handleDelete()
            this.close();
        })
    }
}