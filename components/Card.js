export default class Card{
  constructor(cardText, cardImage, imagePopup){
    this._cardText=   cardText;
    this._cardImage=  cardImage;
    
    this._newCard=document.querySelector(".template-element").content.querySelector('.element__card').cloneNode(true);
    this._heart = this._newCard.querySelector(".element__card-heart")
    this._trash = this._newCard.querySelector(".element__card-trash");
    this._image = this._newCard.querySelector(".element__card-image");
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
}