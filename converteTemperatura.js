function CelciosParaFahrenheit(){
var celcius = Number(document.getElementById("TemperaturaC").value);
document.write((celcius*1.8) + 32 + " Fahenheit");
}

function FahrenheitParaCelcius(){
var fahrenheit = Number(document.getElementById("temperaturaF").value);
document.write((fahrenheit-32)*(5/9) + "Celcius");


}