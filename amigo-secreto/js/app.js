let listaAmigos = document.getElementById('lista-amigos');

function adicionar(){
    let nome = document.getElementById('nome-amigo');
    
    if (nome.value == ""){
        alert("Nenhum nome foi informado!");
        return;
    }

    if (listaAmigos.textContent == ""){
        listaAmigos.textContent = listaAmigos.textContent + `${nome.value}`;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + `, ${nome.value}`;
    }

    nome.value = "";
    
}

function sortear(){
    if(listaAmigos.textContent == ""){
        alert('Informar nomes para sorteio!');
        return;
    }

  
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.textContent ="";
    let vetorAmigos = [];
    let j;
    let verificador = [];
    vetorAmigos = listaAmigos.textContent.split(',');

    if(vetorAmigos.length < 2){
      alert('Quantidade de nomes insuficiente para sorteio');
      return;
    }

    let vetorSorteio = [vetorAmigos.length - 1];

    for(let i = 1; i < vetorAmigos.length; i++){
        vetorSorteio[i-1] = vetorAmigos[i];
    }
    vetorSorteio[vetorSorteio.length] = vetorAmigos[0];
        
    for(let i = 0; i < vetorSorteio.length; i++){
        sorteio.innerHTML = sorteio.innerHTML + vetorAmigos[i] + ' -> ' + vetorSorteio[i] + '<br>';
    } 
}

function reiniciar(){
    document.getElementById('nome-amigo').value = "";
    document.getElementById('lista-amigos').textContent = "";
    document.getElementById('lista-sorteio').textContent = "";
}