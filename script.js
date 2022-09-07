const textoIngresado = document.querySelector("#text-input");
const textoResultado = document.querySelector("#texto2");
const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const btnCopiar = document.querySelector("#copiar");
var muneco = document.querySelector("#muneco");
var texto2 = document.querySelector("#texto2");



function ocultarAdelante(){
    muneco.style.visibility = "hidden";
    btnCopiar.style.visibility = "visible";
    texto2.style.visibility = "visible";
        
};

function encriptar(){
    let texto = textoIngresado.value.toLowerCase();
    let textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

   
 
    textoResultado.value = textoEncriptado;
    ocultarAdelante();

}

function desencriptar(){
    let textoEncriptado = textoIngresado.value.toLowerCase();
    let texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
  
    document.getElementById("copiar").style.visibility = "visible";
  
    textoResultado.value = texto;

    return texto;      
}

function copiar () {
    let textoEncriptado = textoResultado.value;
    navigator.clipboard.writeText(textoEncriptado);
    alert("¡Texto Copiado!")
  }

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;

 
