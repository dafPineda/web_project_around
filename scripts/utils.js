const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
  
const blockForms = document.querySelector('.forms');
const blockFormEdit = blockForms.querySelector("#edit-profile__form");
const blockFormAdd = blockForms.querySelector("#new-element__form");

const formCloseEdit = blockFormEdit.querySelector('#formsCloseEdit');
const formCloseAdd = blockFormAdd.querySelector("#formsCloseAdd");

const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__ocupation');
  
const formAdd = document.forms.formAdd;
const formEdit = document.forms.formEdit;
const editName = formEdit.elements.name;
const editWork = formEdit.elements.work;


function openFormEdit() {
  blockForms.style.display = 'block';
  blockFormEdit.style.display = 'block';
  blockForms.addEventListener('click', cerrarFueraForms);
  document.addEventListener('keydown', cerrarESCForm);
  
  editName.value = profileName.textContent;
  editWork.value = profileWork.textContent;
}

function openFormAdd(){
  blockForms.style.display = 'block';
  blockFormAdd.style.display = 'block';
  blockForms.addEventListener('click', cerrarFueraForms);
  document.addEventListener('keydown', cerrarESCForm);
}

function closeForm() { //Se puede mejorar codigo
  blockForms.style.display = 'none';
  blockFormEdit.style.display= 'none';
  blockFormAdd.style.display = 'none';
  formEdit.reset();
  formAdd.reset();
  blockForms.removeEventListener('click', cerrarFueraForms);
  document.removeEventListener('keydown', cerrarESCForm);
}


function cerrarFueraForms(evt) {
  if (evt.target === blockForms) {
    closeForm();
  }
}

function cerrarESCForm(evt){
  if(evt.key === "Escape"){
    closeForm();
  }
}

buttonEdit.addEventListener('click', openFormEdit);
buttonAdd.addEventListener('click', openFormAdd);

formCloseAdd.addEventListener('click', closeForm);
formCloseEdit.addEventListener('click', closeForm);

export{formEdit, formAdd, profileName, profileWork, editName, editWork, closeForm};