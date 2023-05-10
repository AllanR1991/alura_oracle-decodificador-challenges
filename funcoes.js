var areaTextoInput = document.querySelector('.caixaTextoInput');
var texto;
var areaTextoMensagem = document.querySelector('.mensagem-caixaTexto');
var textoMensagem = areaTextoMensagem.value.toLowerCase();

var matrizCode = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];

function Criptografar() {
    texto = areaTextoInput.value.toLowerCase();
    if (texto != "") {

        document.querySelector('.mensagem-img').style.display = "none";
        document.querySelector('.mensagem-descricaoDestaque').style.display = "none";
        document.querySelector('.mensagem-descricao').style.display = "none";

        document.querySelector('.mensagem-caixaTexto').style.display = "block";
        document.querySelector('.mensagem-botaoCopiar').style.display = "block";

        /* 
        if (texto.includes('e')) {
            texto = texto.replaceAll('e', 'enter');
        }
        if (texto.includes('i')) {
            texto = texto.replaceAll('i', 'imes');
        }
        if (texto.includes('a')) {
            texto = texto.replaceAll('a', 'ai');
        }
        if (texto.includes('o')) {
            texto = texto.replaceAll('o', 'ober');
        }
        if (texto.includes('u')) {
            texto = texto.replaceAll('u', 'ufat')
        } */

        for(let i=0; i<matrizCode.length;i++){
            if(texto.includes(matrizCode[i][0])){
                texto = texto.replaceAll(matrizCode[i][0],matrizCode[i][1]);
            }
        }

        areaTextoMensagem.value = texto;
    }
}

function Descriptorafar() {
    texto = areaTextoInput.value.toLowerCase();
    if (texto != "") {
        textoAlterado = "";

        document.querySelector('.mensagem-img').style.display = "none";

        document.querySelector('.mensagem-descricaoDestaque').style.display = "none";

        document.querySelector('.mensagem-descricao').style.display = "none";

        document.querySelector('.mensagem-caixaTexto').style.display = "block";
        document.querySelector('.mensagem-botaoCopiar').style.display = "block";

        /* if (texto.includes('enter')) {
            texto = texto.replaceAll('enter', 'e');
        }
        if (texto.includes('imes')) {
            texto = texto.replaceAll('imes', 'i');
        }
        if (texto.includes('ai')) {
            texto = texto.replaceAll('ai', 'a');
        }
        if (texto.includes('ober')) {
            texto = texto.replaceAll('ober', 'o');
        }
        if (texto.includes('ufat')) {
            texto = texto.replaceAll('ufat', 'u')
        } */

        for(let i=0; i<matrizCode.length;i++){
            if(texto.includes(matrizCode[i][1])){
                texto = texto.replaceAll(matrizCode[i][1],matrizCode[i][0]);
            }
        }

        areaTextoMensagem.value = texto;
        /* alert("Texto Descriptografado: " + texto); */
    }
}


async function Copiar() {
    areaTextoMensagem = document.querySelector('.mensagem-caixaTexto');
    await navigator.clipboard.writeText(areaTextoMensagem.value);
    console.log(areaTextoMensagem.value);
}

function CopiaTexto() {
    // Get the text field
    /* var copyText = document.getElementById("myInput"); */

    // Select the text field
    areaTextoMensagem.select();
    //areaTextoMensagem.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(areaTextoMensagem.value);

    // Alert the copied text
    /* alert("Copied the text: " + areaTextoMensagem.value); */
}


var botaoCrip = document.querySelector('.botaoCriptografar');
var botaoDescrip = document.querySelector('.botaoDescriptografar')
var botaoCopy = document.querySelector('.mensagem-botaoCopiar');

botaoCrip.onclick = Criptografar;
botaoCopy.onclick = CopiaTexto;
botaoDescrip.onclick = Descriptorafar;