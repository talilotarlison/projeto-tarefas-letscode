function lista() {

var minhaIdeia = document.getElementById("ideia").value;
var textoMaior = minhaIdeia.toUpperCase()
var listaFinal = '<input  type="checkbox"><spam class="zoom">' + textoMaior + "</spam></input> <br>"
console.log(listaFinal)



var tarefaTela = document.getElementById("tela");

tarefaTela.innerHTML += listaFinal



}

















