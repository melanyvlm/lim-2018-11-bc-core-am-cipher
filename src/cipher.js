window.cipher = {
  // ... 
};

function cipherencode (text, offset){
  let resultado;
  let codigoAc;
  let textoCifrado= "";
  for ( let i =0; i <=text.length; i++)
  {
    codigoAc = ((text.charCodeAt(i) - 65 + offset)%26+65);
    resultado = String.fromCharCode(codigoAc);
    textoCifrado= textoCifrado+resultado;
  }
  
 return textoCifrado ;
}



