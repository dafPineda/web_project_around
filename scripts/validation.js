//Variables
const formsProfile = document.forms["form__profile"];
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

function profileValidarCampos() {
    let nameFull = inputName.value.trim();
    let ocupationFull = inputOcupacion.value.trim();
    if( nameFull !== "" && ocupationFull !== ""){
        buttonEditProfileSave.disabled = false;
    }else{
        buttonEditProfileSave.disabled = true;
    }
}

function newElementValidation() {
    let newName = newElementInputName.value.trim();
    let newLink = newElementInputLink.value.trim();
    if( newName !== "" && newLink !== ""){
        buttonNewElementSave.disabled = false;
    }else{
        buttonNewElementSave.disabled = true;
    }
}


formsProfile.addEventListener('submit', function (evt){
    evt.preventDefault();
    userName.textContent = inputName.value.trim();
    userWork.textContent = inputOcupacion.value.trim();

    inputName.value = "";
    inputOcupacion.value = "";
    buttonEditProfileSave.disabled = true;
    closeBlock();
});

formsElement.addEventListener('submit', function(evt){
    evt.preventDefault();
    const newCard = createNewPlace(newElementInputName.value, newElementInputLink.value);
    elementsContainer.prepend(newCard);
    newElementInputName.value='';
    newElementInputLink.value='';
    
    closeBlock();
});


inputName.addEventListener('input', profileValidarCampos);
inputOcupacion.addEventListener('input', profileValidarCampos);

newElementInputName.addEventListener('input',newElementValidation);
newElementInputLink.addEventListener('input', newElementValidation);