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
export const inputName = document.querySelector("#profile-name");
export const inputWork = document.querySelector("#profile-work");


/* import Api from "../src/utils/api.js";

const api = new Api("https://around-api.es.tripleten-services.com/v1", {Authorization:"39e7e87b-63d8-4747-bf9f-2089ed281080", "Content-Type": "application/json"})
api.getAppInfo()
function handleCardClick(link) {
  imagePopup.open(link)
} */