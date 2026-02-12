import { submit as submitLogic } from "./index.js";

export default class FormValidator{
    constructor(formElement, inputList){
        this._formElement = formElement;
        this._inputList = inputList;
        this._buttonElement = formElement.querySelector('.form__button');
        this._setButton = this._setButton.bind(this);
    }
    enableValidation(){
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);

            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState();
            });
    });
        this._formElement.addEventListener('submit', (evt)=> this._submit(evt));
    }
    _toggleButtonState(){
        if(this._hasInvalidInput()){
            this._setButton(false);
        }else{
            this._setButton(true);
        }
    }
    _hasInvalidInput(){
        return this._inputList.some((inputElement)=>{
            return !inputElement.validity.valid;
        })
    }
    _setButton(valid){
        if(valid){
            this._buttonElement.removeAttribute("disabled");
            this._buttonElement.classList.remove("form__button_disabled");
        }else{
            this._buttonElement.setAttribute("disabled", true);
            this._buttonElement.classList.add("form__button_disabled");
        }
    }
    _isValid(inputElement){
        if(!inputElement.validity.valid){
            this._showInputError(inputElement, inputElement.validationMessage)
        }else{
            this._hideInputError(inputElement);
        }
    }
    _showInputError(inputElement, errorMessage){
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add('form__input_type_error');
        errorElement.textContent = errorMessage;
        errorElement.classList.add('form__input-error_active');
    }
    _hideInputError(inputElement){
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove('form__input_type_error')
        errorElement.textContent = "";
        errorElement.classList.remove('form__input-error_active');
    }       
    
    _submit(evt){
        evt.preventDefault();
        submitLogic(this._formElement);
        this._setButton(false);
    }
}