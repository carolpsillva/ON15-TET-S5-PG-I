class transcricaoDna {

constructor(dadosDna) {
        this.dadosDna = dadosDna;
}

   resultado(valorDna) {
    if(valorDna == "G") {
        console.log("C");
   } else if (valorDna == "C"){
        console.log("G");
   } else if (valorDna == "T"){
        console.log("A");
   } else if (valorDna =="A"){
       console.log("U");
   }
}

};

const conversãoDnaParaRna = new transcricaoDna
conversãoDnaParaRna.resultado("G")
conversãoDnaParaRna.resultado("C")
conversãoDnaParaRna.resultado("T")
conversãoDnaParaRna.resultado("A")