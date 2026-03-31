function cadastro(){
// cadastro cliente
let nomeCliente = prompt("Digite o seu nome : ");
let emailCliente = prompt("Digite o seu email: ");
alert("Cadastro realizado! Veja os detalhes no console.");

console.log(`Nome de Usuário: ${nomeCliente}`)
console.log(`Email de Usuário: ${emailCliente}`)
}
function vinho(){
// informações do Vinho
let nomeVinho = prompt("Informe o nome do vinho: ");
let tipoVinho = prompt("Informe o tipo vinho: ");
let safraVinho = parseInt(prompt("Informe a safra vinho: "));
let qtEstoqueVinho = parseInt(prompt("Informe o estoque do vinho: "));
alert("As informações sobre o vinho estão disponíveis no console");

console.log(`O nome do vinho é ${nomeVinho}`);
console.log(`O tipo do vinho é ${tipoVinho}`);
console.log(`A safra do vinho é de ${safraVinho}`);
console.log(`A quantidade de vinho no estoque é de ${qtEstoqueVinho}`);
}