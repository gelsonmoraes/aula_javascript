
var nome = "Gelson Moraes"
var d = new Date();
alert("Bem-vindo, " + nome + "!");


var idade = prompt("Qual é a sua idade?");

if(idade < 18){
    alert(nome + ", você tem " + idade + " anos e é menor de idade em " + d.getDate() +"/"+ d.getMonth() +"/" + d.getFullYear() + "!")
}else{
    alert(nome + ", você tem " + idade + " anos e é maior de idade em " + d.getDay() +"/"+ d.getMonth() +"/" + d.getFullYear() + "!")
}