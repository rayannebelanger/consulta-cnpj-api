function consultarCNPJ() {
    let cnpj = document.querySelector('#cnpj').value;
    let url =  `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`;

    fetch(url).then(function(response){
        response.json().then(mostrarCNPJ)
    });

    function mostrarCNPJ(dados) {
        console.log(dados)
        let resultado = document.querySelector('#resultado');
        if(dados.erro) {
            resultado.innerHTML = "Não foi possível localizar";
        } else {
            resultado.innerHTML = `<p>CNPJ: ${dados.CNPJ}</p>
            <p>Nome Fantasia: ${dados["NOME FANTASIA"]}</p>
            <p>Razão Social: ${dados["RAZAO SOCIAL"]}</p>
            <p>Status: ${dados["STATUS"]}</p>
            `
        }
    }

}