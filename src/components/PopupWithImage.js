import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector, window__image){
        super(popupSelector)
        this._image = this._popup.querySelector(window__image)
    }
    open(link){
        this._image.src = link;
        super.open();
    }
}