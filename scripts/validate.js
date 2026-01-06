//Variables
let formAdd = document.forms.formAdd;
let saveAdd = formAdd.elements.saveAdd;
let saveEdit = formEdit.elements.saveEdit;

let addTitle = formAdd.elements.title;
let addLink = formAdd.elements.link;

function setButton(isValid){
    if(isValid){
        saveEdit.removeAttribute("disabled");
        saveEdit.classList.remove("form__button_disabled");
        saveAdd.removeAttribute('disabled');
        saveAdd.classList.remove("form__button_disabled");
    }else{
        saveEdit.setAttribute("disabled", true);
        saveEdit.classList.add("form__button_disabled");
        saveAdd.setAttribute("disabled", true);
        saveAdd.classList.add("form__button_disabled");
    }
}

formEdit.addEventListener('submit', function (evt){
    evt.preventDefault();
    profileName.textContent = editName.value;
    profileWork.textContent = editWork.value;

    formEdit.reset();
    setButton(false);
    closeForm();
});

formAdd.addEventListener('submit', function(evt){ //Se activa cuando no tiene url
    evt.preventDefault();
    const newCard = createNewPlace(addTitle.value, addLink.value);
    elementsContainer.prepend(newCard);
    
    formAdd.reset();
    closeForm();
});

formEdit.addEventListener('input', function(evt){
    const isValid = editName.value.length > 2 && editName.value.length < 40 &&
                    editWork.value.length > 2 && editWork.value.length < 200;
    setButton(isValid); //evt.target.validity.valid
});

formAdd.addEventListener('input', function(evt){
    const isValid = addTitle.value.length > 2 && addTitle.value.length < 30;
    setButton(isValid);
})

/* const formsProfile = document.forms["form__profile"];
const formsElement = document.forms["form__new-Element"];

newElementInputName = document.querySelector('#new-element__input-name');
newElementInputLink = document.querySelector('#new-element__input-link');
let ProfileInputName = document.querySelector('#profile-name');
let inputOcupacion = document.querySelector('#profile-work');

let newElementInputName = document.querySelector('#new-element__input-name');
let newElementInputLink = document.querySelector('#new-element__input-link');

let buttonEditProfileSave = document.querySelector('#edit-profile__button');
let buttonNewElementSave = document.querySelector('#new-element__button');

inputName = document.querySelector('#profile-name');
inputOcupacion = document.querySelector('#profile-work'); 



function newElementValidation() {
    let newName = newElementInputName.value.trim();
    let newLink = newElementInputLink.value.trim();
    if( newName !== "" && newLink !== ""){
        buttonNewElementSave.disabled = false;
    }else{
        buttonNewElementSave.disabled = true;
    }
}





inputName.addEventListener('input', profileValidarCampos);
inputOcupacion.addEventListener('input', profileValidarCampos);

newElementInputName.addEventListener('input',newElementValidation);
newElementInputLink.addEventListener('input', newElementValidation); */
