let buttonEdit = document.querySelector('.profile__button-edit');
let buttonAdd = document.querySelector('.profile__button-add');

let blockForms = document.querySelector('.forms');
let blockFormEdit = blockForms.querySelector("#edit-profile__form");
let blockFormAdd = blockForms.querySelector("#new-element__form");

let formCloseEdit = blockFormEdit.querySelector('#formsCloseEdit');
let formCloseAdd = blockFormAdd.querySelector("#formsCloseAdd");

let profileName = document.querySelector('.profile__name');
let profileWork = document.querySelector('.profile__ocupation');

let formAdd = document.forms.formAdd;
let formEdit = document.forms.formEdit;
let editName = formEdit.elements.name;
let editWork = formEdit.elements.work;

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

function cerrarFueraWindow(evt){
  if(evt.target === document.querySelector(".image-window")){
    imageWindowClose();
  }
}
function cerrarESCWindow(evt){
  if(evt.key === "Escape"){
    imageWindowClose();
  }
}

buttonEdit.addEventListener('click', openFormEdit);
buttonAdd.addEventListener('click', openFormAdd);

formCloseAdd.addEventListener('click', closeForm);
formCloseEdit.addEventListener('click', closeForm);

class Card{
  constructor(cardText, cardImage){
    this._cardText=cardText;
    this._cardImage=cardImage;
  }
  _duplicateTemplate(){
    const placeCard = document.querySelector(".template-element").content.querySelector('.element__card').cloneNode(true);
    return placeCard;
  }
  generateCard(){
    /*Duplicate the template */
     this._newCard = this._duplicateTemplate();
    //Values
    this._newCard.querySelector('.element__card-text').textContent = this._cardText;
    this._newCard.querySelector(".element__card-image").src = this._cardImage;
    this._newCard.querySelector(".element__card-image").alt = this._cardText;
    
    this._like();
    this._trash();
    this._clickImage();
    
    return this._newCard;
  }
  _like(){
    const heart = this._newCard.querySelector(".element__card-heart")
    heart.addEventListener("click", function (evt) {
      evt.target.classList.toggle('element__card-heart_active');
    });
  }
  _trash(){
    const trash = this._newCard.querySelector(".element__card-trash");
    trash.addEventListener("click", ()=>{
      this._newCard.remove();
    })
  }
  _clickImage(){
    const image = this._newCard.querySelector(".element__card-image");
    image.addEventListener('click', ()=>{
      this._openImage();
    });
  }
  _openImage(){
    const image = this._newCard.querySelector(".element__card-image");
    image.removeEventListener('click', ()=>{
      this._openImage();
    });

    const imagePopup = document.querySelector(".image-window");
    imagePopup.classList.add('image-window_open');
      
    imagePopup.querySelector('.image-window__image').src = this._cardImage;
    imagePopup.querySelector('.image-window__image').alt = this._cardText;

    const imageClose = imagePopup.querySelector('.image-window__button-close');
    imageClose.addEventListener('click', ()=>{
      this._closeImage();
    });
    this._specialClose = (evt) =>{
      console.log('entro');
      console.log(evt.target.value);
      if(evt.target === 'Escape'){
        this._closeImage();
      }else if(evt.target === document.querySelector('.image-Window') ){
        console.log('entro');
        this._closeImage();
      }
    }
    imagePopup.addEventListener('keydown', this._specialClose);
    imagePopup.addEventListener('click', this._specialClose);
  }
  _closeImage(){
    const imagePopup = document.querySelector(".image-window");

    imagePopup.classList.remove('image-window_open');
    imagePopup.removeEventListener('click', ()=>{
      this._closeImage();
    });  
    imagePopup.removeEventListener('keydown', this._specialClose);
    imagePopup.removeEventListener('click', this._specialClose);
  }
}

initialCards.forEach(card => {
  const cardElement = new Card(card.name, card.link);
  const cardHTML = cardElement.generateCard();
  elementsContainer.append(cardHTML);
});