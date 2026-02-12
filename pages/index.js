import {initialCards, imagePopup} from "../utils/constants.js";
import Section from "../components/Section.js";
import  Card  from "../components/Card.js";
//import FormValidator from "../components/formValidator.js";
//import {formAdd, formEdit, closeForm, profileName, profileWork, openForm} from "../components/utils.js";


const elements = new Section({
  items: initialCards,
  renderer: (item)=>{
    const cardElement = new Card(item.name, item.link, imagePopup);
    const cardHTML = cardElement.generateCard();
    return cardHTML;
  }
},'.element')
elements.renderer();


/* initialCards.forEach(card => {
  const cardHTML = newCard(card.name, card.link);
  elementsContainer.append(cardHTML);
});

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
    const imagePopup = ;
    const cardElement = new Card(name, link, imagePopup);
    const cardHTML = cardElement.generateCard();
    return cardHTML;
}
formList.forEach(function(formElement){
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const newValidator = new FormValidator(formElement, inputList);
    newValidator.enableValidation();
});
 */
//export{newCard, submit}