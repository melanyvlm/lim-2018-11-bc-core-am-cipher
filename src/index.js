
const cypher = document.getElementById("cypher");  
const decypher= document.getElementById("decypher");
 
 cypher.addEventListener("click" , () => {
     const escribeMsj =document.getElementById("escribeMsj").value;
     const offset1 = parseInt(document.getElementById("num1").value);
     const resultado = cipher.encode(escribeMsj, offset1);
    //  respuesta.innerHTML= (escribeMsj); 
     document.getElementById("respuesta").innerHTML =resultado;

 });

  decypher.addEventListener("click", () => {

     const escribeMsj =document.getElementById("escribeMsj").value;
     const offset1 = parseInt(document.getElementById("num1").value);
     const resultado = cipher.decode(escribeMsj, offset1);
     document.getElementById("respuesta").innerHTML =resultado;
});


 // Para ingresar el offset en Escribe el mensaje


   
 
 

