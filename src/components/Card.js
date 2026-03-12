 export default class Card{
  constructor(cardText, cardImage, id, isLiked, handleCardClick, handleDelete, handleLike){
    this._newCard = document.querySelector(".template-element").content.querySelector('.element__card').cloneNode(true)
    this._heart = this._newCard.querySelector(".element__card-heart")
    this._trash = this._newCard.querySelector(".element__card-trash")
    this._image = this._newCard.querySelector(".element__card-image")
    this._link = cardImage
    this._text = cardText
    this._id = id
    this._handleCardClick = handleCardClick
    this._handleDelete = handleDelete
    this._handleLike = handleLike
    this._isLiked = isLiked
  }
  generateCard(){
    //Values
    this._newCard.querySelector('.element__card-text').textContent = this._text;
    this._image.src = this._link
    this._image.alt = this._text
    this._heart.addEventListener('click', (evt)=>{
      let heartActive = this._like(evt)
      this._handleLike(this._id, heartActive)
    });
    this._trash.addEventListener('click', ()=> {
      this._handleDelete(this._newCard); 
    })
    this._image.addEventListener('click', ()=>{
      this._handleCardClick(this._link)
    })

    if(this._isLiked) this._heart.classList.add('element__card-heart_active')
    return this._newCard;
  }
  _like(evt){
    this._isLiked = !this._isLiked
    return(evt.target.classList.toggle('element__card-heart_active'))
  }
}