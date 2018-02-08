  var elem_destino;
  function comenzar(){
    var imagenes = document.querySelectorAll('#cajaimagenes img') ;
    // console.log(imagenes);
    for(var i=0; i<imagenes.length; i++){
      imagenes[i].addEventListener("dragstart", comenzando_arrastrar, false) ;
    }
     elem_destino = document.getElementById("container_collage") ;
    elem_destino.addEventListener("dragenter", function(e){
      e.preventDefault() ; }, false);
    elem_destino.addEventListener("dragover", function(e){
      e.preventDefault() ; }, false);
    elem_destino.addEventListener("drop", soltado, false)
  }

  function comenzando_arrastrar(e){
    var elemento = e.target;
    e.dataTransfer.setData("text", elemento.getAttribute("id"));
  }

  function soltado(e){
    e.preventDefault();
    var id = e.dataTransfer.getData("text");
    var src = document.getElementById(id).src;
    elem_destino.innerHtml = "<img src='" + src + "'>"
  }

  window.addEventListener("load", comenzar, false);