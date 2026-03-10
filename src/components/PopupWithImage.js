import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector)
        this._image = this._popup.querySelector('.image-window__image')
    }
    open(link){
        this._image.src = link;
        super.open();
    }
}