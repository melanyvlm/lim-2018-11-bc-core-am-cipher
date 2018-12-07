window.cipher = {
  encode: function (offset,text){
    let resultado;
    let codigoAc;
    let resultado;
  
    let textoCifrado= "";
    for ( let i =0; i <text.length; i++)
    {
      const codigoAci =text.charCodeAt(i);
      if(codigoAci===32) {
        textoCifrado= textoCifrado+ " " ; 
      }
      else{
        codigoAc = ((text.charCodeAt(i) - 65 + offset)%26+65)
        resultado = String.fromCharCode(codigoAc);
        textoCifrado=textoCifrado+resultado;   
      }
  }
  return textoCifrado;
},

decode: function (offset,text){
  let numerador = 0;
  let codigoAc;
  let resultado;
  let textoDescifrado= "";
  for ( let i =0; i <text.length; i++){
    codigoAc=text.charCodeAt(i);
    numerador=(text.charCodeAt(i) - 65 - offset);
    if (codigoAc===32 ) {
      textoDescifrado= textoDescifrado+" ";

      
    } else {
            if ( codigoAc>=65 && codigoAc <=90){
                    if ( numerador>0 || (numerador)%26===0 ){
                      codigoAc = (numerador%26)+65;
                      resultado = String.fromCharCode(codigoAc);
                    }else{
                      codigoAc = (numerador%26+26)+65;
                      resultado = String.fromCharCode(codigoAc);
                    }
                    textoDescifrado= textoDescifrado+resultado;
               }
      }

    
  }
  
  return textoDescifrado ;
  },
};




