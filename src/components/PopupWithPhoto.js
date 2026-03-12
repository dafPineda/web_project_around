import Popup from "./Popup.js";

export default class PopupWithPhoto extends Popup {
  constructor(popupSelector, handleEdit) {
    super(popupSelector);
    this._form = document.querySelector(popupSelector)
    this._input = this._form.querySelector(".form__input")
    this._handleEdit = handleEdit
  }
  _getInput(){
    return this._input.value
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleEdit(this._getInput())
      this.close()
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}