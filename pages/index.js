import {initialCards, formList, inputName, inputWork, buttonEdit, buttonAdd} from "../src/utils/constants.js";
import Section from "../src/components/Section.js";
import  Card  from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/formValidator.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../src/utils/api.js";

function handleCardClick(link) {
  imagePopup.open(link)
}

const api = new Api("https://around-api.es.tripleten-services.com/v1", {Authorization:"39e7e87b-63d8-4747-bf9f-2089ed281080", "Content-Type": "application/json"})
const imagePopup = new PopupWithImage(".image-window", '.image-window__image')
const userInfo = new UserInfo({
  name: ".profile__name",
  work: ".profile__ocupation"
})
let elements
api.getAppInfo()
.then(([userInfoApi, cardsApis])=>{
  userInfo.setUserInfo({
    name:userInfoApi.name,
    work: userInfoApi.about
  })
  console.log(cardsApis)
})

 elements = new Section({
  items: initialCards,
  renderer: (item)=>{
    const cardElement = new Card(item.name, item.link, handleCardClick);
    const cardHTML = cardElement.generateCard();
    return cardHTML;
  }
},'.element')

const addPopup = new PopupWithForm(
  '#new-element__form', 
  (data) =>{
    const cardElement = new Card(data.title, data.link, handleCardClick);
    const cardHTML = cardElement.generateCard();
    elements.addItem(cardHTML, true)
  }
)
const editPopup = new PopupWithForm(
  '#edit-profile__form',
   (data)=>{
    api.editUserInfo({name:data.name, about:data.work})
    .then(data =>{
      userInfo.setUserInfo({
        name:data.name, 
        work:data.about
      })
    })
    .catch(err => console.log(erro))
})

buttonEdit.addEventListener("click", () => {
  const profile = userInfo.getUserInfo()
  inputName.value = profile.name
  inputWork.value = profile.work
  
  editPopup.open()
});

buttonAdd.addEventListener("click", () => {
  addPopup.open();
});

formList.forEach(function(formElement){
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const newValidator = new FormValidator(formElement, inputList);
  newValidator.enableValidation();
}); 

elements.renderer();
addPopup.setEventListeners()
editPopup.setEventListeners()
imagePopup.setEventListeners()