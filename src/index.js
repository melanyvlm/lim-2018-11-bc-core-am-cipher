
const cypher = document.getElementById("cypher");  
const decypher= document.getElementById("decypher");
function traerMensaje(cadena){
    const newPalabra = cadena
    return newPalabra
 }
 
 cypher.addEventListener("click" , () => {
     const escribeMsj =document.getElementById("escribeMsj").value;
     const offset1 = parseInt(document.getElementById("num1").value);
     const resultado = cipherencode(escribeMsj, offset1);
    //  respuesta.innerHTML= (escribeMsj); 
     respuesta.innerHTML =resultado;

 });

  decypher.addEventListener("click", () => {

     const escribeMsj =document.getElementById("escribeMsj").value;
     const offset1 = parseInt(document.getElementById("num1").value);
     const resultado = decode(escribeMsj, offset1);
     respuesta.innerHTML =resultado;

 
});


 // Para ingresar el offset en Escribe el mensaje


   
 
 

