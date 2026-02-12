export default class Section{
    constructor({items, renderer}, selector){
        this._items = items;
        this._renderer = renderer
        this._selector = document.querySelector(selector)
    }
    renderer(){//renderizará cada elemento en una página
        this._items.forEach(item => {
            const element = this._renderer(item)
            this.addItem(element)
        });
    }
    addItem(element){ //que toma un elemento del DOM y lo agrega al contenedor.
        this._selector.append(element)
    }
}