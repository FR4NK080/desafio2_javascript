
function clave(){
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let num3 = document.querySelector("#num3").value;
    let resu = document.querySelector("#resultado");
        union = num1 + num2 + num3;
        if(union === "911"){
            resu.innerHTML = "Password 1 correcto"
        }
        else if(union === "714"){
            resu.innerHTML = "Password 2 correcto"
        }
        else{
            resu.innerHTML = "Password incorrecto"
        }

}