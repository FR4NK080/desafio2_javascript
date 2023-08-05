
function compra(){
    let barco = document.querySelector("#barco").value;
    let palta = document.querySelector("#palta").value;
    let oso = document.querySelector("#oso").value;
    let cantidad = Number(barco) + Number(palta) + Number(oso);


    if (cantidad === 0){
        resultado.innerHTML = "No llevas stickers";
}
    else if(cantidad > 10){
        resultado.innerHTML = "Llevas Demasiados stickers";
}
    else{
        resultado.innerHTML = "Llevas " + cantidad + " stickers";
}
}