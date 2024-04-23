ano = parseInt(prompt("Informe o seu ano de nascimento: "))
nome = prompt("Qual o seu nome: ")
salarioBase = parseFloat(prompt("Informe o seu salario: "));
gratificacao = parseFloat(prompt("Informe o sua gratificação: "));
bonus = parseFloat(prompt("Informe o seu bonus: "));
desconto = parseFloat(prompt("Informe o seu desconto: "));
adicional = 0

today = new Date();
year = today.getFullYear();
idade = year - ano;

if (idade > 20){
	adicional = 2000;
}
else{
	adicional = 1000;
}


salarioLiquido = salarioBase + gratificacao + bonus - desconto;
salarioLiquido += adicional;

mensagem = "Sou " + nome + " tenho " + idade + " anos e ganho R$ " + salarioLiquido;
alert(mensagem);

