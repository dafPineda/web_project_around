export default class Popup{
    constructor(selector){

    }
}


/* 
this._imagePopup = imagePopup; 
    this._imagePopupClose = this._imagePopup.querySelector('.image-window__button-close');

    this._delete = this._delete.bind(this);
    this._openPopupImage = this._openPopupImage.bind(this); //Enlaza el objeto con mi metodo
    this._closePopupImage = this._closePopupImage.bind(this);
    this._specialPopupClose = this._specialPopupClose.bind(this);

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
 */