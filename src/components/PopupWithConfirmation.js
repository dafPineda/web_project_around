import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = document.querySelector(popupSelector)
    this._card = null;
  }
  setCardToDelete(card){
    this._card = card
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._card.remove()
      this.close()
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}