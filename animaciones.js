
    function draw() {
      let canvas = document.getElementById("imagenes");
      let cadenas=["struct nodo","{","int dato;","struct *nodo ptrsig;","}"];

      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
      }
    }


    function EstructPila(int dato){
      let Pila= new Stack();
    }


    function mandarPagina(){
      alert("Ahora");
      console.log("Hla");
    }


    function cargar(){
      let pagina=document.getElementById("pila");
      pagina.addEventListener("click",mandarPagina,false);
    }


  window.addEventListener("load",cargar,false);
