function cifrar(deslocamento, mensagem) {
    let resultado = "";
    for (let i = 0; i < mensagem.length; i++) {
      let codLetraAscii = mensagem.charCodeAt(i);
      if (codLetraAscii >= 65 && codLetraAscii <= 90) {
        let calculoOffset = ((codLetraAscii - 65 + deslocamento) % 26) + 65;
        resultado += String.fromCharCode(calculoOffset);
      } else if (codLetraAscii >= 97 && codLetraAscii <= 122) { 
        let calculoOffset = ((codLetraAscii - 97 + deslocamento) % 26) + 97;
        resultado += String.fromCharCode(calculoOffset);
      } else {
        resultado += String.fromCharCode(codLetraAscii); 
      }
    }
    return resultado;
  }


function decifrar(deslocamento, mensagem) {
  let resultado = "";
  for (let i = 0; i < mensagem.length; i++) {
    let codLetraAscii = mensagem.charCodeAt(i);
    if (codLetraAscii >= 65 && codLetraAscii <= 90) {
      let calculoOffset = ((codLetraAscii - 90 - deslocamento) % 26) + 90;
      resultado += String.fromCharCode(calculoOffset);
    } else if (codLetraAscii >= 97 && codLetraAscii <= 122) {
      let calculoOffset = ((codLetraAscii - 122 - deslocamento) % 26) + 122;
      resultado += String.fromCharCode(calculoOffset);
    } else {
      resultado += String.fromCharCode(codLetraAscii);
    }

  }
  return resultado;
}

let palavraCifrada = cifrar(8, "Ate tu Brutus")
console.log(palavraCifrada)
console.log(decifrar(8, palavraCifrada))