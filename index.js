let botoes = document.getElementsByClassName('btn');
let display = document.getElementById('display');

let operacao = "";

for (let i = 0; i < botoes.length; i++){
    let botao = botoes[i];

    botao.addEventListener('click', function() {
        switch (botao.classList.contains('acao')){
            case true:
                 if (botao.classList.contains('operador')){
                     concatenarOperacao(botao);
                 } else{
                     callAcao(botao);
                 }

                 break;
             case false:
                     concatenarOperacao(botao);
                 break;
             default:
                 break;
     
     
         }
    });
}

function concatenarOperacao(botao){
    if (botao.classList.contains('operador')){
        if (!operacao) {
            return;
        } 
    }
        operacao += botao.dataset.value;
        display.innerHTML = operacao;
}
   
    function callAcao (botao) {
    switch (botao.dataset.value) {
        case 'calcular':
            operacao = eval(operacao).toString();
            display.innerHTML = operacao;
            break;
        case "backspace":
            operacao = operacao.slice(0, -1);
            display.innerHTML = operacao; 
            break;
            
        case "clear":
            operacao = "";
            display.innerHTML = ""; 
            break;
    }
}
