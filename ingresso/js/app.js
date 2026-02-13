let pistaTotal = document.getElementById('qtd-pista');
let superiorTotal = document.getElementById('qtd-superior');
let inferiorTotal = document.getElementById('qtd-inferior');

function comprar(){
    // Recupera tipo e quantidade de ingressos
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let ingressos = 0;
    //Validação do tipo de ingresso recuperado
    if (!tipoIngresso || tipoIngresso.trim() === ""){
        alert('Escolha de ingresso inválida.');
        return;
    }

    //Validação da quantidade de ingressos
    if(isNaN(quantidade) || quantidade <= 0){
        alert('Escolha de quantidade inválida.');
        return;
    }

    //Recupera quantidade de ingresso por tipos
    if(tipoIngresso === 'pista'){
        let pista = pistaTotal.textContent - quantidade;
        ingressos = pistaTotal.textContent;
        //Verifica se quantidade escolhida é maior que a quantidade disponível de ingressos
        if((parseInt(quantidade) > parseInt(ingressos)) && (pistaTotal.textContent != 0)){
            alert('Escolha de quantidade inválida');
        }else{
            if(pista >= 0){
                pistaTotal.textContent = pistaTotal.textContent - quantidade;
            }else{
                alert('Ingressos esgotados na pista.');           
            }
        }
    }else if(tipoIngresso === 'inferior'){
        let inferior = inferiorTotal.textContent - quantidade;
        ingressos = inferiorTotal.textContent;

        if((parseInt(quantidade) > parseInt(ingressos)) && (inferiorTotal.textContent != 0)){
            alert('Escolha de quantidade inválida');
        }else{
            if(inferior >= 0){
                inferiorTotal.textContent = inferiorTotal.textContent - quantidade;
            }else{
                alert('Ingressos esgotados nas cadeiras inferiores.');           
            }
        }
    } else {
        let superior = superiorTotal.textContent - quantidade;
        ingressos = superiorTotal.textContent;

        if((parseInt(quantidade) > parseInt(ingressos)) && (superiorTotal.textContent != 0)){
            alert('Escolha de quantidade inválida');
        }else{
            if(superior >= 0){
                superiorTotal.textContent = superiorTotal.textContent - quantidade;
            }else{
                alert('Ingressos esgotados nas cadeiras superiores.');           
            }
        }       
    }
}