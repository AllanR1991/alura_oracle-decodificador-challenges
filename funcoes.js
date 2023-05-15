function OcultaItensMensagem() {
    document.querySelector('.exibeMensagem__img').style.display = "none";
    document.querySelector('.exibeMensagem__descricaoDestaque').style.display = "none";
    document.querySelector('.exibeMensagem__descricao').style.display = "none";
}

function ExibeMensagemBotao() {
    document.querySelector('.exibeMensagem__caixaTexto').style.display = "block";
    document.querySelector('.exibeMensagem__botaoCopiar').style.display = "block";
    
    if(window.matchMedia("screen and (max-width: 767px)").matches){
    areaTextoMensagem.style.height = "300px";
    }else{
        areaTextoMensagem.style.height = "inherit";
    }
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
    // Alert the copied text
    /* alert("Copied the text: " + areaTextoMensagem.value); */
    areaTextoInput.select();
}

var areaTextoInput = document.querySelector('.secaoInput__caixaTextoInput');

var areaTextoMensagem = document.querySelector('.exibeMensagem__caixaTexto');
var textoMensagem = areaTextoMensagem.value.toLowerCase();

var botaoCrip = document.querySelector('.botoes__criptografar');
var botaoDescrip = document.querySelector('.botoes__descriptografar')
var botaoCopy = document.querySelector('.exibeMensagem__botaoCopiar');

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

/* areaTextoInput.oninput = ajustaTextareaAltura; */