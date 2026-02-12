export const initialCards = [
{
  name: "Valle de Yosemite",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
},
{
  name: "Lago Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
},
{
  name: "Montañas Calvas",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
},
{
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
},
{
  name: "Parque Nacional de la Vanoise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
},
{
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
}
];

export const elementsContainer = document.querySelector('.element');
export const formList = Array.from(document.querySelectorAll('.form__container'));

export const buttonEdit = document.querySelector('.profile__button-edit');
export const buttonAdd = document.querySelector('.profile__button-add');
export const blockForms = document.querySelector('.forms');
export const formAdd = document.forms.formAdd;
export const formEdit = document.forms.formEdit;

export const formCloseEdit = formEdit.querySelector('#formsCloseEdit');
export const formCloseAdd = formAdd.querySelector("#formsCloseAdd");

export const profileName = document.querySelector('.profile__name');
export const profileWork = document.querySelector('.profile__ocupation');

export const imagePopup = document.querySelector('.image-window')