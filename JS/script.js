const learmode=document.querySelector(".contenido-header a ")
learmode.addEventListener("click",function(){
learmode.classList.toggle("activar_boton")
});

const aprendemas=document.querySelector(".textos-pregunta a" )
aprendemas.addEventListener("click",function(){
    aprendemas.classList.toggle("prender_boton")
});

const contadores=document.querySelectorAll(".numbers .number h4");

contadores.forEach(function(contador){
const objetivo= Number(contador.dataset.objetivo);
let actual=0;
const incremento=Math.ceil(objetivo / 60)

const intervalo=setInterval(function () {
    actual += incremento;

    if (actual >= objetivo){
        contador.textContent = "+" + objetivo;
        clearInterval(intervalo);
    } else {
        contador.textContent= "+" + actual;
    }
    },  25 );
});

const servicios =document.querySelectorAll(".servicio")
servicios.forEach(function (servicio) {
    servicio.addEventListener("click", function(){
        servicio.classList.toggle("servicio-activo")

        const icono = servicio.querySelector("i")
        icono.classList.toggle("icono-activo")
    });
});

// Menú hamburguesa (celular)
const hamburguesa = document.querySelector(".hamburguer")
const enlaces = document.querySelector(".enlaces-header")
if (hamburguesa && enlaces) {
    hamburguesa.addEventListener("click", function () {
        enlaces.classList.toggle("menu-abierto")
    });
}
