import * as moduloCalculadora from "./module.js";

function Calcular(){
    let n1 =  parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let operacao = document.getElementById("operacao").value;

    if(isNaN(n1) || isNaN(n2)){
        alert("Valores inválidos")
        return;
    }

    const resposta = operacao == "+"  ? moduloCalculadora.soma(n1,n2) : operacao == "-" ? moduloCalculadora.subtracao(n1,n2) : operacao == "*" ? moduloCalculadora.multiplicacao(n1,n2): moduloCalculadora.divisao(n1,n2);
    document.getElementById("resultado").value = `O resultado é ${resposta}`;
}

window.Calcular = Calcular;