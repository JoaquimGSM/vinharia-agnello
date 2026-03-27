function botao(){
// cadastro cliente
let nomeCliente = prompt("Digite o seu nome : ");
let emailCliente = prompt("Digite o seu email: ");
alert("Cadastro realizado! Veja os detalhes no console.");

console.log(`Nome de Usuário: ${nomeCliente}`)
console.log(`Email de Usuário: ${emailCliente}`)

// informações do Vinho
let nomeVinho = prompt("Digite o nome do vinho: ");
let tipoVinho = prompt("Informe o Tipo do vinho: ");
let safraVinho = parseInt(prompt("Informe a safra do vinho: "));
let qtEstoqueVinho = parseInt(prompt("Informe o estoque do vinho: "));
alert("As informações sobre o vinho estão disponíveis no console");

console.log(`O nome do vinho é ${nomeVinho}`);
console.log(`O tipo do vinho é ${tipoVinho}`);
console.log(`A safra do vinho é de ${safraVinho}`);
console.log(`A quantidade de vinho no estoque é de ${qtEstoqueVinho}`);
}