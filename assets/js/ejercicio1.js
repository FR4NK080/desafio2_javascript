let imagen = document.querySelector(".borde");
/*imagen.addEventListener("click",border);
    function border(){
    imagen.classList.toggle("borderclass");
    console.log(imagen.classList);
    }*/
const container = document.getElementById("container");

container.addEventListener("click",(e)=>{
    if((e.target.classList.contains('borde')) === true){
    e.target.classList.toggle("rojo")
}
})
