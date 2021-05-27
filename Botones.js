function lista(){
  window.location.replace("CodigoAnimado.html","_self");
}
function pila(){
  window.location.replace("PruebaBotones.html","_self");
}




//---------------------------------------------------CODIGO MAU------------------------------------------

function guardar(){
  for(let i=0;i<9;i++){
    //setInterval(function(){ponerColor(i)},3000); // 3000ms = 3s
    ponerColor(i);

  }
}

function eliminar(){
  for(let i=9;i<18;i++){
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
  setTimeout(function(){regresarColor(i)},((i+1)*200)-1800); // 3000ms = 3s
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

          // Reset size will clear the canvas, but not for IE9
          canvas.width = window.innerWidth - 20;
          canvas.height = window.innerHeight - 180;
          context.clearRect(0, 0, canvas.width, canvas.height); // For IE 9

          context.font = "14px sans-serif";
          context.strokeStyle = "#100"; // Set a pen color

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
              alert("The stack is empty");
          }
          else {
              alert("The top element is " + stack.peek());
          }
      }

      function pop() {
          if (stack.isEmpty()) {
              alert("The stack is empty");
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
              alert("no value entered");
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

          // find slope of this line
          var slope = (y1 - y2) / (x1 - x2);

          var arctan = Math.atan(slope);

          // This will flip the arrow 45 off of a
          // perpendicular line at pt x2
          var set45 = 1.57 / 2;

          // arrows should always point towards i, not i+1
          if (x1 < x2) {
              // add 90 degrees to arrow lines
              set45 = -1.57 * 1.5;
          }

          // set length of arrows
          var arrlen = 15;

          // draw arrows on line
          context.moveTo(x2, y2);
          context.lineTo(x2 + Math.cos(arctan + set45) * arrlen,
                  y2 + Math.sin(arctan + set45) * arrlen);

          context.moveTo(x2, y2);
          context.lineTo(x2 + Math.cos(arctan - set45) * arrlen,
                  y2 + Math.sin(arctan - set45) * arrlen);
      }
