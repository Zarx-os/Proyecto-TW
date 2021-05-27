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


function verificar(){
  let dato=document.getElementById('dato');
  if(isNaN(dato.value)){
    alert("No es un numero");
  }else {
    crearDiv(dato);
  }
}

function crearDiv(dato){
  const $div=document.createElement("div"),
  $text=document.createTextNode(dato.value);
  console.log(dato);
  let base=document.getElementById("base");
  $div.setAttribute("class","box");
  $div.appendChild($text);
  agregarNodo($div);
}

function agregarNodo($div){
  let existingNode=document.getElementById('boxbase');
  insertAfter($div,existingNode);
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}



//Codigo para cargar el document
function cargar() {
  let pagina = document.getElementById('pila');
  let canvas = document.getElementById('canvas');
  var boton = document.getElementById('insertarDato');
  pagina.addEventListener("click", mandarPagina, false);
  boton.addEventListener("click", verificar, false);
}

window.addEventListener("load", cargar, false);
