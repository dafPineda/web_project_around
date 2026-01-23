export default class Card{
  constructor(cardText, cardImage, imagePopup){
    this._cardText=   cardText;
    this._cardImage=  cardImage;
    
    this._newCard=document.querySelector(".template-element").content.querySelector('.element__card').cloneNode(true);
    this._heart = this._newCard.querySelector(".element__card-heart")
    this._trash = this._newCard.querySelector(".element__card-trash");
    this._image = this._newCard.querySelector(".element__card-image");
    this._imagePopup = imagePopup; 
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
  }
}