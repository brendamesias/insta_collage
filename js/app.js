var elemDestino;
function comenzar() {
  var imagenes = document.querySelectorAll('#cajaimagenes img');
  // console.log(imagenes);
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('dragstart', comenzandoArrastrar, false);
  }

  function comenzandoArrastrar(ev) {
    var elemento = ev.target;
    ev.dataTransfer.setData('text', elemento.getAttribute('id'));
  }
}

window.addEventListener('load', comenzar, false);

function prevent(ev) {
  ev.preventDefault();
}


function soltado(ev) {
  ev.preventDefault();
  var id = ev.dataTransfer.getData('text');
  var src = document.getElementById(id).src;
  ev.target.style.background = 'url("' + src + '")';
  // ev.target.innerHTML = '<img src=' + src + '>';
}