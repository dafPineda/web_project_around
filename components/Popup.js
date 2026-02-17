export default class Popup{
    constructor(popup){
        this._popup = document.querySelector(popup)
        this._handleEscClose = this._handleEscClose.bind(this)
    }
    open(){
        this._popup.classList.add('popup__open'); 
        document.addEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(evt){
         if(evt.key === 'Escape'){
        this.close();
      }
    }
    close(){
        this._popup.classList.remove('popup__open');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    setEventListeners(){
        const closeButton = this._popup.querySelector(".popup__close");
        closeButton.addEventListener("click", () => this.close());
        this._popup.addEventListener('click', (evt)=>{
            if(evt.target === this._popup){
                this.close()
            }
        })
    }
}