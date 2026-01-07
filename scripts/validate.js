let saveAdd = formAdd.elements.saveAdd; 
let saveEdit = formEdit.elements.saveEdit;
let addTitle = formAdd.elements.title; 
let addLink = formAdd.elements.link;

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form__container'));

    formList.forEach(function(formElement){
        formElement.addEventListener('submit', function (evt){
            evt.preventDefault();
        })

        setEventListeners(formElement);
    })
}
function setEventListeners (formElement){
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const buttonElement = formElement.querySelector('.form__button');

    toggleButtonState(inputList, buttonElement);
    inputList.forEach(function(inputElement){
        inputElement.addEventListener('input', function(){
            isValid(formElement,inputElement);
            toggleButtonState(inputList, buttonElement);
        })
    })
}
function toggleButtonState(inputList, buttonElement){
    if(hasInvalidInput(inputList)){
        setButton(buttonElement, false);
    }else{
        setButton(buttonElement, true);
    }
}
function hasInvalidInput(inputList){
    return inputList.some(function (inputElement){
        return !inputElement.validity.valid;
    })
}
function setButton(buttonElement, isValid){
    if(isValid){
        buttonElement.removeAttribute("disabled");
        buttonElement.classList.remove("form__button_disabled");
    }else{
        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add("form__button_disabled");
    }
}
function isValid(formElement, inputElement){
    if(!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage)
    }else{
        hideInputError(formElement, inputElement);
    }
}
function showInputError(formElement, inputElement, errorMessage){
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
}
function hideInputError(formElement, inputElement){
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error')
    errorElement.textContent = "";
    errorElement.classList.remove('form__input-error_active');
}

formEdit.addEventListener('submit', function (evt){ evt.preventDefault(); 
    profileName.textContent = editName.value; 
    profileWork.textContent = editWork.value; 
    formEdit.reset(); 
    setButton(saveEdit, false); 
    closeForm(); }); 
formAdd.addEventListener('submit', function(evt){ //Se activa cuando no tiene url 
    evt.preventDefault(); 
    const newCard = createNewPlace(addTitle.value, addLink.value); 
    elementsContainer.prepend(newCard); 
    formAdd.reset(); 
    setButton(saveAdd, false);
    closeForm(); 
});

enableValidation();