
var nome = "Gelson Moraes"
var d = new Date();
alert("Bem-vindo, " + nome + "!");


var idade = prompt("Qual é a sua idade?");

if(idade < 18){
    alert(nome + ", você tem " + idade + " anos e é menor de idade em " + d.getDate() +"/"+ (d.getMonth()+1) +"/" + d.getFullYear() + "!")
}else{
    alert(nome + ", você tem " + idade + " anos e é maior de idade em " + d.getDate() +"/"+ (d.getMonth()+1) +"/" + d.getFullYear() + "!")
}


function clicou(){
    
    document.getElementById("agradecimento").innerHTML =  "Obrigado por clicar";
    //alert("Obrigado por clicar!");
    
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/gelson-moraes-ads/");
}

function trocar(elemento){
    //document.getElementById("passamouse").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML =  "Obrigado por passar o mouse!";
}

function voltar(elemento){
    //document.getElementById("passamouse").innerHTML = "Passe o mouse aqui!"
    elemento.innerHTML =  "Passe o mouse aqui!";
}

function funcaoChange(elemento){
    alert("Você selecionou o valor " + elemento.value + "!")
}