
    function draw() {
      var canvas = document.getElementById("imagenes");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");


        ctx.font = "12px Arial";
        ctx.fillText("struc { nodo}",canvas.width/2,canvas.height/2);
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 100, 100);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
      }
    }





  window.addEventListener("load",draw,false);
