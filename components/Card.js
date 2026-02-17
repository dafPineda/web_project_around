 export default class Card{
  constructor(cardText, cardImage, handleCardClick){
    this._newCard = document.querySelector(".template-element").content.querySelector('.element__card').cloneNode(true)
    this._heart = this._newCard.querySelector(".element__card-heart")
    this._trash = this._newCard.querySelector(".element__card-trash")
    this._image = this._newCard.querySelector(".element__card-image")
    this._link = cardImage
    this._text = cardText
    this._handleCardClick = handleCardClick
  }
  generateCard(){
    //Values
    this._newCard.querySelector('.element__card-text').textContent = this._text;
    this._image.src = this._link
    this._image.alt = this._alt
    this._heart.addEventListener('click', this._like);
    this._trash.addEventListener('click', ()=> this._delete());
    this._image.addEventListener('click', ()=>{
      this._handleCardClick(this._link)
    })

    return this._newCard;
  }
  _like(evt){evt.target.classList.toggle('element__card-heart_active');}
  _delete(){this._newCard.remove();}
}