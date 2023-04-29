const cepForm = document.getElementById('cep');
const endForm = document.getElementById('endereco');
const bairroForm = document.getElementById('bairro');
const cidadeForm = document.getElementById('cidade');
const ufForm = document.getElementById('estado');
const erroCep =document.getElementById('erro__cep');

cepForm.addEventListener('focusout', ()=>{
    if(cepForm.value !== ""){
        buscaCep(cepForm.value);
        apagarMensagemErro();
    }
    else if (cepForm.value === ""){
        endForm.value = "";
        bairroForm.value = "";
        cidadeForm.value = "";
        ufForm.value = "";
        apagarMensagemErro(); 
    } 
})

function atualizarForm (endereco,bairro,cidade,uf){
    endForm.value = endereco;
    bairroForm.value = bairro;
    cidadeForm.value = cidade;
    ufForm.value = uf;

}

function mensagemErro(mensagem){
    erroCep.style.cssText = 'display: block;'
    erroCep.innerHTML = mensagem;
}

function apagarMensagemErro(){
    erroCep.style.cssText = 'display: none;'
}