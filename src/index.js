
const cypher = document.getElementById("cypher");  
const decypher= document.getElementById("decypher");
const clickea = document.getElementById("clickea");

clickea.addEventListener("click", () => {
    document.getElementById("dvpgnicio").style.display= 'none' ;
    document.getElementById("dvpreguntas").style.display= 'block' ;
    

});


 cypher.addEventListener("click" , () => {
     const escribeMsj =document.getElementById("escribeMsj").value;
     const offset1 = parseInt(document.getElementById("num1").value);
     const resultado = cipher.encode(offset1,escribeMsj);
    //  respuesta.innerHTML= (escribeMsj); 
     document.getElementById("respuesta").innerHTML =resultado;

 });

  decypher.addEventListener("click", () => {

     const escribeMsj =document.getElementById("escribeMsj").value;
     const offset1 = parseInt(document.getElementById("num1").value);
     const resultado = cipher.decode(offset1,escribeMsj);
     document.getElementById("respuesta").innerHTML =resultado;
});

 // Boton de empezar para dirigirse a ingresar el texto y cifrado



   
 
 

