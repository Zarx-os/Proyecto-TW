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


function draw_arrow(context, startX, startY, size) {
  var arrowX = startX + 0.75 * size;
  var arrowTopY = startY - 0.707 * (0.25 * size);
  var arrowBottomY = startY + 0.707 * (0.25 * size);
  context.moveTo(startX, startY);
  context.lineTo(startX + size, startX);
  context.lineTo(arrowX, arrowTopY);
  context.moveTo(startX + size, startX);
  context.lineTo(arrowX, arrowBottomY);
  context.stroke();
}

function mandarPagina() {
  alert("Ahora");
}

function cargar() {
  let pagina = document.getElementById('pila');
  let canvas = document.getElementById('canvas');
  var boton = document.getElementById('insertarDato');
  let ctx = canvas.getContext('2d');
  ctx.lineWidth = 3;
  draw_arrow(ctx, 25, 25, 40);
  pagina.addEventListener("click", mandarPagina, false);
  boton.addEventListener("click", appendColumn, false);
}

function agregartd() {
  var celda = document.createElement("td");
  var textoCelda = document.createTextNode("columna");
  celda.appendChild(textoCelda);
  hilera.appendChild(celda);
}

function appendRow() {
  var tbl = document.getElementById('tablas'), // table reference
    row = tbl.insertRow(tbl.rows.length); // append table row
    createCell(row.insertCell(0),0, 'row'); //se refiere a lo que ira en el div
}
//Hola
  div.appendChild(txt); // append text node to the DIV
  div.setAttribute('class', style); // set DIV class attribute
  div.setAttribute('className', style);
  canvas1.setAttribute('class',style); // set DIV class attribute for IE (?!)
  canvas1.setAttribute('className',style);
  cell.appendChild(canvas1);
  cell.appendChild(div); // append DIV to the table cell
}



function appendColumn() {
  var tbl = document.getElementById('tablas'); // table reference
  // open loop for each row and append cell
    createCell(tbl.rows[0].insertCell(tbl.rows[0].cells.length), 0, 'canvas');
}


window.addEventListener("load", cargar, false);
