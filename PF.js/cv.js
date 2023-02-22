

//cree un boton que modifique el color de la palabra "rojo" al mismo color de denominacion , y a su vez que mediante un alert
//le muestre al usuario que se realiza dicha modificacion
function cambiarColor() {
    const miTexto = document.getElementById("mi-texto");
    miTexto.style.color = "red";
    var texto = document.getElementById("mi-texto").textContent;
    alert("Ahora el color es:  " + texto);
  }

