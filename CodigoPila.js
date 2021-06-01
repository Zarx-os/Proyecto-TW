function lista(){
  window.location.replace("lista.html","_self");
}
function cola(){
  window.location.replace("cola.html","_self");
}
function pila(){
  window.location.replace("pila.html","_self");
}




//---------------------------------------------------CODIGO MAU------------------------------------------

function guardar(){
  for(let i=0;i<7;i++){
    //setInterval(function(){ponerColor(i)},3000); // 3000ms = 3s
    ponerColor(i);

  }
}

function eliminar(){
  for(let i=7;i<20;i++){
    //setInterval(function(){ponerColor(i)},3000); // 3000ms = 3s
    ponerColorPop(i);
  }
}

function ponerColor(i){
  let cab;
  cab = document.getElementById("lin"+i);
  cab.style.background = "tomato";
  cab.style.color = "tomato";
  //cab.style.fontfamily = 'Lato';
  //regresarColor(i);
  setTimeout(function(){regresarColor(i)},((i+1)*200)); // 3000ms = 3s
  //document.getElementById('imprime').innerHTML = i;
}
function regresarColor(i){
  let cab = document.getElementById("lin"+i);
  cab.style.background = "#fbdea2";
  cab.style.color = "black";
}

function ponerColorPop(i){
  let cab;
  cab = document.getElementById("lin"+i);
  cab.style.background = "tomato";
  cab.style.color = "tomato";
  //cab.style.fontfamily = 'Lato';
  //regresarColor(i);
  setTimeout(function(){regresarColor(i)},((i+1)*200)-1400); // 3000ms = 3s
  //document.getElementById('imprime').innerHTML = i;
}


// Constructor for Stack
function Stack() {
  this.list = [];

  // Push an element to the stack
  this.push = function(e) {
    this.list.push(e);
  }

  // Pop the top  from the stack
  this.pop = function() {
    return this.list.pop();
  }

  // Peek the top from the stack
  this.peek = function() {
    return this.list[this.getSize() - 1];
  }

  // Return the stack size
  this.getSize = function() {
    return this.list.length;
  }

  // Return true if stack is empty
  this.isEmpty = function() {
    return this.list.length == 0;
  }
}


//

stack = new Stack();

      function draw() {
          var canvas = document.getElementById('canvas');
          var context = canvas.getContext("2d");

          // Restablece el tamaño del lienzo a uno limpio
          canvas.width = window.innerWidth - 20;
          canvas.height = window.innerHeight - 180;
          context.clearRect(0, 0, canvas.width, canvas.height);

          context.font = "14px sans-serif";
          context.strokeStyle = "#100"; // Coloca el color 

          if (stack.isEmpty()) {
              context.fillText("stack is empty", canvas.width / 2 - 50, 15);
          }
          else {
              x = canvas.width / 2 - 30;
              y = canvas.height - 30;
              rectWidth = 60;
              rectHeight = 20;

              list = stack.list;
              for (var i = 0; i < list.length; i++) {
                  value = list[i];
                  context.fillText(list[i] + "", x + 15, y + 15);
                  context.rect(x, y, rectWidth, rectHeight);
                  y -= rectHeight;
              }
              context.fillText("Cima", x - 85, y + rectHeight + 10);
              drawArrowLine(context, x - 45, y + rectHeight + 10,
                      x, y + rectHeight + 10);
          }

          context.stroke();
      }

      function peek() {
          if (stack.isEmpty()) {
              alert("La pila esta vacia ");
          }
          else {
              alert("La cima es: " + stack.peek());
          }
      }

      function pop() {
          if (stack.isEmpty()) {
              alert("La pila esta vacia ");
          }
          else {
              stack.pop();
              draw();
              eliminar();
          }
      }

      function push() {
          var value = document.getElementById('value').value.trim();
          if (value == "") {
              alert("Inserto ningun valor");
          }
          else {
              stack.push(value);
              guardar();
          }

          draw();
      }

      function drawArrowLine(context, x1, y1, x2, y2) {
          context.moveTo(x1, y1);
          context.lineTo(x2, y2);
         //Encontrar la pendiente de la linea
          var slope = (y1 - y2) / (x1 - x2);

          var arctan = Math.atan(slope);

          // Pondra la flecha 45 del punto x2
          var set45 = 1.57 / 2;

          // La flecha apuntará a i
          if (x1 < x2) {
              // Se añade 90 a la linea
              set45 = -1.57 * 1.5;
          }

          // coloca el tamaño de la flecha
          var arrlen = 15;

          // Dibuja la linea
          context.moveTo(x2, y2);
          context.lineTo(x2 + Math.cos(arctan + set45) * arrlen,
                  y2 + Math.sin(arctan + set45) * arrlen);

          context.moveTo(x2, y2);
          context.lineTo(x2 + Math.cos(arctan - set45) * arrlen,
                  y2 + Math.sin(arctan - set45) * arrlen);
      }
