const miBoton = document.getElementById('miBoton')
function handleClick () {
    alert('¡Hola! Has hecho click en este boton')
}
miBoton.addEventListener ("click",function(){
    handleClick();
});