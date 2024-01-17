function porcentagemDosVotos(){
    var totalEleitores = Number(document.getElementById("totalEleitores").value);
    var votosBrancos = Number(document.getElementById("votosBrancos").value);
    var votosNulos = Number(document.getElementById("votosNulos").value);
    var votosValidos = Number(document.getElementById("votosValidos").value);

    var porcentagemVotosBrancos =((votosBrancos/totalEleitores)*100);
    document.write("Porcentagem de Votos Brancos: " + porcentagemVotosBrancos);

    var porcentagemVotosNulos =((votosNulos/totalEleitores)*100);
    document.write("Porcentagem de Votos Nulos: " + porcentagemVotosNulos);

    var porcentagemVotosValidos =((votosValidos/totalEleitores)*100);
    document.write("Porcentagem de Votos Validos: " + porcentagemVotosValidos);
    
        if (totalEleitores == (votosBrancos + votosNulos + votosValidos)){
        document.write("Numero total de eleitores : " + totalEleitores);
        
        }else{ 
        document.write("Eleições anuladas, houve fraude");
        }
}