function OcultaItensMensagem() {
    document.querySelector('.mensagem-img').style.display = "none";
    document.querySelector('.mensagem-descricaoDestaque').style.display = "none";
    document.querySelector('.mensagem-descricao').style.display = "none";
}

function ExibeMensagemBotao() {
    document.querySelector('.mensagem-caixaTexto').style.display = "block";
    document.querySelector('.mensagem-botaoCopiar').style.display = "block";
}

function Criptografar() {
    var texto = areaTextoInput.value.toLowerCase();
    if (texto != "") {
        OcultaItensMensagem();
        ExibeMensagemBotao();

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

        for (let i = 0; i < matrizCode.length; i++) {
            if (texto.includes(matrizCode[i][0])) {
                texto = texto.replaceAll(matrizCode[i][0], matrizCode[i][1]);
            }
        }

        areaTextoMensagem.value = texto;

    }
}

function Descriptorafar() {
    var texto = areaTextoInput.value.toLowerCase();
    if (texto != "") {
        textoAlterado = "";
        OcultaItensMensagem();
        ExibeMensagemBotao();

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

        for (let i = 0; i < matrizCode.length; i++) {
            if (texto.includes(matrizCode[i][1])) {
                texto = texto.replaceAll(matrizCode[i][1], matrizCode[i][0]);
            }
        }

        areaTextoMensagem.value = texto;
        /* alert("Texto Descriptografado: " + texto); */
    }
}

function CopiaTexto() {
    // Get the text field
    /* var copyText = document.getElementById("myInput"); */

    // Select the text field
    areaTextoMensagem.select();
    //areaTextoMensagem.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(areaTextoMensagem.value);
    areaTextoMensagem.select(null);
    // Alert the copied text
    /* alert("Copied the text: " + areaTextoMensagem.value); */
    areaTextoInput.focus();
}

var areaTextoInput = document.querySelector('.caixaTextoInput');

var areaTextoMensagem = document.querySelector('.mensagem-caixaTexto');
var textoMensagem = areaTextoMensagem.value.toLowerCase();

var botaoCrip = document.querySelector('.botaoCriptografar');
var botaoDescrip = document.querySelector('.botaoDescriptografar')
var botaoCopy = document.querySelector('.mensagem-botaoCopiar');

var matrizCode = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];

botaoCrip.onclick = Criptografar;
botaoCopy.onclick = CopiaTexto;
botaoDescrip.onclick = Descriptorafar;