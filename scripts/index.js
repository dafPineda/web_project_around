import FormValidator from "./formValidator.js";
import  Card  from "./Card.js";
import {formAdd, formEdit, closeForm, profileName, profileWork, openForm} from "./utils.js";
const elementsContainer = document.querySelector('.element');

const initialCards = [
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

function submit(formElement){
    if(formElement === formAdd){
        const title = formElement.querySelector("#new-element__input-name");
        const link = formElement.querySelector("#new-element__input-link");
        const card = newCard(title.value, link.value); 
        elementsContainer.prepend(card); 
    } 
    else if(formElement === formEdit) {
        const name = formElement.querySelector("#profile-name");
        const work = formElement.querySelector("#profile-work");
        profileName.textContent = name.value; 
        profileWork.textContent = work.value; 
    }
    closeForm();
}

function newCard(name, link){
    const imagePopup = document.querySelector(".image-window");
    const cardElement = new Card(name, link, imagePopup);
    const cardHTML = cardElement.generateCard();
    return cardHTML;
}

initialCards.forEach(card => {
  const cardHTML = newCard(card.name, card.link);
  elementsContainer.append(cardHTML);
});

const formList = Array.from(document.querySelectorAll('.form__container'));

formList.forEach(function(formElement){
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const newValidator = new FormValidator(formElement, inputList);
    newValidator.enableValidation();
});

export{elementsContainer, initialCards, newCard, submit}