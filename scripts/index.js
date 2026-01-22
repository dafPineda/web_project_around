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
class Card{
  constructor(cardText, cardImage){
    this._cardText=   cardText;
    this._cardImage=  cardImage;
    
    this._newCard=document.querySelector(".template-element").content.querySelector('.element__card').cloneNode(true);
    this._heart = this._newCard.querySelector(".element__card-heart")
    this._trash = this._newCard.querySelector(".element__card-trash");
    this._image = this._newCard.querySelector(".element__card-image");
    this._imagePopup = document.querySelector(".image-window");
    this._imagePopupClose = this._imagePopup.querySelector('.image-window__button-close');

    this._delete = this._delete.bind(this);
    this._openPopupImage = this._openPopupImage.bind(this); //Enlaza el objeto con mi metodo
    this._closePopupImage = this._closePopupImage.bind(this);
    this._specialPopupClose = this._specialPopupClose.bind(this);
  }
  generateCard(){
    //Values
    this._newCard.querySelector('.element__card-text').textContent = this._cardText;
    this._newCard.querySelector(".element__card-image").src = this._cardImage;
    this._newCard.querySelector(".element__card-image").alt = this._cardText;
    this._heart.addEventListener('click', this._like);
    this._trash.addEventListener('click', this._delete);
    this._image.addEventListener('click',this._openPopupImage);
    
    return this._newCard;
  }
  _like(evt){evt.target.classList.toggle('element__card-heart_active');}
  _delete(){this._newCard.remove();}

  _openPopupImage(){
    this._imagePopup.classList.add('image-window_open');
    
    const img = this._imagePopup.querySelector('.image-window__image');
    img.src = this._cardImage;
    img.alt = this._cardText;

    this._imagePopupClose.addEventListener('click', this._closePopupImage);
    document.addEventListener('keydown', this._specialPopupClose);
    this._imagePopup.addEventListener('click',this._specialPopupClose);
    this._image.removeEventListener('click',this._openPopupImage);
  }
  _specialPopupClose(evt){
    if(evt.key === 'Escape' || evt.target === this._imagePopup){
        this._closePopupImage();
      }
  }
  _closePopupImage(){  
    this._imagePopup.classList.remove('image-window_open');

    this._imagePopupClose.removeEventListener('click', this._closePopupImage);
    document.removeEventListener('keydown', this._specialPopupClose);
    this._imagePopup.removeEventListener('click',this._specialPopupClose);
    this._image.addEventListener('click',this._openPopupImage);
  }
}

initialCards.forEach(card => {
  const cardElement = new Card(card.name, card.link);
  const cardHTML = cardElement.generateCard();
  elementsContainer.append(cardHTML);
});
