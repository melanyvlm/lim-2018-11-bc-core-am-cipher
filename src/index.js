
const cypher = document.getElementById("btn-cypher");  
const decypher= document.getElementById("btn-decypher");
const btnexpress = document.getElementById("btn-express");

//Boton para entrar a la página interactiva
btnexpress.addEventListener("click", () => {
    document.getElementById("intropage").style.display= 'none' ;
    document.getElementById("form-express").style.display= 'block' ;
});

//Boton de cifrado
 cypher.addEventListener("click" , () => {
     const txtanswer = document.getElementById("txt-initial").value;
     const offset = parseInt(document.getElementById("offset-input").value);
     const resultado = cipher.encode(offset,txtanswer);
     document.getElementById("txt-answer").innerHTML =resultado;

 });

// Boton de decifrado
  decypher.addEventListener("click", () => {

     const txtanswer =document.getElementById("txt-initial").value;
     const offset = parseInt(document.getElementById("offset-input").value);
     const resultado = cipher.decode(offset,txtanswer);
     document.getElementById("txt-answer").innerHTML =resultado;
});




   
 
 

