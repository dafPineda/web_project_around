import {formEdit, formAdd, profileName, profileWork, editName, editWork, closeForm} from "./utils.js";
class FormValidator{
    constructor(formElement){
        this._formElement = formElement;
        this._inputList = Array.from(formElement.querySelectorAll(".form__input"));
        this._buttonElement = formElement.querySelector('.form__button');
    }
    setEventListeners(){
        this._toggleButtonState();
        
        this._inputList.forEach((inputElement)=>{
            inputElement.addEventListener('input', ()=>{
                this._isValid(inputElement);
                this._toggleButtonState();
            })
        })
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
}

formEdit.addEventListener('submit',(evt)=>{
    profileName.textContent = editName.value; 
    profileWork.textContent = editWork.value; 
    formEdit.reset(); 
    setButton(saveEdit, false); 
    closeForm(); 
}); 
formAdd.addEventListener('submit', (evt)=>{
    const newCard = createNewPlace(addTitle.value, addLink.value); 
    elementsContainer.prepend(newCard); 
    formAdd.reset(); 
    setButton(saveAdd, false);
    closeForm(); 
 }); 

const formList = Array.from(document.querySelectorAll('.form__container'));
formList.forEach(function(formElement){
    formElement.addEventListener('submit', (evt)=>{evt.preventDefault();});
    const newValidator = new FormValidator(formElement);
    newValidator.setEventListeners();
});
    