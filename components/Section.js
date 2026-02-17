export default class Section{
    constructor({items, renderer}, selector){
        this._items = items;
        this._renderer = renderer
        this._selector = document.querySelector(selector)
    }
    renderer(){
        this._items.forEach(item => {
            const element = this._renderer(item)
            this.addItem(element)
        });
    }
    addItem(element, toStart = false){
        if(toStart){
            this._selector.prepend(element);
        } else {
            this._selector.append(element);
        }
    }
}