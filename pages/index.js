import {formList, inputName, inputWork, buttonEdit, buttonAdd, buttonEditPhoto} from "../src/utils/constants.js";
import Section from "../src/components/Section.js";
import Card from "../src/components/Card.js";
import PopupWithImage from "../src/components/PopupWithImage.js";
import PopupWithForm from "../src/components/PopupWithForm.js";
import PopupWithPhoto from "../src/components/PopupWithPhoto.js";
import PopupWithConfirmation from "../src/components/PopupWithConfirmation.js";
import FormValidator from "../src/components/FormValidator.js"
import UserInfo from "../src/components/UserInfo.js"
import Api from "../src/utils/api.js";

function clickImage(link){
  imagePopup.open(link)
}
function clickTrash(card, id){
    confirmation.open();
    confirmation.setCardToDelete(card, id)
}
function cardDelete(id) {
  confirmation.setLoading(true)
  api.deleteCard(id)
  .finally(()=> confirmation.setLoading(false))
}
function cardLike(id, heartActive){
  if(heartActive){
    api.like(id)
    .catch(res => console.log(res))
  }else{
    api.dislike(id)
    .catch(err => console.log(err))
  }
}
function changePhoto(link){
  const imageProfile = document.querySelector('.profile__image')
  imageProfile.style.backgroundImage = `url("${link}")`;
}

const api = new Api("https://around-api.es.tripleten-services.com/v1", {Authorization:"39e7e87b-63d8-4747-bf9f-2089ed281080", "Content-Type": "application/json"})
const confirmation = new PopupWithConfirmation('#confirmation__form', cardDelete)
const imagePopup = new PopupWithImage(".image-window", '.image-window__image')
let elements //Variable global
const userInfo = new UserInfo({
  name: ".profile__name",
  work: ".profile__ocupation",
  photo: ".profile__image"
})


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
      const cardElement = new Card(item.name, item.link, item._id, item.isLiked,
        clickImage, clickTrash, cardLike)
       const cardHTML = cardElement.generateCard();
       return cardHTML
    }
  },'.element')
  elements.renderer()
})

const addPopup = new PopupWithForm(
  '#new-element__form', 
  (data) =>{
    addPopup.setLoading(true)
    api.addCard({name:data.title, link:data.link})
    .then(data=>{
      const cardElement = new Card(data.name, data.link, data._id, data.isLiked, 
        clickImage, clickTrash, cardLike);

      const cardHTML = cardElement.generateCard();

      elements.addItem(cardHTML, true)
    })
    .catch(err => console.log(err))
    .finally(()=>addPopup.setLoading(false))
  }
)
const editPopup = new PopupWithForm(
  '#edit-profile__form',
   (data)=>{
    editPopup.setLoading(true)
    api.editUserInfo({name:data.name, about:data.work})
    .then(data =>{
      userInfo.setUserInfo({
        name:data.name, 
        work:data.about
      })
    })
    .catch(err => console.log(err))
    .finally(()=> editPopup.setLoading(false))
})
const editPhotoProfile = new PopupWithPhoto("#editPhotoProfile", 
  (link)=>{
    editPhotoProfile.setLoading(true)
    api.editUserPhoto(link)
    .then(res=>{
      changePhoto(res.avatar)
    })
    .catch(err=>console.log(err))
    .finally(()=>editPhotoProfile.setLoading(false))
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
