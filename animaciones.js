class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count += 1;
    console.log(`${element} added to ${this.count}`)
    return this.count - 1;
  }

  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem}`);
    return deleteItem;
  }

  peek() {
    console.log(`Top element is ${this.items[this.count-1]}`);
    return this.items[this.count - 1];
  }

  Empty() {
    console.log(this.count == 0 ? `Stack is empty` : `Stack is NOT empty`);
    return this.count == 0
  }

  size() {
    console.log(`${this.count} elements in stack`)
    return this.count - 1;
  }

  print() {
    let str = '';
    for (var i = 0; i < this.count; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }

  clear() {
    this.items = [];
    this.count = 0;
    console.log(`Stack clear`);
    return this.items;
  }


}

//--------------------------



function mandarPagina() {
  alert("Ahora");
}











//Codigo para cargar el document
function cargar() {
  let pagina = document.getElementById('pila');
  let canvas = document.getElementById('canvas');
  var boton = document.getElementById('insertarDato');
  pagina.addEventListener("click", mandarPagina, false);
  boton.addEventListener("click", appendColumn, false);
}

window.addEventListener("load", cargar, false);
