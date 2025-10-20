let buttonEdit = document.querySelector('.profile__button-edit');
let editBlock = document.querySelector('.form');
let buttonClose = document.querySelector('.form__close');
let buttonSave = document.querySelector('.form__button');
let inputName = document.querySelector('#name');
let inputOcupacion = document.querySelector('#work'); 
let userName = document.querySelector('.profile__name');
let userWork = document.querySelector('.profile__ocupation');

buttonSave.disabled = true;


function editProfile() {
  editBlock.style.display = 'block';
  inputName.value = userName.textContent;
  inputOcupacion.value = userWork.textContent;
}

function closeProfile() {
  editBlock.style.display = 'none';
}

function validarCampos() {
    let nameFull = inputName.value.trim();
    let ocupationFull = inputOcupacion.value.trim();
    if( nameFull !== "" && ocupationFull !== ""){
        buttonSave.disabled = false;
    }else{
        buttonSave.disabled = true;
    }
}
function saveProfile(){
    userName.textContent = inputName.value.trim();
    userWork.textContent = inputOcupacion.value.trim();

    inputName.value = "";
    inputOcupacion.value = "";
    buttonSave.disabled = true;
    closeProfile();
}

buttonEdit.addEventListener('click', editProfile);
buttonClose.addEventListener('click', closeProfile);

inputName.addEventListener('input', validarCampos);
inputOcupacion.addEventListener('input', validarCampos);

buttonSave.addEventListener('click', saveProfile);

