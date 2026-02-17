import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, handleForm){
        super(popupSelector)
        this._handleForm = handleForm

        this._form = document.querySelector(popupSelector)
        this._inputList = this._form.querySelectorAll('.form__input')
    }
    open(){
        super.open();
    }
    _getInputValues(){
        const inputs = {}
        this._inputList.forEach(input => {
            inputs[input.name] = input.value
        });
        return inputs
    }
    setEventListeners(){
        super.setEventListeners()
        this._form.addEventListener('submit', (evt)=>{
            evt.preventDefault()
            this._handleForm(this._getInputValues())
            this.close();
        })
    }
    close(){
        super.close()
        this._form.reset()
    } 
}