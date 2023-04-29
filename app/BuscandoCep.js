async function buscaCep (cep){
    try{
        const buscaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const buscaCepJson =  await buscaCep.json();
        if(buscaCepJson.erro){
            console.log('O cep nao existe');
            mensagemErro('Esse CEP não existe');
        }
        else{
            atualizarForm((buscaCepJson.logradouro),buscaCepJson.bairro,buscaCepJson.localidade,buscaCepJson.uf);
        }
    }
    catch{
        console.log('Esse Cep é invalido')
        mensagemErro('Esse CEP é invalido');
    }
}



