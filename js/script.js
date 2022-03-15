function Calcular () {

var notaDoPrimeiroBimestre = parseFloat(document.getElementById("nota1").value)
var notaDoSegundoBimestre = parseFloat(document.getElementById("nota2").value)
var notaDoTerceiroBimestre = parseFloat(document.getElementById("nota3").value)
var notaDoQuartoBimestre = parseFloat(document.getElementById("nota4").value)

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(2)

if (notaFixada < 6.5) { 
    var elementoMediaFinal = document.getElementById("mediaFinal")
elementoMediaFinal.innerHTML = "Sua Média Final é " + notaFixada + ' - Você foi Reprovado'
} else {
    var elementoMediaFinal = document.getElementById("mediaFinal")
elementoMediaFinal.innerHTML = "Sua Média Final é " + notaFixada + ' - Você foi Aprovado'
    }
}