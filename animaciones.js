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
    return this.count;
  }

  getLastNodo() {
    return this.items[this.count - 2];
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

const pila = new Stack();
let i = 1;
let scale = 1;
let j = 0;
let contador=0;
let dato;
function mandarPagina() {
  alert("Ahora");
}


function verificar(dato) {
  if (validaVacio(dato.value)) { //Se hace la comprabación de que text este vacio
    alert("Debe colocar un valor para agregar");
  } else {

    if (isNaN(dato.value)) { //Se comprueba que sea un número
      alert("No es un numero");
    } else {
      if (pila.size() == 0) { //Si es el primer nodo, solo se crea la cabeza sin flecha
        pila.push(dato.value);
        crearDivCabeza(dato);
        colorea(j);
        j++;
      } else { //Si no, se crea la flecha del nodo

        pila.push(dato.value);
        crearDiv(dato);
        if (pila.size() == 9 * i) { //Este es para rescalarlo cuando llegue a 9 nodos
          let todo = document.getElementById('base');
          i++;
          scale /= 2;
          todo.style.transform = "scale(" + (scale) + ")";
        }
        colorea(j); //Aquí se encarga de colorear el nodo
        j++;
      }
      contador++;
    }
  }
}



function colorea(pos) {
  let div = document.getElementById(pos);
  if (pos == 0) {
    div.style.backgroundColor = " #B5E3E3";
    div.innerHTML = "<p>" + pila.peek() + "</p>" + "<p>Head</p>";
  } else {
    let div2 = document.getElementById(pos - 1);

    div.style.backgroundColor = " #B5E3E3";
    div.innerHTML = "<p>" + pila.peek() + "</p>" + "<p>Head</p>";
    if ((pos - 1) == 0) {
      div2.style.backgroundColor = "#FEEED5";
      div2.innerHTML = "<p>" + pila.getLastNodo() + "</p>" + "<p>Cola</p>";
    } else {
      div2.style.backgroundColor = "#FEEED5";
      div2.innerHTML = "<p>" + pila.getLastNodo() + "</p>";
    }
  }
}

function coloreaRemove(pos) {
  let div = document.getElementById(pos);

  if (pos == 0) {
    alert("Esta vacia tu pila");
    pila.clear();
  } else {
    let div2 = document.getElementById(pos - 1);
    div2.style.backgroundColor = "#B5E3E3";
    div2.innerHTML = "<p>" + pila.peek() + "</p>" + "<p>Head</p>";
  }
}

function validaVacio(valor) { //Función para verificar si esta vacio text
  valor = valor.replace("&nbsp;", "");
  valor = valor == undefined ? "" : valor;
  if (!valor || 0 === valor.trim().length) {
    return true;
  } else {
    return false;
  }
}


function eliminar() { //Función para eliminar los nodos
  let todo = document.getElementById('base');
  if (pila.size() == 0) { //Si la pila esta vacia, no se puede eliminar nodos
    alert("No se pueden eliminar más elementos");
  } else {
    todo.removeChild(todo.childNodes[2]); //Remueve al div
    pila.pop();
    if (pila.size() == 8 * (i - 1)) { //Rescalar cuando la cantidad de nodos sean menores
      let todo = document.getElementById('base');
      i--;
      if (i == 0) { //Aquí solo hacemos una comprobación del nodo 0
        style = 1;
        i = 1;
      } else {
        scale *= 2;
      }
      todo.style.transform = "scale(" + (scale) + ")";
    }
    j--;
    coloreaRemove(j);
  }
  contador--;
}


function crearDiv(dato) { //Se crean los nodos para agregarlos dinamicamente
  const $divarrow = document.createElement("div"),
    $divicon = document.createElement("div"),
    $divnodo = document.createElement("div"),
    $divboxbase = document.createElement("div"),
    $text = document.createTextNode(dato.value);
  let base = document.getElementById("base");
  $divicon.setAttribute("class", "icon");
  $divarrow.setAttribute("class", "arrow");
  $divnodo.setAttribute("class", "nodo");
  $divnodo.setAttribute("id", j)
  $divboxbase.setAttribute("class", "boxbase");
  $divnodo.appendChild($text);
  $divicon.appendChild($divarrow);
  $divboxbase.appendChild($divnodo);
  $divboxbase.appendChild($divicon);
  agregarNodo($divboxbase);
}


function crearDivCabeza() { //Lo mismo que lo de arriba, pero este no lleva flecha de nodo
  const $divnodo = document.createElement("div"),
    $divboxbase = document.createElement("div"),
    $text = document.createTextNode(dato.value);
  let base = document.getElementById("base");
  $divnodo.setAttribute("class", "nodo");
  $divnodo.setAttribute("id", j);
  $divboxbase.setAttribute("class", "boxbase");
  $divnodo.appendChild($text);
  $divboxbase.appendChild($divnodo);
  agregarNodo($divboxbase);
}

function agregarNodo($div) { //agraga los nodos al elemento padre
  let existingNode = document.getElementById('boxbase');
  insertAfter($div, existingNode);
}

function insertAfter(newNode, existingNode) { //Esta función nos agrega los elementos antes del creado
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

//funciones para guardar y cargar Pila

function guardarPila() {
  let dato = document.getElementById('dato');

  if (validaVacio(dato.value)) {

    alert("No puedes guardar ya que no hay nada en la pila");
  } else {
    if (typeof(Storage) !== "undefined") {
      localStorage.clear();

      for (let i = 0; i < pila.size(); i++) {
        localStorage.setItem(i, pila.items[i]);
      }
      localStorage.setItem("size", pila.size());
    } else {
      alert("Lo sieto, tu navegador no soporta el guardado");
    }
  }

}

function cargarPila() {
  if (typeof(Storage) !== "undefined") {
    if(contador==1){
      alert("La pila ya esta cargada");
    }else{
      limpiar();
      for(let i=0;i<localStorage.getItem("size");i++){
          dato.value=localStorage.getItem(i);
          verificar(dato);
      }
      dato.setAttribute("value","");
      contador=1;
    }
  } else {
    alert("Lo sieto, tu navegador no soporta el guardado");
  }
}

function limpiar() {
  let tamano=pila.size();
  for (let i = 0; i < tamano; i++) {
    eliminar();
  }
  dato.setAttribute("value","");
}
//Codigo para cargar el document
function cargar() {
  let pagina = document.getElementById('pila');
  let lista = document.getElementById('lista');
  let sacar = document.getElementById('sacar');
  let boton = document.getElementById('insertarDato');
  let cargar = document.getElementById('cargar');
  let guardar = document.getElementById('guardar');
  dato = document.getElementById('dato');
  pagina.addEventListener("click", mandarPagina, false);
  boton.addEventListener("click", function(){verificar(dato)}, false);
  sacar.addEventListener("click", eliminar, false);
  guardar.addEventListener("click", guardarPila, false);
  cargar.addEventListener("click", cargarPila, false);
}

window.addEventListener("load", cargar, false);
