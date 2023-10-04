
function contaVogais() {
    var texto = document.getElementById("idString").value;  
    texto=texto.toLowerCase();
    const vogais = texto.match(/[aeiou]/gi)
    const cont = vogais.length;
    document.getElementById("idTexto").innerHTML = "Essa palavra possui: " + cont  + " vogais.";
    // document.getElementById("idVogais").innerHTML = "Vogais encontradas: " + vogais;
  }
  
   
