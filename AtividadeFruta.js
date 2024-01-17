function quantidadeMacas(){
    var quantidadesDeMacas = Number(document.getElementById("quantidadesDeMacas").value);
        if (quantidadesDeMacas<12){
            document.write("Valor Total " + (quantidadesDeMacas*1.3))
        }else{
            document.write("Valor Total " + (quantidadesDeMacas*1))
        }
}