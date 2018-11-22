const btn = document.getElementById("btn")  
function traerMensaje(cadena){
    const newPalabra = cadena
    return newPalabra
 }
 
 btn.addEventListener("click" , () => {
     const escribeMsj =document.getElementById("escribeMsj").value;
     const offset1 = parseInt(document.getElementById("num1").value);
     const resultado = cipherencode(escribeMsj, offset1)
    //  respuesta.innerHTML= (escribeMsj); 
     respuesta.innerHTML =resultado;

 });

 // Para ingresar el offset en Escribe el mensaje


   
 
 

