var areaTextoInput = document.querySelector('.caixaTextoInput');
var texto = areaTextoInput.value.toLowerCase();
var textoAlterado = "";
var areaTextoMensagem = document.querySelector('.mensagem-caixaTexto');
var textoMensagem = areaTextoMensagem.value.toLowerCase();

function Criptografar() {
    if (texto != "") {
        textoAlterado = "";
        texto = areaTextoInput.value.toLowerCase();
        document.querySelector('.mensagem-img').style.display = "none";

        document.querySelector('.mensagem-descricaoDestaque').style.display = "none";

        document.querySelector('.mensagem-descricao').style.display = "none";

        document.querySelector('.mensagem-caixaTexto').style.display = "block";
        document.querySelector('.mensagem-botaoCopiar').style.display = "block";
        
        for(let i=0; i< texto.length;i++){
            if(texto[i]==='a'){
                textoAlterado+= "ai"
            }else if(texto[i]==='e'){
                textoAlterado+= "enter"
            }else if(texto[i]==='i'){
                textoAlterado+= "imes"
            }else if(texto[i]==='o'){
                textoAlterado+= "ober"
            }else if(texto[i]==='u'){
                textoAlterado+= "ufat"
            }else{
                textoAlterado+=texto[i];
            }
        }
        areaTextoMensagem.value = textoAlterado;
    }
}

function Descriptorafar() {
    if (texto != "") {
        textoAlterado = "";
        texto = areaTextoInput.value.toLowerCase();
        document.querySelector('.mensagem-img').style.display = "none";

        document.querySelector('.mensagem-descricaoDestaque').style.display = "none";

        document.querySelector('.mensagem-descricao').style.display = "none";

        document.querySelector('.mensagem-caixaTexto').style.display = "block";
        document.querySelector('.mensagem-botaoCopiar').style.display = "block";
        
        for(let i=0; i< texto.length;i++){
            if(texto[i]==='ai'){
                textoAlterado+= "a"
            }else if(texto[i]==='enter'){
                textoAlterado+= "e"
            }else if(texto[i]==='imes'){
                textoAlterado+= "i"
            }else if(texto[i]==='ober'){
                textoAlterado+= "o"
            }else if(texto[i]==='ufat'){
                textoAlterado+= "ufat"
            }else{
                textoAlterado+=texto[i];
            }
        }
        areaTextoMensagem.value = textoAlterado;
    }
}


async function Copiar(){
    areaTextoMensagem = document.querySelector('.mensagem-caixaTexto');
    await navigator.clipboard.writeText(areaTextoMensagem.value);
    console.log(areaTextoMensagem.value);
}

async function copiarTexto() {
    // Obtém o elemento textarea pelo seu ID
    var textarea = document.getElementById("meu-textarea");
    // Copia o texto para a área de transferência
    await navigator.clipboard.writeText(textarea.value);
  }


var botaoCrip = document.querySelector('.botaoCriptografar');
var botaoCopy = document.querySelector('.mensagem-descricao');

botaoCrip.onclick = Criptografar;
botaoCopy.onclick = Copiar;