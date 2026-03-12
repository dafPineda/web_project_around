import {initialCards, formList, inputName, inputWork, buttonEdit, buttonAdd, buttonEditPhoto} from "../src/utils/constants.js";
import Section from "../src/components/Section.js";
import Card from "../src/components/Card.js";
import PopupWithImage from "../src/components/PopupWithImage.js";
import PopupWithForm from "../src/components/PopupWithForm.js";
import PopupWithConfirmation from "../src/components/PopupWithConfirmation.js";
import FormValidator from "../src/components/FormValidator.js"
import UserInfo from "../src/components/UserInfo.js"
import Api from "../src/utils/api.js";
import PopupWithPhoto from "../src/components/PopupWithPhoto.js";
let entro = 1
function changePhoto(link){
  const imageProfile = document.querySelector('.profile__image')
  imageProfile.style.backgroundImage = `url("${link}")`;
}
const api = new Api("https://around-api.es.tripleten-services.com/v1", {Authorization:"39e7e87b-63d8-4747-bf9f-2089ed281080", "Content-Type": "application/json"})
const imagePopup = new PopupWithImage(".image-window", '.image-window__image')
const userInfo = new UserInfo({
  name: ".profile__name",
  work: ".profile__ocupation",
  photo: ".profile__image"
})
let elements
api.getAppInfo()
.then(([userInfoApi, cardsApis])=>{
  userInfo.setUserInfo({
    name:userInfoApi.name,
    work: userInfoApi.about
  })
  userInfo.setUserPhoto(userInfoApi.avatar)
  changePhoto(userInfoApi.avatar)

  elements = new Section({
    items: cardsApis,
    renderer: (item)=>{
      const cardElement = new Card(item.name, item.link, 
        (link)=>{
          imagePopup.open(link)
        }, 
        (card)=>{
            confirmation.open();
            confirmation.setCardToDelete(card)
        });
      return cardElement.generateCard();
    }
  },'.element')
  elements.renderer()
})

const addPopup = new PopupWithForm(
  '#new-element__form', 
  (data) =>{
    const cardElement = new Card(data.title, data.link, 
      (link)=>{
        imagePopup.open(link)
      }, 
    );
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
    .catch(err => console.log(err))
})
const confirmation = new PopupWithConfirmation('#confirmation__form')
const editPhotoProfile = new PopupWithPhoto("#editPhotoProfile", 
  (link)=>{
    api.editUserPhoto(link)
    .then(res=>{
      changePhoto(res.avatar)
    })
    .catch(err=>console.log(err))
  }
)

buttonEdit.addEventListener("click", () => {
  const profile = userInfo.getUserInfo()
  inputName.value = profile.name
  inputWork.value = profile.work

  editPopup.open()
});

buttonAdd.addEventListener("click", () => addPopup.open());

buttonEditPhoto.addEventListener("click", ()=> editPhotoProfile.open())

formList.forEach(function(formElement){
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const newValidator = new FormValidator(formElement, inputList);
  newValidator.enableValidation();
}); 

addPopup.setEventListeners()
editPopup.setEventListeners()
imagePopup.setEventListeners()
confirmation.setEventListeners()
editPhotoProfile.setEventListeners()
