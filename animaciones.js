
    function draw() {
      let canvas = document.getElementById("imagenes");
      let cadenas=["struct nodo","{","int dato;","struct *nodo ptrsig;","}"];

      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");


        ctx.font = "0.8em Arial";
        ctx.fillText(cadenas[0],canvas.width/2,canvas.height/2);
        ctx.fillText(cadenas[1],canvas.width/2,(canvas.height/2)+15);
        ctx.fillText(cadenas[2],canvas.width/2,(canvas.height/2)+30);
        ctx.fillText(cadenas[3],canvas.width/2,(canvas.height/2)+45);
        ctx.fillText(cadenas[4],canvas.width/2,(canvas.height/2)+60);
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 100, 100);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
      }
    }

  window.addEventListener("load",draw,false);
