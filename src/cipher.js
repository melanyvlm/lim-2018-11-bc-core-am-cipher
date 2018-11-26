window.cipher = {
  // ... 
};

function cipherencode (text, offset){
  let resultado;
  let codigoAc;
  let textoCifrado= "";
  for ( let i =0; i <text.length; i++)
  {
    codigoAc = ((text.charCodeAt(i) - 65 + offset)%26+65);
    resultado = String.fromCharCode(codigoAc);
    textoCifrado= textoCifrado+resultado;
  }
  
 return textoCifrado ;
}


function decode(text,offset){
let numerador = 0;
let resultado;
let codigoAc;
let textoDescifrado= "";
for ( let i =0; i <text.length; i++){
  codigoAc=text.charCodeAt(i);
  numerador=(text.charCodeAt(i) - 65 - offset);
  if ( codigoAc>=65 && codigoAc <=90){
  if ( numerador>0 || (numerador)%26===0 ){
    codigoAc = (numerador%26)+65;
    resultado = String.fromCharCode(codigoAc);
  }else{
    codigoAc = (numerador%26+26)+65;
    resultado = String.fromCharCode(codigoAc);
  }
}
  textoDescifrado= textoDescifrado+resultado;
}

return textoDescifrado ;
}


