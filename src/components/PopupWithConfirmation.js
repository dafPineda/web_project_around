import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleDelete) {
    super(popupSelector);
    this._form = document.querySelector(popupSelector)
    this._card = null
    this._cardId = null
    this._handleCardDelete = handleDelete
    this._submitButton = this._form.querySelector(".form__button")
  }
  setCardToDelete(card, id){
    this._card = card
    this._cardId = id
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleCardDelete(this._cardId)
      this._card.remove()
      this.close()
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
  setLoading(isLoading){
      if(isLoading){
          this._submitButton.textContent = "Eliminando..."
      } else {
          this._submitButton.textContent = "Acepto"
      }
  }
}